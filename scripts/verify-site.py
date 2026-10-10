"""Check the deployed HTML contract: identity, routes, metadata and asset links."""
import hashlib
import json
import re
import sys
from html.parser import HTMLParser
from html import escape
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

root = Path(sys.argv[1] if len(sys.argv) > 1 else "dist").resolve()
origin = "https://jayliu.co.nz"
expected_title = "Jay Liu - Senior Software Engineer | FinTech | .NET | React | Cloud | AI Integration"
expected_description = "Jay Liu, senior software engineer in Auckland. 18+ years in enterprise software, financial-platform delivery at FNZ, and independent applied AI projects."
locale_roots = {'en': '', 'zh': 'zh/', 'zh-hant': 'zh-hant/', 'ja': 'ja/', 'fr': 'fr/', 'ko': 'ko/'}
locale_langs = {'en': 'en-NZ', 'zh': 'zh-Hans', 'zh-hant': 'zh-Hant', 'ja': 'ja', 'fr': 'fr', 'ko': 'ko'}
content_root = Path(__file__).resolve().parents[1] / 'src/data/locales'
translations = {code: json.loads((content_root / f'{code}.json').read_text()) for code in locale_roots}
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
assert len(pages) == 19, f"Unexpected page inventory: {list(pages)}"
for path, page in pages.items():
    assert "bestai" not in path.read_text().lower(), "Personal business association must not appear"
    assert page.h1 == 1, f"Expected one H1: {path}"
    canonical = [a["href"] for t,a in page.nodes if t == "link" and a.get("rel") == "canonical"]
    assert len(canonical) == 1 and canonical[0].startswith(origin + "/"), path
    assert page.meta("og:url") == canonical, path
    assert len(page.meta("description")) == 1, path
    if path.name != "404.html":
        alternates = [a for t,a in page.nodes if t == "link" and a.get("rel") == "alternate"]
        assert len(alternates) == 7, path
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
for locale, prefix in locale_roots.items():
    relative = prefix + "index.html"
    page = pages[root / relative]
    assert legacy_fragments <= page.ids, "Legacy fragment missing"
    assert len(page.graphs) == 1
    graph = page.graphs[0]["@graph"]
    person = next(x for x in graph if x["@type"] == "Person")
    assert person["worksFor"]["name"] == "FNZ Group"
    assert person["jobTitle"] == "Analyst Developer"
    assert not any(x["@type"] == "LocalBusiness" for x in graph), "Portfolio is a Person"
    assert 'id="research"' not in page.path.read_text(), "Retired third-party research section"
    html = page.path.read_text()
    featured = [a["data-featured"] for t,a in page.nodes if t == "article" and "data-featured" in a]
    assert featured == ["transactional-crm", "bookkeeping-assistant", "voice-companion", "codexview"], "Featured cases must be equivalent in both languages"
    assert not any("data-project" in a for _,a in page.nodes), "The complete gallery belongs on its own route"
    assert html.index('id="about"') < html.index('id="portfolio"') < html.index('id="resume"') < html.index('id="skills"') < html.index('id="contact"')
    hero = html.split('id="home"', 1)[1].split('</section>', 1)[0]
    assert "FNZ" not in hero, "Employer detail belongs with background and experience"
    assert escape(translations[locale]["copy"]["heroSpecialism"], quote=False) in hero
    assert translations[locale]["copy"]["heroName"] in hero
    assert 'href="/cv/Jie-Liu-CV.pdf"' in hero and 'linkedin.com/in/jayliuinvers/' in hero
    assert '<img' not in hero, "Portrait must stay outside the first screen"
    assert html.index('id="about"') < html.index('/images/jay-liu.jpg') < html.index('id="portfolio"')
    assert '<canvas' in hero, "Keep the Transformer field"
    assert 'class="delivery-responsibilities"' in html
    assert 'href="mailto:maxazure@gmail.com"' in html

for locale, prefix in locale_roots.items():
    relative = prefix + "projects/index.html"
    page = pages[root / relative]
    html = page.path.read_text()
    cases = [(t,a) for t,a in page.nodes if t == "article" and "data-project" in a]
    assert len(cases) == 30, "Expected complete project inventory"
    identifiers = [a["data-project"] for _,a in cases]
    assert len(set(identifiers)) == 30, "Each project must be distinct"
    assert {"operations-erp", "transactional-crm", "agent-workbench", "knowledge-memory"} <= set(identifiers)
    if relative == "projects/index.html":
        english_projects = identifiers
    else:
        assert identifiers == english_projects, "English and Chinese project inventories must match"
    language_links = [a for t,a in page.nodes if t == "a" and "data-language" in a]
    assert len(language_links) == 6
    assert {a["href"] for a in language_links} == {"/" + p + "projects/" for p in locale_roots.values()}
    image_nodes = [a for t,a in page.nodes if t == "img" and a.get("src", "").startswith("/projects/")]
    assert html.count('class="media-label"') == 19, "Generated interfaces need visible disclosure"
    assert len(image_nodes) == 30, "Every project needs a small preview or labelled interface mockup"
    for attrs in image_nodes:
        assert attrs.get("width") == "320" and attrs.get("height") == "200"
        assert attrs.get("loading") == "lazy"
    assert not any(t == "a" and urlsplit(a.get("href", "")).path.endswith((".webp", ".jpg", ".png")) for t,a in page.nodes), "Thumbnail must not be a zoom link"
    assert not any("srcset" in a for a in image_nodes), "Do not offer high-resolution variants"
    html = page.path.read_text()
    for identifier in ["operations-erp", "agent-workbench", "transactional-crm", "knowledge-memory", "web-builder-agent", "idea-builder", "writing-assessment", "voice-capture", "live-interpretation", "local-narration", "lan-microphone", "capability-vault", "agent-home", "browser-test-workspace", "hardware-control", "editorial-workflow", "media-workspace"]:
        article = html.split('data-project="' + identifier + '"', 1)[1].split('</article>', 1)[0]
        assert '<a ' not in article, "Private project must not expose an endpoint"
    assert html.count('href="https://github.com/maxazure/') >= 3
    for identifier in ["video-editing", "speech-tooling", "bookkeeping-assistant", "voice-companion", "web-builder-agent", "idea-builder", "writing-assessment", "voice-capture", "live-interpretation", "local-narration", "lan-microphone", "agentmeshkit", "codexview", "capability-vault", "agent-home", "browser-test-workspace", "hardware-control", "editorial-workflow", "media-workspace"]:
        article = html.split('data-project="' + identifier + '"', 1)[1].split('</article>', 1)[0]
        assert translations[locale]["projects"][identifier]["alt"] in article, "Translated image alternative missing"
        assert identifier + "-interface.jpg" in article
        if identifier in {"video-editing", "speech-tooling", "bookkeeping-assistant", "agentmeshkit", "codexview"}:
            assert 'href="https://github.com/' in article, "Open-source repository link missing"
    web_builder = html.split('data-project="web-builder-agent"', 1)[1].split('</article>', 1)[0]
    assert all(agent in web_builder for agent in ["Claude Code", "Codex", "OpenCode"]), "Web Builder agent compatibility missing"

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
assert urls == {origin + "/" + prefix + suffix for prefix in locale_roots.values() for suffix in ["", "projects/", "privacy/"]}, urls
assert "noindex" in pages[root / "404.html"].meta("robots")[0]
# Source-derived dictionaries must remain complete; route parity is checked separately.
def same_shape(source, target, key=""):
    assert type(source) is type(target), f"Translation type mismatch: {key}"
    if isinstance(source, dict):
        assert source.keys() == target.keys(), f"Translation fields differ: {key}"
        for name in source: same_shape(source[name], target[name], f"{key}.{name}")
    elif isinstance(source, list):
        assert len(source) == len(target), f"Translation list length differs: {key}"
        for i, (left, right) in enumerate(zip(source, target)): same_shape(left, right, f"{key}[{i}]")
    elif isinstance(source, str):
        assert target.strip(), f"Empty translation: {key}"

for locale, prefix in locale_roots.items():
    text = translations[locale]
    same_shape(translations["en"], text, locale)
    assert [item[0] for item in text["copy"]["nav"]] == [item[0] for item in translations["en"]["copy"]["nav"]]
    for suffix in ["", "projects/", "privacy/"]:
        page = pages[root / (prefix + suffix + "index.html")]
        html = page.path.read_text()
        assert f'lang="{locale_langs[locale]}"' in html
        expected = {locale_langs[code]: origin + "/" + p + suffix for code,p in locale_roots.items()}
        expected["x-default"] = origin + "/" + suffix
        actual = {a["hreflang"]: a["href"] for t,a in page.nodes if t == "link" and a.get("rel") == "alternate"}
        assert actual == expected, f"Non-reciprocal language routes: {page.path}"
        controls = [a for t,a in page.nodes if t == "a" and "data-language" in a]
        assert len(controls) == 6
        assert {a["data-language"]: a["href"] for a in controls} == {code: "/" + p + suffix for code,p in locale_roots.items()}
        assert [a["data-language"] for a in controls if a.get("aria-current") == "page"] == [locale]
        if locale == "en":
            assert not re.search(r"[\u3400-\u9fff]", html), f"Chinese characters in English HTML: {page.path}"
    # A missing translation must never silently publish an English paragraph.
    if locale != "en":
        for identifier, project in text["projects"].items():
            assert project["description"] != translations["en"]["projects"][identifier]["description"]
        for identifier, project in text["featured"].items():
            for field in ["problem", "role", "decision", "evidence"]:
                assert project[field] != translations["en"]["featured"][identifier][field]

assert hashlib.sha256((Path(__file__).resolve().parents[1] / "src/components/TransformerField.astro").read_bytes()).hexdigest() == "adcc96f6413e0ff67a29fd0dd94ec7e7c3848d31f22d07538f10318c7765450f", "Protected animation changed"
print(f"Verified {len(pages)} pages in six languages: complete translations, reciprocal routes, English without Chinese, metadata, schema, project privacy, assets, unchanged animation and CV")
