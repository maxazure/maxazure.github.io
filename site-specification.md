# Jay Liu portfolio specification

Updated: 2026-10-10. Owner: Jay Liu. Canonical: https://jayliu.co.nz/. Repository: https://github.com/maxazure/maxazure.github.io. Branch: master.

## Purpose and success criteria

A personal portfolio for senior software, enterprise/full-stack and applied AI job applications. The owner requested concrete examples in a prominent position, anonymous client identities, small non-interactive screenshots, real GitHub links for open-source work, a capability-led introduction and removal of the standalone research section.

Success: 14 corresponding cases in both languages; 11 reviewed 320×200 screenshots; one three-column desktop gallery follows Experience; enterprise/ERP experience leads the introduction; personal-business branding and links are absent; no client names in case copy or thumbnails; no high-resolution image routes, zoom controls or private system links. Preserve the established English title/description, career facts, legacy anchors and unchanged public CV. Build, review rendered desktop/mobile pages, publish through the existing Pages workflow, and verify actual live output.

`src/data/profile.ts` owns identity and locale copy. `src/data/projects.ts` owns concrete cases. `docs/engineering-content.md` records factual and privacy boundaries. The owner allowed direct public customer-domain links, with industry labels and anonymous images. Private system previews have no public endpoint links.

## Creative route and section capacity

The owner selected a continuous three-column project album after the career timeline, with short descriptions and no technical-detail lists. Desktop uses three columns, tablet two and phone one. The opening narrative prioritises enterprise financial platforms, ERP/CRM, retail business software and hospital information systems. Personal experiments and small websites supply additional examples. The current Orca agy session is authorised to improve the visual composition; the existing screenshot gallery, copy, privacy and search contracts remain fixed. No alternative-layout approval gate is introduced because the owner specified the album structure.

| Section | Capacity / narrow transformation |
| --- | --- |
| Hero | Personal identity, enterprise/ERP capability and stack; no employer emphasis; experience and project actions |
| About | Enterprise background and engineering approach |
| Skills | Four capability groups with enterprise development first |
| Experience | Six chronological roles, including retail business software and hospital-system leadership; degree |
| Projects | 14 cards in one continuous 3/2/1-column gallery; 11 small screenshots and 3 labelled generated concept illustrations |
| Contact / Privacy | Direct email and personal profiles; no business promotion, forms or tracking |

`DESIGN.md` owns layout tokens and responsive rules. The supporting frontend-design and impeccable packages were unavailable when the first version was built; code-native design and rendered desktop/mobile review supply the documented fallback. No execution of those unavailable skills is claimed.

## Runtime, hosting and URL contracts

Astro 7.3.5, TypeScript and Tailwind 4.3.3, static output, no React runtime. Native mobile-menu enhancement remains below 1KB. GitHub Actions checks types, builds and verifies HTML contracts before Pages publication. Maintained actions are pinned to full commit SHAs, Node 22 application runtime, Ubuntu 24.04 runner. Custom domain and HTTPS are retained; no new DNS or account resources are required.

Preserved: `/`, `/index.html`, `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact`, `/cv/Jie-Liu-CV.pdf`, original favicon path. New canonical pages from the redesign: `/zh/`, `/privacy/`, `/zh/privacy/`. Unknown URLs return HTTP 404 with a custom noindex document. `url-migration.csv` records contracts. Git history retains retired assets; no compatibility implementation is added.

## SEO and discovery

English homepage title and description remain verbatim. Person + WebSite + ProfilePage schema matches the career record; it includes no project performance, authorship or employer-architecture claims. Single canonical, Open Graph/Twitter preview, fully qualified en-NZ/zh-CN/x-default alternatives, robots, sitemap and `llms.txt`. Four indexable canonical pages. Case images have real `<img src>`, dimensions, contextual alt text and nearby descriptions. No fabricated gallery schema, review/award claims or image-ranking promise.

Search Console/Bing indexing, field performance, rankings, recruiting conversions, social-crawler refresh and AI citations are unmeasured. Technical readiness and lab results do not establish those outcomes.

## Brand asset and media register

Original wordmark and CV remain unchanged. Self-hosted Jost 500/700 WOFF2 is OFL licensed. The role-led hero uses a decorative integration trace; the deterministic 1200×630 social card remains the preferred share image. Retired project diagrams are removed. No generated imagery is used as proof.

| Family / anonymous ID | Source and non-destructive derivative | Consumer / QA |
| --- | --- | --- |
| tourism, transport, accounting | Current public website captures; brand/contact masks; 320×200 WebP | Recent case rows; small static previews; privacy and rendered review |
| operations-erp | Actual ERP dashboard/shell components rendered with an anonymous account, empty collections and zero counters; 320×200 WebP | Development-instance card; no API, database, real records or private endpoint |
| agent-workbench | Existing actual workbench screenshot; session/user-area masks; 320×200 WebP | Private system row; no private endpoint |
| transactional-crm | Actual application template rendered with empty demo records; 320×200 WebP | Labelled empty-data demo; no database accessed |
| knowledge-memory | Actual CLI help rendered as terminal view; no source records; 320×200 WebP | Prototype row; labelled command-line preview |
| finance-archive, medical-archive-a, consumer-app-archive, medical-archive-b | Four real images from previous website; brands/contact details masked; portrait blurred/signature covered; 320×200 WebP | Historical rows; current-domain link only where usable |

All eleven derivative files live in `public/projects/`, with anonymous filenames, no metadata carried into exports and no high-resolution siblings. The ERP export adds a new source-rendered empty-data preview. The CRM demo preview is re-rendered with anonymous business labels to remove the owner’s personal-business identity. The other nine exports remain unchanged. Original captures remain outside Git/public output. Actual browser rendering supplies anonymous demo labels, masking and sizing; WebP export changes encoding only. Permission: owner-directed publication, anonymous client labels, approved public-domain links. Source portraits are redacted; no identifiable patient or customer is introduced. SEO/accessibility: descriptive alternatives, contextual captions, lazy/async delivery, fixed 8:5 aspect ratio. Replacement invalidates privacy review and related checks.

## Privacy and interaction contract

GitHub Pages may process request metadata; privacy pages describe hosting and direct-email/external-link handling. No application cookies, trackers, forms, backend writes or new processors. No real customer database, private session content, local paths, addresses, credentials or private app domains enter public case copy.

Thumbnails display at at most 320px, with an intrinsic 320×200 maximum. There is no image link, `srcset`, lightbox, fullscreen control or hover enlargement. The four non-open-source systems expose previews and explanation only. Three open-source tools link to verified public repositories; industry websites use generic link labels. The archived financial-domain link is explicitly a current holding page, not the historical application. Other old destinations failed secure/usable access and have no links.

All case content survives no-JavaScript and images-disabled states. Native headings/figures/captions structure the collection. Project links and primary CTAs are keyboard navigable. Existing group anchors remain attached to the first corresponding card. Existing menu supports Escape, state announcement and destination-focus transfer. Reduced motion disables animation. Forced colours retain content and controls.

## Performance budget and verification

Strict target: initial page below 500KB, JS below 10KB, CSS below 40KB, fonts below 100KB. Eleven small lazy screenshots remain within the strict image budget. No video, external fonts, runtime carousel or third-party scripts. Expected LCP: hero role; explicit thumbnail dimensions preserve layout. GitHub Pages owns cache headers, previously verified `max-age=600`; unsupported `_headers` rules are not shipped.

Verification uses `pnpm check`, build, HTML-contract verifier, strict resource/fragment/media audits and normal browser inputs. The verifier checks legacy routes, metadata/schema, exact CV bytes, 14 cases and small images, explicit generated-cover captions and repository links, gallery-after-experience ordering, removed standalone research and employer-free introduction. Desktop/mobile Chromium rendering is reviewed. Branded Safari, assistive-technology certification and field metrics are not claimed.

The original redesign was published in content commit `50f506a` and workflow update `03fcbd8`. This case-focused follow-up, content commit `c0b4f75`, supersedes that release's abstract projects and research section. GitHub Pages workflow run `37999003089` completed successfully. Live verification downloaded all 32 release files and confirmed byte-for-byte agreement with the local build, then passed the HTML contracts against that live snapshot. The homepage alias, canonical www redirect and custom HTTP 404 also passed.

## Previous case-release verification, 2026-10-10

- Typecheck: 18 Astro files, no errors/warnings/hints. Build and HTML-contract verifier pass for 5 pages, 13 corresponding cases, 10 previews, removed research and capability-led introduction. The three private project entries have no links; original title/description, CV bytes, all local assets and legacy anchors pass.
- Reviewed all 10 redacted exports at their intrinsic 320×200 size, then the complete gallery in desktop English and mobile Chinese Chromium renders. No client names appear in visible case copy. Original sources/records are not in the release. Thumbnails are rendered at 200px on narrow phones and at most 220px on desktop.
- Desktop EN and mobile ZH Lighthouse: 100 in performance, accessibility, best practices and SEO. LCP 0.4s / 1.4s; CLS 0. EN mobile also scored 100 in all four categories before the final group-order change. Reports and screenshots are retained outside Git. The measured LCP is the hero H1.
- Strict resource audit: no critical findings; homepage referenced resources about 163KB, CSS 27.6KB, fonts 14.4KB and application JS 867 bytes. All 70 internal fragment links pass. Launch preflight has no critical findings.
- Image-audit exceptions: its first-image heuristic flags a lazy LCP image, but the first case image starts below 1,600px at a 320px viewport and Lighthouse identifies the hero H1 as LCP. Lazy previews remain appropriate. Its responsive-variant warnings are intentional: the owner forbids detailed/enlarged screenshots, so no high-resolution `srcset` is exposed.
- Normal-input project navigation, mobile menu close/focus transfer, group anchors, 320px reflow and no-JavaScript case/navigation availability were checked. Thumbnail links/dialogs are absent. Existing privacy, contact and locale contracts are retained.
- Live Chinese homepage at 320px: 13 cases, 10 previews, no research section, no employer mention in the introduction/about copy, no horizontal overflow and no linked, oversized or responsive-variant previews. Original homepage metadata and CV bytes passed the live snapshot verifier.
- Other launch heuristics: original homepage title/description length is owner-required; privacy pages do not need business schema; Person schema is deliberate. No private or advertising routes exist. Wildcard robots access remains allowed. Branded Safari, screen-reader certification, real search outcomes and field CWV are unverified.

## Current gallery and enterprise-positioning change

Owner-directed changes: project gallery follows Experience, three desktop columns, brief preview cards, enterprise/ERP positioning first, all personal-business promotion removed. Career facts come from existing career records; screenshots are separate from those employment claims. Only an empty-data ERP development preview is added. No customer data is read, no private service is linked and no model/API calls are used to produce the ERP screenshot.

The previous deployed build `b2812d3` is bound as the accepted SEO regression baseline before edits. Its build output and manifest are retained outside Git. Homepage metadata, canonical/locale/indexing/schema controls and the existing CV remain protected. Visual work is assigned to the user's existing Orca agy terminal; the primary agent owns factual copy, privacy, build/live checks and publication. The agy visual pass is complete; the primary agent completed the checks below before publication.

## Gallery and visual-release verification, 2026-10-10

- The existing Orca agy session supplied the role-led hero, profile summary, restrained integration trace, sticky navigation and framed project album. The oversized name and wireframe sphere are removed. Root review removed duplicated career facts and made the no-JavaScript mobile header static. The English language control now includes its visible EN label in its accessible name.
- Typecheck: 17 Astro files, zero errors/warnings/hints. Static build and HTML-contract verifier pass for all 5 pages, 14 cases and 11 thumbnails. The original CV bytes and homepage title/description remain unchanged.
- SEO regression against accepted release b2812d3: 5 baseline and 5 current routes, zero audit errors, critical findings or warnings. All 64 internal fragment links pass.
- Actual browser viewports: 1440px desktop has 3 columns, 820px tablet has 2, and 320px phone has 1. No horizontal overflow. Desktop previews are at most 320px; phone previews are 224px. All four private cases have no links. The final ERP and re-rendered CRM previews were visually checked, with anonymous labels and empty data.
- Normal mobile menu input closes the menu and focuses the Projects destination. Escape returns focus to the menu button. At 320px the Projects anchor starts at 88px and clears the 65px header. Reduced-motion preference is observed and disables smooth scrolling. Keyboard focus is visible; forced-colour rendering and enlarged text-spacing checks retain readable content without viewport overflow. Without JavaScript, all cases and mobile navigation remain available.
- Lighthouse desktop EN / mobile ZH: 100 in performance, accessibility, best practices and SEO. LCP 0.3s / 1.2s, CLS 0.032 / 0. Local lab results only. The mobile label-name audit passes after the language-control correction.
- Static resource audit passes with zero critical findings or warnings: homepage referenced assets plus HTML about 123KB, CSS 23.8KB, fonts 14.4KB, application JS 867 bytes and all 11 previews 55,024 bytes. This is within the project's stricter 500KB/40KB/100KB/10KB targets. The previews are lazy and follow the full career section; no high-resolution variants are exposed.
- Temporary evidence and reports remain outside Git. Branded Safari, assistive-technology certification, field CWV, recruiting outcomes and search-ranking changes remain unverified.
- Launch preflight has zero critical findings. Existing title/description-length and business-schema/robots-policy heuristics retain their documented owner-required or inapplicable exceptions above. Image audit reports its first-image lazy heuristic and 11 missing responsive-variant warnings: the first preview is over 6,400px below the top at 320px width; actual Lighthouse LCP is the hero role on desktop and the introduction on mobile. Lazy screenshots are appropriate, and the owner's privacy requirement deliberately excludes high-resolution variants.
- The first visual release e108e21 passed Pages workflow 38004286543 and the live 320px Chinese render. Artifact comparison exposed Tailwind scanning documentation words as utility classes, so a documentation edit changed the CSS asset hash after local QA. Source detection is now explicitly scoped to src, keeping documentation out of CSS generation. A final build and live artifact comparison verify this correction.

The final source/build correction is commit 87fab92. GitHub Pages workflow [38004508966](https://github.com/maxazure/maxazure.github.io/actions/runs/38004508966) completed successfully. The live verification downloaded all 33 release files and confirmed byte-for-byte agreement with the local build, then passed all five HTML-page contracts against that live snapshot. The homepage alias, canonical www redirect and custom HTTP 404 passed. Live 1440px English and 320px Chinese views expose the 14-card gallery, 11 small previews and no personal-business association or horizontal overflow.

## Keyboard and print handoff completion, 2026-10-10

The owner supplied the agy handoff log and requested completion of its outstanding checks. Subsequent primary-agent records already covered typecheck/build/HTML contracts, mobile menus, no-JavaScript content, forced colours, Lighthouse, Git commits and live deployment. This follow-up confirms those records and adds complete keyboard traversal and actual print rendering.

- Desktop keyboard traversal visits all 23 visible interactive elements in DOM order with visible focus. At 320px, keyboard Enter opens the menu, Projects activation closes it and focuses the destination, and all 13 project/contact/footer links follow in order without being obscured by the header. Escape closes the menu and returns focus to its button.
- No-JavaScript Chinese view at 320px retains 14 cases and visible navigation with a static header; no horizontal overflow. Forced-colour emulation preserves controls and content.
- Printing exposed mixed light text and dark card backgrounds on white paper, plus a split heading. The print-only stylesheet now uses white paper/dark text, hides navigation and the duplicate hero summary, lays out small previews next to descriptions, and keeps headings, career rows, cards and the contact block together. Screen layout, copy, links and metadata are retained.
- Chromium A4 output for both languages has 7 pages, no default browser header/footer, all 14 case titles and text boxes within page bounds. All pages were rasterised with Poppler and visually reviewed, including Chinese glyphs, screenshot placement and page breaks. The final contact-only adjustment changed just Chinese pages 6 and 7, which were reviewed again. The print QA HTML embeds the same public low-resolution assets and loads them eagerly to represent a fully loaded page; the published site's lazy-image contract is retained. No high-resolution image or private record enters these artifacts.
- Typecheck/build/HTML verifier pass. SEO regression retains 5 routes with zero errors/critical/warning findings; the strict resource audit passes. Desktop EN and mobile ZH Lighthouse remain 100 for performance, accessibility, best practices and SEO after the print-style addition. Lab results do not establish field performance or search outcomes.
- The agy handoff report was reconciled with the primary-agent results. HTML/PDF sources, raster pages and audit reports remain outside Git/public output. Branded Safari and physical-printer output remain untested; this validation uses Chromium.


## Silver fern and generated project covers, 2026-10-10

The owner requested a faint New Zealand silver fern hero background and generated pictures for the three open-source tools. The hero now has a static full-width CSS botanical texture, with 24% desktop opacity and an 11% separately masked phone crop. Existing role, copy, panel, actions and SEO surfaces are retained. The decoration is hidden in print and forced colours, has no accessible or interactive content and requires no JavaScript.

All fourteen cards now have small images: eleven unchanged anonymous screenshots and three generated concept illustrations for Video Editing Skill, OmniVoice TTS Skill and NZ Accounting Assistant. Concept captions and descriptive alternatives appear in both locales; GitHub destinations remain unchanged. All project image files are 320×200, lazy/async, non-interactive and have no high-resolution variants. The code-cover path and its unused CSS are removed. Generation mode, full prompts, asset paths, sizes and publishing treatment are recorded in [generated-media.md](docs/generated-media.md).

- Typecheck: 17 Astro files, zero errors/warnings/hints. Build and five-page HTML contracts pass, including fourteen small images, explicit generated-cover captions and open-source links.
- SEO comparison against accepted deployed d171659: five routes, zero audit errors, critical findings or warnings; normalized SEO snapshots are identical. The original homepage title/description, schema, URLs, alternate locales, anchors and CV bytes are preserved.
- Browser evidence: 1440px desktop, 820px tablet, 390px English phone and 320px Chinese phone. The gallery remains 3/2/1 columns and narrow pages have no horizontal overflow. Desktop thumbnails render at 320px maximum; at 320px viewport they render at 224px. No thumbnail is linked or enlarged. All eleven original WebP screenshot files remain byte-identical to the accepted release.
- No-JavaScript 320px view retains the texture, fourteen cases and visible mobile navigation. Emulated forced-colour and print modes hide the fern. Conservative hero-paragraph contrast, measured against the brightest background pixel within the paragraph bounds with text temporarily hidden, is 8.75:1 desktop and 7.60:1 at 320px Chinese.
- Lighthouse desktop English: performance/accessibility/best practices/SEO 100/100/100/100, LCP 0.294s, CLS 0.032, TBT 0ms. Mobile Chinese: 97/100/100/100, LCP 1.209s, CLS 0, TBT 199.9ms. Local lab evidence only; field performance and branded Safari are not newly verified.
- Static resource audit passes with zero critical findings or warnings. Its image inventory omits CSS backgrounds, so the 90,532-byte fern is added manually: total homepage HTML and referenced local assets are 246,251 bytes English / 245,067 bytes Chinese. CSS 25,855 bytes, fonts 14,432 bytes and application JS 867 bytes remain inside the stricter 500KB/40KB/100KB/10KB budgets. The three cover JPEGs total 30,778 bytes.
- Release uses the existing owner-authorized master-push GitHub Pages workflow. Exact live-artifact and desktop/mobile smoke checks follow successful deployment; temporary QA reports remain outside Git.
