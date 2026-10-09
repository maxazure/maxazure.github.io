"""Check the deployed HTML contract: identity, routes, metadata and asset links."""
import hashlib
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

root = Path(sys.argv[1] if len(sys.argv) > 1 else "dist").resolve()
origin = "https://jayliu.co.nz"
expected_title = "Jay Liu - Senior Software Engineer | FinTech | .NET | React | Cloud | AI Integration"
expected_description = "Professional portfolio of Jay Liu, a senior software engineer with 18+ years of experience. Currently at FNZ Group building enterprise financial platforms with .NET, React, Azure, and AI integration. Based in Auckland, New Zealand."
legacy_fragments = {"home", "about", "skills", "resume", "portfolio", "contact"}

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.nodes = []
        self.ids = set()
        self.title = ""
        self.h1 = 0
        self.in_title = False
        self.in_json = False
        self.json_text = ""
        self.graphs = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.nodes.append((tag, attrs))
        if "id" in attrs:
            assert attrs["id"] not in self.ids, f"Duplicate ID in {self.path}: {attrs['id']}"
            self.ids.add(attrs["id"])
        self.h1 += tag == "h1"
        if tag == "title": self.in_title = True
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_json = True
            self.json_text = ""

    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json_text += data

    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        if tag == "script" and self.in_json:
            self.graphs.append(json.loads(self.json_text))
            self.in_json = False

    def meta(self, key):
        return [a.get("content") for t,a in self.nodes if t == "meta" and (a.get("name") == key or a.get("property") == key)]

pages = {p: Page(p) for p in root.rglob("*.html")}
assert len(pages) == 5, f"Unexpected page inventory: {list(pages)}"
for path, page in pages.items():
    assert page.h1 == 1, f"Expected one H1: {path}"
    canonical = [a["href"] for t,a in page.nodes if t == "link" and a.get("rel") == "canonical"]
    assert len(canonical) == 1 and canonical[0].startswith(origin + "/"), path
    assert page.meta("og:url") == canonical, path
    assert len(page.meta("description")) == 1, path
    if path.name != "404.html":
        alternates = [a for t,a in page.nodes if t == "link" and a.get("rel") == "alternate"]
        assert len(alternates) == 3, path
        assert canonical[0] in [a["href"] for a in alternates], path
    for tag,attrs in page.nodes:
        for key in (["href"] if tag in {"a","link"} else ["src"] if tag in {"img","script"} else []):
            url = attrs.get(key)
            if not url: continue
            parsed = urlsplit(url)
            if parsed.scheme in {"mailto", "tel", "data"}: continue
            if parsed.netloc and parsed.netloc != "jayliu.co.nz": continue
            route = unquote(parsed.path)
            if not route:
                target = path
            else:
                target = root / route.lstrip("/") if route.startswith("/") else path.parent / route
                if target.is_dir(): target /= "index.html"
            assert target.is_file(), f"Broken local URL {url} in {path}"
            if parsed.fragment and target.suffix == ".html":
                assert parsed.fragment in pages[target].ids, f"Missing fragment {url}"
        for key in ("aria-controls", "aria-labelledby", "aria-describedby"):
            for ref in attrs.get(key, "").split():
                assert ref in page.ids, f"Missing {key} target {ref}"
        if tag == "a" and attrs.get("target") == "_blank":
            assert {"noopener", "noreferrer"} <= set(attrs.get("rel", "").split()), path
        if tag == "script" and attrs.get("src"):
            assert not urlsplit(attrs["src"]).netloc, "Unexpected third-party script"

home = pages[root / "index.html"]
assert home.title == expected_title, "Homepage title changed"
assert home.meta("description") == [expected_description], "Homepage description changed"
for relative in ["index.html", "zh/index.html"]:
    page = pages[root / relative]
    assert legacy_fragments <= page.ids, "Legacy fragment missing"
    assert len(page.graphs) == 1
    graph = page.graphs[0]["@graph"]
    person = next(x for x in graph if x["@type"] == "Person")
    assert person["worksFor"]["name"] == "FNZ Group"
    assert person["jobTitle"] == "Analyst Developer"
    assert not any(x["@type"] == "LocalBusiness" for x in graph), "Portfolio is a Person"
    assert 'id="research"' not in page.path.read_text(), "Retired third-party research section"
    cases = [(t,a) for t,a in page.nodes if t == "article" and "data-project" in a]
    assert len(cases) == 13, "Expected concrete project inventory"
    assert page.path.read_text().index('id="portfolio"') < page.path.read_text().index('id="about"'), "Projects must lead the introduction"
    for section in ["home", "about"]:
        text = page.path.read_text().split('id="' + section + '"', 1)[1].split('</section>', 1)[0]
        assert "FNZ" not in text, "Employer emphasis in short introduction"
    image_nodes = [a for t,a in page.nodes if t == "img" and a.get("src", "").startswith("/projects/")]
    assert len(image_nodes) == 10
    for attrs in image_nodes:
        assert attrs.get("width") == "320" and attrs.get("height") == "200"
        assert attrs.get("loading") == "lazy"
    assert not any(t == "a" and a.get("href", "").startswith("/projects/") for t,a in page.nodes), "Thumbnail must not be a zoom link"
    assert not any("srcset" in a for a in image_nodes), "Do not offer high-resolution variants"
    html = page.path.read_text()
    for identifier in ["agent-workbench", "transactional-crm", "knowledge-memory"]:
        article = html.split('data-project="' + identifier + '"', 1)[1].split('</article>', 1)[0]
        assert '<a ' not in article, "Private project must not expose an endpoint"
    assert html.count('href="https://github.com/maxazure/') >= 3

pdf = root / "cv/Jie-Liu-CV.pdf"
assert hashlib.sha256(pdf.read_bytes()).hexdigest() == "1b62833b705d9f38b1b83b24aaf40954c3d7a0b37a1d7cc5335ee32ac4db95e1", "Existing CV changed"
assert (root / "CNAME").read_text().strip() == "jayliu.co.nz"
assert (root / "brand/social-card.png").is_file()
assert (root / "content/resume/images/favicon.ico").is_file()
assert (root / "llms.txt").is_file()
robots = (root / "robots.txt").read_text()
assert "User-agent: OAI-SearchBot\nAllow: /" in robots
assert "Disallow: /\n" not in robots
sitemap = ET.parse(root / "sitemap-0.xml")
urls = {e.text for e in sitemap.iter() if e.tag.endswith('}loc')}
assert urls == {origin + p for p in ["/", "/zh/", "/privacy/", "/zh/privacy/"]}, urls
assert "noindex" in pages[root / "404.html"].meta("robots")[0]
print(f"Verified {len(pages)} pages: identity, metadata, schema, fragments, project inventory/privacy, local links, assets, sitemap, robots and unchanged CV")
