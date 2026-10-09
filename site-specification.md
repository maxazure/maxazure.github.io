# Jay Liu portfolio specification

Updated: 2026-10-10. Owner: Jay Liu. Canonical: https://jayliu.co.nz/. Repository: https://github.com/maxazure/maxazure.github.io. Branch: master.

## Project context and success criteria

Redesign an existing personal website for job applications. Preserve the established English title and description, current FNZ employment, public homepage/anchors and CV route. Present recent work as software/system engineering, with relevant primary-paper references. Ship a responsive, fast static site to the existing GitHub Pages domain and verify the production build.

## Audience, content and conversion

Audience: senior software / enterprise / full-stack / applied AI hiring teams. Entry: name search, CV or profile link. Promise: established enterprise engineering plus current AI systems work. Proof: career history, concise implementation-informed project summaries and public tooling. Action: direct email or professional profile. Success signal: visitors can understand Jay's engineering background and reach him; no baseline conversion or ranking data is available.

All facts and translated copy live in `src/data/profile.ts`. Fact evidence and research boundaries are documented in `docs/engineering-content.md`. Current FNZ role is owner-confirmed; recent independent project descriptions are implementation-informed summaries. Skill percentages, unsupported project totals, business impact figures, old unrelated project tiles and award-like claims are removed.

## Creative route and benchmark packet

Selected: image-light technical editorial. Rejected: screenshot-heavy product gallery, because the work includes private systems and would draw attention away from the engineering profile. Source signals: existing name/role/FinTech identity, current career record and reviewed engineering work. Structural choices: oversized name, two featured system concepts, dense project rows, paper-tone chronology. The small control surface remains calm and direct.

Primary references inspected: the existing portfolio; Astro's official static/GitHub deployment documentation; Google Search Central's SEO starter guide; the four primary papers linked in the research section. These are source/evidence references, not copied visual templates. This portfolio avoids the old equal-card grid, percentage bars, hidden education tabs and lengthy generic biography.

## VisualDirection and design handoff

Design read: a personal engineering portfolio for hiring teams, using precise graphite editorial typography with honest mathematical abstractions. Brand anchor: Jay Liu / Senior Software Engineer. Subject vocabulary: software, tools, execution, retrieval, evidence, concurrency. Site signature: an orbit / path motif connecting independent engineering capabilities. Placements: hero, two featured schematic surfaces, social preview. Static fallback: every diagram is decorative and every answer is visible HTML.

Dials: design variance 7/10; motion intensity 2/10; visual density 5/10. `DESIGN.md` owns colours, fonts, spacing, layout, motion and responsive rules. The supporting frontend-design and impeccable skill packages were unavailable in the local catalog and searched skill directories. Equivalent code-native design and a rendered desktop/mobile polish pass are used; no claim is made that those unavailable skills ran.

## Runtime and hosting

Astro 7.3.5 + TypeScript + Tailwind 4.3.3; static output; zero React islands. The skill's Astro 5 default was superseded by the current supported release after the dependency audit identified vulnerabilities requiring later major versions. Checked current Astro 7 documentation before changing the framework.

GitHub Pages is the owner-requested deployment target, so the skill's default Cloudflare/BestAI deploy routes do not apply. Existing repository, master branch, CNAME and HTTPS remain. GitHub Actions performs typecheck, build and HTML-contract verification before deployment. There are no backend writes or forms. Old external Formspree form is replaced by a working direct mail link.

## Information architecture and URL migration register

| Path or fragment | Decision | Evidence |
| --- | --- | --- |
| `/`, `/index.html` | Preserve homepage | Existing repository and live site |
| `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact` | Preserve all targets | Existing HTML and live navigation |
| `/cv/Jie-Liu-CV.pdf` | Preserve exact bytes | SHA-256 checked by build verifier |
| `/content/resume/images/favicon.ico` | Preserve existing asset path | Existing HTML |
| `/zh/`, `/privacy/`, `/zh/privacy/` | New crawlable pages | Locale parity / privacy |
| Unknown URL | Actual 404 with noindex | GitHub Pages custom 404 document |

No page routes are renamed and no HTML redirect aliases are created. Git history retains retired source/assets. `url-migration.csv` records the source contracts.

## SEO graph and metadata contract

`src/lib/seo.ts` and `src/layouts/Base.astro` own the head and graph. English homepage title and description remain verbatim. A single canonical, Open Graph URL, Twitter card, exact 1200×630 preview, fully qualified self-referencing language alternatives plus x-default, sitemap and robots are generated. Schema: Person + WebSite + ProfilePage, matching visible FNZ role and independent work. No LocalBusiness, publication authorship, FAQ or benchmark-performance claims. `llms.txt` is a concise public map, not a ranking promise.

## Section capacity map

| Section | Job / dominant element | Capacity / narrow transformation |
| --- | --- | --- |
| Hero | Name, engineering role, two actions | One short profile; art moves below copy |
| About | Background and engineering approach | Three brief paragraphs; two-column to one |
| Work | Four implementation-informed summaries | Two featured concepts plus two rows; all descriptions visible |
| Skills | Four engineering groups | Four to two to one columns; no percentages |
| Research | Four primary-paper links and relevant concepts | Four to two to one columns |
| Experience | Career timeline + degree | Paper background; rows reflow without hidden tabs |
| Contact | Direct email and professional profiles | Email wraps safely; mobile links keep target area |
| Privacy | Data-handling explanation | Narrow text column |

## Brand asset, logo and media register

No generated photos or client/product screenshots are used. Current-site original wordmark remains at `public/brand/original-wordmark.png`; Git history preserves its source. Refreshed typography and favicon are deterministic. Graphics are abstract decoration, not product evidence. Jost is OFL licensed; Chinese uses native platform fonts.

| Asset | Source / transform / output | Consumer / QA |
| --- | --- | --- |
| Hero mathematical field | `SystemField.astro` projection; inline SVG | Decorative hero; stable viewBox; desktop/mobile checks |
| Workflow and memory schematics | `ProjectVisual.astro`; HTML/CSS/SVG | Decorative featured work; visible descriptions carry meaning |
| Social card | `build-brand.py`, OFL Jost and mathematical projection; 1200×630 PNG | OG/Twitter; exact text and export dimensions checked |
| Favicon | Authored JL SVG and deterministic 32px PNG / 180px touch icon | Header brand identity; monochrome contrast and small-size check |
| Fonts | Jost static 500/700, self-hosted WOFF2 | Display text; licence included; no remote calls |

No photographic provenance or AI metadata is claimed. Social image uses English name/professional identity across locales deliberately. Replace via source and rebuild; do not manually edit exports.

## Privacy and data-flow register

| Flow | Categories / recipients | Notice and ownership |
| --- | --- | --- |
| GitHub Pages delivery | Technical IP/request metadata; GitHub as host | Privacy page links to GitHub's policy |
| Direct email | User-supplied email/body; Jay and chosen email services | Visible email link; privacy explains replying |
| External professional/tool links | Separate third-party navigation | New-tab rel protections; privacy explains handoff |
| Forms, analytics, advertising, database writes | Intentionally absent | No new processor integration or collection |

## Performance budget and cache policy

Strict profile. Target initial page below 500KB, application JS below 10KB, CSS below 40KB, fonts below 100KB; no video or third-party scripts. Expected LCP: name / hero text. INP risk: one lightweight menu handler. CLS: fixed graphic ratios, explicit shell/hero layout and local display faces. Reduced motion stops the one-time 2-second orbit stroke animation.

GitHub Pages owns delivery/cache headers. No unsupported Cloudflare `_headers` file is shipped. Record live headers rather than assuming year-long immutable caching. No field Core Web Vitals, search or conversion data is available; lab measurements remain separate.

## UI QA and design verification ledger

Completed before launch: production-built desktop EN and mobile EN/ZH full-scroll visual review, direct email/link destinations, primary anchors, mobile menu open/close/Escape/link selection and focus transfer, locale-equivalent privacy navigation, 320px reflow, text spacing, reduced motion, forced colours, no-JavaScript and exact social-card review. No clipped text or horizontal overflow was found. Menu navigation was improved to transfer focus to the destination section. Social-card role spacing was increased after visual review.

Ego browser supplied normal-input functional checks and accessibility/DOM state; its screenshot API timed out on both the old and candidate pages. Lighthouse’s Chromium rendering supplied reviewed full-page desktop/mobile images instead. Forced-colour/text-spacing/reduced-motion/no-JavaScript checks have DOM/style evidence only; screenshots of those special states and branded Safari testing remain unverified. The public release does not claim a complete browser/assistive-technology certification.

## AI-assisted content register

Owner: Jay Liu. AI role: organising implementation evidence, editorial writing and EN/ZH translation. First-hand inputs: owner instructions, career record and project code/docs. Publication gate: only source-supported broad engineering claims; no benchmark results or third-party authorship. Paper summaries link to original authors. Public copy is indexable; private evidence and raw records are excluded from the website and repository.

## Outcome and post-launch visibility register

Primary outcome: useful hiring conversations. Guardrails: truthful career claims, title/description stability, usable contact, privacy. Baseline: existing manually reviewed site; no numeric ranking/conversion baseline. Release evidence: intended checked Git commit + successful Pages run + live URL validation. Observation: owner may review recruiting feedback and Search Console after indexing; no automatic account/resource creation. Decision before launch: planned. Owner: Jay.

Search Console/Bing indexing and measured query/click/ranking performance: unverified, requires account/report access. Sitemap, robots, metadata and visible HTML are readiness measures. AI citations and ranking gains are not claimed. Social crawler cache/display is unverified until fetched by a platform. Domain and asset availability are checked after deployment.

## Pre-deployment verification, 2026-10-10

- `pnpm check`: 17 files, zero errors/warnings/hints. `pnpm build` and `pnpm verify`: pass. The verifier checks 5 HTML pages, metadata/schema, every local asset/link, 64 legacy fragment links, locale alternates, unchanged CV bytes, 4 sitemap URLs and robots.
- Dependency audit: zero reported vulnerabilities after selecting Astro 7.3.5.
- Strict resource budget: homepage approximately 106KB referenced initial local resources, approximately 30KB CSS, 14KB fonts and less than 1KB application JS. No third-party scripts, embeds or background video. This is static resource accounting, not measured transfer size.
- Font delivery, internal-link graph, fragment navigation, agent paths and launch preflight: no critical findings. Four indexable pages are reachable; no generic internal anchors or dead-end indexable pages.
- Intentional heuristic exceptions: original English homepage title/description length retained by owner instruction; privacy pages do not need business schema; this portfolio uses Person rather than LocalBusiness/Organization. No private routes or advertising landing pages exist. The wildcard robots policy allows public fetchers, including training crawlers; explicit OAI-SearchBot and ChatGPT-User access is present.
- Local Lighthouse mobile EN, desktop EN and mobile ZH each scored 100 for performance, accessibility, best practices and SEO. Mobile EN LCP 1.4s, TBT 0ms, CLS 0; desktop EN LCP 0.3s, TBT 0ms, CLS 0. Scores are lab observations of the tested build, not field performance or ranking results.
- Browser evidence saved outside the public repository: desktop/mobile full-page screenshots, Chinese full-page screenshot, social preview, privacy rendering and JSON Lighthouse reports. Source, literal copy and technical metadata were reviewed together.

Deployment target: existing GitHub Pages site at https://jayliu.co.nz/, master source in maxazure/maxazure.github.io. Planned change: select Actions build mode, push the checked source and run the committed build/deploy workflow. Domain/DNS and CV content remain unchanged. Explicit publication authorisation came from the owner's request.
