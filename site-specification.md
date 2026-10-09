# Jay Liu portfolio specification

Updated: 2026-10-10. Owner: Jay Liu. Canonical: https://jayliu.co.nz/. Repository: https://github.com/maxazure/maxazure.github.io. Branch: master.

## Purpose and success criteria

A personal portfolio for senior software, enterprise/full-stack and applied AI job applications. The owner requested concrete examples in a prominent position, anonymous client identities, small non-interactive screenshots, real GitHub links for open-source work, a capability-led introduction and removal of the standalone research section.

Success: 13 corresponding cases in both languages; 10 reviewed 320×200 screenshots; cases precede About; no client names in case copy or thumbnails; no high-resolution image routes, zoom controls or private system links. Preserve the established English title/description, career facts, legacy anchors and unchanged public CV. Build, review rendered desktop/mobile pages, publish through the existing Pages workflow, and verify actual live output.

`src/data/profile.ts` owns identity and locale copy. `src/data/projects.ts` owns concrete cases. `docs/engineering-content.md` records factual and privacy boundaries. The owner allowed direct public customer-domain links, with industry labels and anonymous images. Private system previews have no public endpoint links.

## Creative route and section capacity

Graphite editorial design, Jost typography, coral accents and mathematical hero imagery. The primary action and first navigation item lead to concrete projects. Three short in-page group links serve systems/tools/experiments first, followed by recent websites and earlier projects. This puts software/AI engineering evidence ahead of brochure-site examples for the recruitment audience. All examples remain visible in semantic HTML; no filters, carousel, details page or lightbox are added.

| Section | Capacity / narrow transformation |
| --- | --- |
| Hero | Identity, current stack and delivery capability; no employer emphasis |
| Projects | 3 recent websites, 6 systems/tools/experiments, 4 earlier projects; thumbnail/copy/action rows stack on phones |
| About | Engineering background, approach and selected facts |
| Skills | Four groups; four/two/one columns |
| Experience | Career timeline and degree on paper background |
| Contact / Privacy | Direct email and profiles; no forms or tracking |

`DESIGN.md` owns layout tokens and responsive rules. The supporting frontend-design and impeccable packages were unavailable when the first version was built; code-native design and rendered desktop/mobile review supply the documented fallback. No execution of those unavailable skills is claimed.

## Runtime, hosting and URL contracts

Astro 7.3.5, TypeScript and Tailwind 4.3.3, static output, no React runtime. Native mobile-menu enhancement remains below 1KB. GitHub Actions checks types, builds and verifies HTML contracts before Pages publication. Maintained actions are pinned to full commit SHAs, Node 22 application runtime, Ubuntu 24.04 runner. Custom domain and HTTPS are retained; no new DNS or account resources are required.

Preserved: `/`, `/index.html`, `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact`, `/cv/Jie-Liu-CV.pdf`, original favicon path. New canonical pages from the redesign: `/zh/`, `/privacy/`, `/zh/privacy/`. Unknown URLs return HTTP 404 with a custom noindex document. `url-migration.csv` records contracts. Git history retains retired assets; no compatibility implementation is added.

## SEO and discovery

English homepage title and description remain verbatim. Person + WebSite + ProfilePage schema matches the career record; it includes no project performance, authorship or employer-architecture claims. Single canonical, Open Graph/Twitter preview, fully qualified en-NZ/zh-CN/x-default alternatives, robots, sitemap and `llms.txt`. Four indexable canonical pages. Case images have real `<img src>`, dimensions, contextual alt text and nearby descriptions. No fabricated gallery schema, review/award claims or image-ranking promise.

Search Console/Bing indexing, field performance, rankings, recruiting conversions, social-crawler refresh and AI citations are unmeasured. Technical readiness and lab results do not establish those outcomes.

## Brand asset and media register

Original wordmark and CV remain unchanged. Self-hosted Jost 500/700 WOFF2 is OFL licensed. Hero orbit is decorative SVG; the deterministic 1200×630 social card remains the preferred share image. Retired project diagrams are removed. No generated imagery is used as proof.

| Family / anonymous ID | Source and non-destructive derivative | Consumer / QA |
| --- | --- | --- |
| tourism, transport, accounting | Current public website captures; brand/contact masks; 320×200 WebP | Recent case rows; small static previews; privacy and rendered review |
| agent-workbench | Existing actual workbench screenshot; session/user-area masks; 320×200 WebP | Private system row; no private endpoint |
| transactional-crm | Actual application template rendered with empty demo records; 320×200 WebP | Labelled empty-data demo; no database accessed |
| knowledge-memory | Actual CLI help rendered as terminal view; no source records; 320×200 WebP | Prototype row; labelled command-line preview |
| finance-archive, medical-archive-a, consumer-app-archive, medical-archive-b | Four real images from previous website; brands/contact details masked; portrait blurred/signature covered; 320×200 WebP | Historical rows; current-domain link only where usable |

All ten derivative files live in `public/projects/`, with anonymous filenames, no metadata carried into exports and no high-resolution siblings. Total image bytes: 52,246 at the reviewed encoding. Original captures remain outside Git/public output. Actual browser rendering supplies masking/resizing; WebP export changes encoding only. Permission: owner-directed publication, anonymous client labels, approved public-domain links. Source portraits are redacted; no identifiable patient or customer is introduced. SEO/accessibility: descriptive alternatives, contextual captions, lazy/async delivery, fixed 8:5 aspect ratio. Replacement invalidates privacy review and related checks.

## Privacy and interaction contract

GitHub Pages may process request metadata; privacy pages describe hosting and direct-email/external-link handling. No application cookies, trackers, forms, backend writes or new processors. No real customer database, private session content, local paths, addresses, credentials or private app domains enter public case copy.

Thumbnails display at at most 220px, with an intrinsic 320×200 maximum. There is no image link, `srcset`, lightbox, fullscreen control or hover enlargement. The three non-open-source systems expose previews and explanation only. Three open-source tools link to verified public repositories; industry websites use generic link labels. The archived financial-domain link is explicitly a current holding page, not the historical application. Other old destinations failed secure/usable access and have no links.

All case content survives no-JavaScript and images-disabled states. Native headings/figures/captions structure the collection. Group links and primary CTA are keyboard navigable. Existing menu supports Escape, state announcement and destination-focus transfer. Reduced motion disables animation. Forced colours retain content and controls.

## Performance budget and verification

Strict target: initial page below 500KB, JS below 10KB, CSS below 40KB, fonts below 100KB. Ten lazy screenshots total about 52KB. No video, external fonts, runtime carousel or third-party scripts. Expected LCP: hero name; explicit thumbnail dimensions preserve layout. GitHub Pages owns cache headers, previously verified `max-age=600`; unsupported `_headers` rules are not shipped.

Verification uses `pnpm check`, build, HTML-contract verifier, strict resource/fragment/media audits and normal browser inputs. The verifier checks legacy routes, metadata/schema, exact CV bytes, 13 cases, 10 small previews, case ordering, removed standalone research and employer-free introduction. Desktop/mobile Chromium rendering is reviewed. Branded Safari, assistive-technology certification and field metrics are not claimed.

The original redesign was published in content commit `50f506a` and workflow update `03fcbd8`. This case-focused follow-up, content commit `c0b4f75`, supersedes that release's abstract projects and research section. GitHub Pages workflow run `37999003089` completed successfully. Live verification downloaded all 32 release files and confirmed byte-for-byte agreement with the local build, then passed the HTML contracts against that live snapshot. The homepage alias, canonical www redirect and custom HTTP 404 also passed.

## Follow-up verification, 2026-10-10

- Typecheck: 18 Astro files, no errors/warnings/hints. Build and HTML-contract verifier pass for 5 pages, 13 corresponding cases, 10 previews, removed research and capability-led introduction. The three private project entries have no links; original title/description, CV bytes, all local assets and legacy anchors pass.
- Reviewed all 10 redacted exports at their intrinsic 320×200 size, then the complete gallery in desktop English and mobile Chinese Chromium renders. No client names appear in visible case copy. Original sources/records are not in the release. Thumbnails are rendered at 200px on narrow phones and at most 220px on desktop.
- Desktop EN and mobile ZH Lighthouse: 100 in performance, accessibility, best practices and SEO. LCP 0.4s / 1.4s; CLS 0. EN mobile also scored 100 in all four categories before the final group-order change. Reports and screenshots are retained outside Git. The measured LCP is the hero H1.
- Strict resource audit: no critical findings; homepage referenced resources about 163KB, CSS 27.6KB, fonts 14.4KB and application JS 867 bytes. All 70 internal fragment links pass. Launch preflight has no critical findings.
- Image-audit exceptions: its first-image heuristic flags a lazy LCP image, but the first case image starts below 1,600px at a 320px viewport and Lighthouse identifies the hero H1 as LCP. Lazy previews remain appropriate. Its responsive-variant warnings are intentional: the owner forbids detailed/enlarged screenshots, so no high-resolution `srcset` is exposed.
- Normal-input project navigation, mobile menu close/focus transfer, group anchors, 320px reflow and no-JavaScript case/navigation availability were checked. Thumbnail links/dialogs are absent. Existing privacy, contact and locale contracts are retained.
- Live Chinese homepage at 320px: 13 cases, 10 previews, no research section, no employer mention in the introduction/about copy, no horizontal overflow and no linked, oversized or responsive-variant previews. Original homepage metadata and CV bytes passed the live snapshot verifier.
- Other launch heuristics: original homepage title/description length is owner-required; privacy pages do not need business schema; Person schema is deliberate. No private or advertising routes exist. Wildcard robots access remains allowed. Branded Safari, screen-reader certification, real search outcomes and field CWV are unverified.
