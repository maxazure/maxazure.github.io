# Jay Liu portfolio specification

Updated: 2026-10-11. Owner: Jay Liu. Canonical: https://jayliu.co.nz/. Repository: https://github.com/maxazure/maxazure.github.io. Working and production branch: master.

## Purpose and success criteria

Help hiring teams understand Jay’s fit for senior software engineering, enterprise AI integration and FDE opportunities. Lead with business understanding and delivery, then show attributed engineering evidence. FDE is a direction of interest; the formal FNZ title remains Analyst Developer. The owner confirms FNZ work is delivery-focused and confidential.

Success: four equivalent featured cases on all six homepages; all 30 existing projects on each language’s project index; CV, LinkedIn and selected-work actions in the hero; public source/demo links alongside relevant evidence; no fabricated outcomes or confidential employer/client details. The supplied portrait is small and appears in About after the hero. Preserve the exact Transformer component and its existing CSS, old homepage anchors, existing CV URL and all existing project images. The original PDF is superseded by the public two-page CV.

`src/data/profile.ts` owns shared identity; `src/data/locales/en.json` owns the source copy, with complete dictionaries for five other languages. `src/data/featured-work.ts` owns the four engineering cases; `src/data/projects.ts` owns the complete collection. [Positioning and evidence](docs/positioning.md) records the goal, sources, outcome hypothesis and acceptance plan. The source baseline is the deployed `525d9eb` revision; its rebuilt homepage matches live HTML byte-for-byte.

## Creative route and section capacity

Retain the graphite/paper/orange editorial style, self-hosted Jost, botanical background, complete attention animation and existing project album on its own routes. New text-led cases use ruled two-column rows on desktop and one column on phones. The supplied review is the content brief; the owner’s animation and portrait instructions override its visual suggestions.

| Section | Capacity / narrow transformation |
| --- | --- |
| Hero | Name, role, Enterprise AI / FinTech focus, one value statement, one experience summary; selected work, CV and LinkedIn actions; original right panel unchanged |
| About | Brief background and delivery approach; portrait 94px desktop / 76px phone, rounded square, below the first viewport at tested sizes |
| Featured work | Four cases: CRM, accounting workflow, HiLily, CodexView; each covers problem, role, constraint/decision, stage and evidence |
| Experience | Six roles; FNZ has three general delivery responsibilities plus confidentiality note; degree retained |
| Capabilities / open source | Four capability groups; tool names follow capabilities; three public repositories |
| Project indexes | All 30 cards, 3/2/1 columns, original 320×200 images; generated previews identified by small in-frame labels |
| Contact / privacy | Recruitment directions, direct email, CV and profile links; no tracking or form |

Frontend-design is available and applied. Impeccable is unavailable in the local skill directories, so no execution is claimed. The manual rendered pass uses the accepted site’s palette, type, spacing, image constraints and user requirements.

## Runtime, hosting and URL contracts

Astro 7.3.5, TypeScript and Tailwind 4.3.3, static output, no React runtime. Native navigation and language-disclosure enhancement remains within the 10KB total JavaScript budget. GitHub Actions checks types, builds and verifies HTML contracts before Pages publication. Maintained actions are pinned to full commit SHAs, Node 22 application runtime, Ubuntu 24.04 runner. Custom domain and HTTPS are retained; no new DNS or account resources are required.

Preserved: `/`, `/index.html`, `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact`, `/cv/Jie-Liu-CV.pdf`, original favicon path. Canonical pages include `/zh/`, `/privacy/`, `/zh/privacy/`, `/projects/` and `/zh/projects/`. Unknown URLs return HTTP 404 with a custom noindex document. `url-migration.csv` records contracts. Git history retains retired assets; no compatibility implementation is added.

## SEO and discovery

The English homepage title remains verbatim. Both homepage descriptions are intentionally rewritten to distinguish FNZ delivery from independent AI work. Person + WebSite + ProfilePage schema matches the career record; it includes no project performance, authorship or employer-architecture claims. Single canonical, Open Graph/Twitter preview, fully qualified en-NZ/zh-Hans/zh-Hant/ja/fr/ko/x-default alternatives, robots, sitemap and `llms.txt`. Eighteen indexable canonical pages. Case images have real `<img src>`, dimensions, contextual alt text and nearby descriptions. No fabricated gallery schema, review/award claims or image-ranking promise.

Search Console/Bing indexing, field performance, rankings, recruiting conversions, social-crawler refresh and AI citations are unmeasured. Technical readiness and lab results do not establish those outcomes.

## Brand asset and media register

Original wordmark remains unchanged. The CV is replaced as recorded in the 11 October revision below. Self-hosted Jost 500/700 WOFF2 is OFL licensed. The role-led hero retains the existing animated Transformer field; the deterministic 1200×630 social card remains the preferred share image. Retired project diagrams are removed. No generated imagery is used as proof.

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

All case content survives no-JavaScript and images-disabled states. Native headings and figures structure the collection. Separate per-image caption lines remain absent; generated previews use an in-frame illustration label, accurate alternatives and the gallery introduction for media context. Project links and primary CTAs are keyboard navigable. Existing group anchors remain attached to the first corresponding card. Existing menu supports Escape, state announcement and destination-focus transfer. Reduced motion disables animation. Forced colours retain content and controls.

## Performance budget and verification

Strict target: initial page below 500KB, JS below 10KB, CSS below 40KB, fonts below 100KB. Eleven small lazy screenshots remain within the strict image budget. No video, external fonts, runtime carousel or third-party scripts. Expected LCP: hero role; explicit thumbnail dimensions preserve layout. GitHub Pages owns cache headers, previously verified `max-age=600`; unsupported `_headers` rules are not shipped.

Verification uses `pnpm check`, build, HTML-contract verifier, strict resource/fragment/media audits and normal browser inputs. The verifier checks nineteen HTML routes, four featured cases, thirty archive entries, reciprocal project language links, metadata/schema, reviewed public CV, legacy anchors, portrait placement, small images, generated labels and private endpoint restrictions. Desktop/mobile Chromium rendering is reviewed. Branded Safari, assistive-technology certification and field metrics are not claimed.

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
- Published source commit `8ed5c6be873a6f69f5a26d024a9bb1fd8c416879` passed the existing owner-authorized [GitHub Pages workflow 38009188991](https://github.com/maxazure/maxazure.github.io/actions/runs/38009188991). All 37 live files match the local build byte-for-byte, and the live snapshot passes all five HTML contracts, homepage alias, canonical www redirect and custom HTTP 404. Live 1440px English and 320px Chinese rendering confirms the fern, fourteen small project images, generated-cover labels, preserved private-link boundaries and no horizontal overflow. The browser initially held an earlier HTML/CSS cache; disabling cache for this task's page and reloading displayed the verified release. Temporary QA reports remain outside Git.


## AI-first project expansion and left silver fern, 2026-10-10

The owner requested about thirty examples drawn from actual projects, prioritising AI systems and voice work, plus a clearer New Zealand fern and AI presence in the first viewport. Both locales now contain thirty distinct cases after Experience, in one continuous 3/2/1-column gallery. Sixteen new cases have individual generated concept covers; eleven original anonymous screenshots remain byte-identical. The gallery has nineteen explicitly labelled concept illustrations in total, all delivered as 320×200 files without zoom links or high-resolution variants.

The first three cases cover a conversational-device backend, Web Builder Agent and Idea Builder. Additional cases cover agent SDKs/transcript tooling, writing assessment, voice capture/translation/narration/LAN audio, configuration sync, persistent workspaces, browser testing, hardware control and reviewed media workflows. Public repository visibility and original commit authorship were checked where source links are offered. Customer labels remain generic; private repository URLs, application endpoints and personal-business associations are excluded. Web Builder's description identifies the complete research/design/build/check/deploy workflow and Claude Code/Codex/OpenCode profile compatibility. See [engineering-content.md](docs/engineering-content.md) for scope and attribution boundaries.

The hero introduces enterprise platforms and applied AI, with C#/.NET, React/TypeScript, Python, agent orchestration, knowledge retrieval and speech processing. Enterprise/ERP experience remains explicit and current employment remains in the career record. The original SEO title, description, canonical/alternate routes, identity schema, anchors and CV bytes are retained.

A single original silver fern now emerges from the left, replacing the crowded right-side texture. The characteristic tapered botanical shape was referenced against the Immigration New Zealand header, without reproducing its emblem or wordmark. The decoration uses 16% desktop and 10% phone opacity, separate positioning/masking, no animation or interaction, and is hidden in print/forced colours. Generation mode, exact prompts, file paths and delivery sizes are recorded in [ai-project-media.md](docs/ai-project-media.md).

- Typecheck: 18 files, zero errors/warnings/hints. Static build and all five HTML contracts pass, including thirty unique cases, bilingual order, generated-image labels and private-link restrictions.
- SEO comparison against accepted deployed 22ea00c: five routes, zero audit errors, critical findings or warnings; normalised SEO snapshots are identical.
- Real Chromium/Ego checks cover 1440px desktop, 820px tablet, 390px English phone and 320px Chinese phone. Layout remains 3/2/1 columns without horizontal overflow; all thirty images load at their 320px intrinsic width, desktop previews never exceed 320 CSS pixels and 320px-phone previews render at 224px.
- Desktop keyboard traversal reaches all 26 interactive elements in DOM order with visible focus and each focused element in the viewport. Mobile navigation opens with keyboard Enter, closes after selecting Projects, focuses the destination and settles below the sticky header. Escape closes the menu and returns focus. No-JavaScript navigation and all thirty cases remain available. Forced-colour and print emulation hide the fern.
- Hero-paragraph contrast measured conservatively against the brightest background pixel inside the text bounds is 6.12:1 desktop and 7.23:1 on the 320px Chinese view.
- Uncontended Lighthouse desktop English and mobile Chinese runs score 100 for performance, accessibility, best practices and SEO. LCP is 0.295s / 1.205s; CLS 0.032 / 0.00032; TBT 0ms / 0ms. An initial concurrent mobile run scored 94 with 292ms TBT, documenting local CPU contention/measurement variance. These are lab results, with no field-performance or search-ranking claim.
- Strict resource audit passes. Including the CSS fern manually, total homepage HTML and referenced local assets are 367,032 bytes English / 364,920 bytes Chinese. CSS is 26,148 bytes, fonts 14,432 bytes and application JS 867 bytes, within the project's 500KB/40KB/100KB/10KB limits. The new fern is 57,785 bytes. All final images passed through the required publishing finaliser with truthful AI-generated Software metadata.
- Temporary generation masters, source evidence and browser/audit artifacts remain outside Git/public output. Branded Safari, assistive-technology certification, physical printing and field CWV are not newly verified.

Published source commit `10257ee7009a441e4b6b3f4ead1c4f0c3df7abb0` passed [GitHub Pages workflow 38011396342](https://github.com/maxazure/maxazure.github.io/actions/runs/38011396342). All 53 published files match the local build byte-for-byte. The downloaded live snapshot passes the five-page HTML contract, homepage alias, canonical www redirect and custom HTTP 404. Live 1440px English and 320px Chinese browser views confirm thirty cases with the three AI systems first, the left fern, explicit AI hero copy, small non-interactive previews, no personal-business association and no horizontal overflow.


## Mobile visual recovery and interface previews, 2026-10-10

The owner reported that the phone fern was hard to see and the hero was crowded, requested 3D effects, and preferred concrete screenshot-style project media. The repeated summary panel is removed; hero copy is shorter and retains enterprise/ERP experience, .NET, React, Python, AI agents, retrieval and voice work. One native 3D silver fern replaces the faint masked texture. Desktop uses a left fern / right identity composition with subtle pointer-dependent viewpoint changes; phone copy/actions precede a clearly visible separate landscape fern. The repeated stack strip is hidden on phones. No text overlays the fern. Static transparent renders are visible without JavaScript, under reduced motion/data saving, on phones or after WebGL failure. There is no continuous animation, video, external model service or added runtime dependency.

All nineteen abstract project covers are replaced with individual flat interface mockups. Their visible captions explicitly identify AI-generated interfaces; eleven actual anonymous screenshots are preserved. The thirty-case order, gallery-after-experience placement, 3/2/1 columns, private-link restrictions, 320×200 thumbnail size and no-zoom contract remain. Full prompts, source paths, publishing steps and native mesh provenance are in [interface-media.md](docs/interface-media.md).

Performance plan: retain strict total 500KB / JS 10KB / CSS 40KB / fonts 100KB targets, with no exception. LCP remains server-rendered role text; native mesh generation/render runs in an idle-started OffscreenCanvas worker on fine-pointer desktops, while phones display only the pre-rendered asset. Fixed fern dimensions protect CLS; menu remains the primary interactive risk. Normal-flow mobile header plus hero must keep both actions and recognisable fern visible at 390×844 and 320×844. Short landscape viewports may scroll; their header is static. The five-route deployed f753c717 build is the accepted SEO regression baseline. Browser and lab verification are recorded below; deployment follows the existing authorised Pages workflow.


- Final typecheck: 21 files, zero errors/warnings/hints. Build and five-page HTML contracts pass. The accepted deployed five-route SEO snapshot is unchanged, with zero audit errors, critical findings or warnings. Original metadata, identity schema, routes, anchors and CV bytes are preserved.
- Ego/Chromium coverage: 1440×900 desktop, 820×900 tablet, 390×844 and 320×844 in both locales, and 844×390 landscape. No horizontal overflow; the gallery remains 3/2/1 columns. Both hero actions occupy one 50px row on phones; the fern is completely within the 844px portrait viewport. Hero heights are 674px English / 636px Chinese at 390px, and 727px / 636px at 320px. The short landscape header is static and content scrolls normally.
- Thirty thumbnails load at 320×200 intrinsic resolution, without image links or zoom; all eleven original anonymous WebP screenshots are byte-identical to the accepted release. Nineteen interface mockups have explicit generated captions. Desktop keyboard traversal reaches all 26 controls with visible focus. Mobile menu navigation and Escape preserve destination/return focus. No-JavaScript navigation/content, reduced-motion posters, forced colours, print and expanded text spacing pass. Desktop pointer input changes actual rendered fern pixels. Simulated worker startup failure and missing OffscreenCanvas capability preserve the static poster; changing reduced-motion preference returns to the poster and restores 3D when re-enabled.
- An initial main-thread WebGL implementation scored 89 desktop performance with 282ms TBT. The final OffscreenCanvas worker implementation scores 100/100/100/100 for performance/accessibility/best practices/SEO on both desktop English and mobile Chinese. LCP is 0.296s / 1.207s; CLS 0.02849 / 0.000376; TBT 0ms / 0ms. These are local lab results; field CWV, branded Safari, assistive-technology certification and physical printing remain unverified.
- Strict static resource audit has no warnings or critical findings. Its inventory omits the asynchronously loaded worker, so the 3,726-byte worker is added manually. Conservative homepage totals are 372,452 bytes English / 371,284 bytes Chinese, JS 6,117 bytes, CSS 26,129 bytes and fonts 14,432 bytes, inside the project's 500KB/10KB/40KB/100KB limits. The static fern exports are 21,324 bytes desktop / 9,790 bytes phone. New versioned asset names avoid reusing previous texture and concept-cover URLs.
- QA reports, generation masters and browser captures remain outside Git/public output. The final asset set is 55 published files; owner-directed deployment uses the existing GitHub Pages workflow.


## Hero composition correction and caption removal, 2026-10-10

The owner clarified that the silver fern is a background texture and requested the original left-copy/right-panel arrangement. The hero now restores that composition with a faint flat botanical fern emerging from the left, including a visible mobile crop. The right panel contains a compact original SVG attention field and the three previously used areas: enterprise software, applied AI systems and agent workflows. It omits the old statistics to keep the panel lighter. The decorative attention field interprets token connections, parallel heads and a matrix; it is not a functional Transformer, a copied paper figure or a research-authorship claim. Source reference: [Attention Is All You Need, section 3.2.2](https://arxiv.org/html/1706.03762v7#S3.SS2.SSS2), accessed 2026-10-10. Short CSS signal motion stops after 4.5 seconds; reduced motion is static. The native WebGL fern, worker, mesh and two renders are removed from the active tree.

The owner also requested removal of the small caption below every case image. All thirty caption lines and unused caption data/styles are removed. The gallery introduction now describes screenshots and illustrative interfaces, while generated mockups keep accurate alternative text and the media provenance record. Thirty case records, nineteen mockup files, eleven actual screenshot files, privacy constraints, links and no-enlargement behaviour remain unchanged.

Performance plan: preserve total 500KB / JS 10KB / CSS 40KB / fonts 100KB. The single 57,785-byte botanical texture is included manually in the resource audit because CSS backgrounds are outside its inventory. No animation library, Worker or WebGL remains; the existing menu is the only JavaScript interaction. The accepted byte-verified live `33a2792` snapshot is the SEO baseline. Existing title, description, H1, schema, canonical/locale routes and public CV remain unchanged. Browser verification covers left/right composition, 320px reflow, both languages, short landscape, reduced motion, no-JavaScript and text spacing before the existing authorised GitHub Pages release.


Verification of this correction:
- `pnpm check` (19 Astro files), `pnpm build` and `pnpm verify` pass. The accepted five-route SEO snapshot is identical, with zero audit errors, critical findings or review warnings. The public CV is unchanged. All thirty project image files are byte-identical to the published baseline.
- Ego/Chromium: 1440×900 desktop, 820×900 tablet, 390×844 and 320×844 in both locales, 844×390 landscape, mobile keyboard menu/Escape/destination focus, no JavaScript, expanded text spacing, reduced motion, forced colours and print emulation pass. No page-level horizontal overflow. Left copy/right panel reflow naturally; the 320px English panel continues below the fold while both actions and the attention field remain visible. No clipping or fixed-height content container is used. The botanical background remains present in no-JavaScript phone rendering. All per-image captions are absent. Desktop keyboard traversal reaches all 26 controls with visible focus once normal smooth scrolling settles. Short signal animations were observed running and stopping after 4.5 seconds.
- Conservative paragraph contrast against the brightest actual background pixel with text hidden: 5.02:1 desktop and 5.85:1 at 320px Chinese. The full-texture pixel maximum without the spatial mask is more conservative than the delivered background; actual rendered pixel checks are the evidence for text contrast.
- Lighthouse 13.5 desktop English and mobile Chinese: 100/100/100/100 (performance/accessibility/best practices/SEO), LCP 0.287s / 1.060s, CLS 0.02634 / 0.000376, TBT 0ms / 0ms. Resource audit passes with zero warnings/critical findings. Including the CSS background, homepage totals are 403,675 bytes English / 402,581 bytes Chinese; JS 867 bytes, CSS 26,729 bytes and fonts 14,432 bytes. This is lab evidence; field CWV and branded Safari remain unverified.
- Temporary browser screenshots and reports are `/tmp/jayliu-transformer-*`; the final build contains 53 deployment files. Existing owner-authorised GitHub Pages publication follows after source review and commit.


## Recruiting positioning maintenance, 2026-10-10

The current contract above supersedes earlier historical section-order and metadata-preservation notes below it. Details and fact provenance are in [docs/positioning.md](docs/positioning.md); earlier verification records remain historical evidence.

- New portrait: owner-supplied `https://www.hilily.ai/images/team/jay.jpg`, stored byte-for-byte as `public/images/jay-liu.jpg`, JPEG 219×256, 19,369 bytes. Original colour/aspect ratio and metadata retained; no generated edit. Owner explicitly authorises use on the personal website. Consumer: About on both homepages, 94×94px desktop / 76×76px phone rounded square, 10px corners, object-fit cover at center 40%, lazy/async with fixed dimensions and a name alternative. Replace only with owner-approved imagery. Exclude from hero and social card.
- SEO: comparison against deployed `525d9eb` has zero audit errors and zero critical changes. Four intentional review warnings: EN/ZH description rewrites and two new indexable project routes. All original canonical routes, homepage titles and identity schema remain. `llms.txt`, sitemap and locale switches match the new page jobs.
- Performance: retain the project-specific 500KB total / 10KB JS / 40KB CSS / 100KB font ceiling. Only the 19KB portrait is added; the homepage no longer references thirty thumbnails. Text is LCP; existing menu is the interaction risk; image dimensions reserve layout. No new dependencies, analytics or remote embeds.
- Website Copy Read: personal recruiting portfolio; audience is recruiters and technical hiring managers; goal is a relevant conversation; voice is direct and technical; proof comes from owner-confirmed career facts, public roles, source code and reviewed previews. Never imply confidential employer assignments, clinical results, accounting accuracy guarantees or adoption numbers. AI assists with wording and EN/ZH adaptation; Jay is the content owner. Facts are checked against the sources in positioning.md. No new tax, legal or medical advice is authored.
- Outcome Measurement Register: use the pre-implementation hypothesis and eleven-field measurement row in positioning.md. No historical conversion baseline or new analytics. Count voluntarily attributed recruitment conversations only after a release; do not claim a hiring or search improvement from QA.
- Documentation audits: the existing site-specification and DESIGN documents predate the installed skill’s current mandatory template. Those format audits report pre-existing schema/section mismatches. This pass updates the actual project and content contracts without a broad template migration; it does not claim those format audits passed. Functional, rendered and SEO evidence is recorded separately.


## Six-language release, 2026-10-10

Owner-authorised localisation uses English as the factual source, with complete Simplified Chinese, Traditional Chinese, Japanese, French and Korean variants. [Localisation contract and review](docs/localisation.md) records source revision, terminology, invariants, disclosure behaviour and test scope. English page content contains no Chinese characters; at the owner’s follow-up request, the language menu uses each language’s native name on every page. Its rounded control uses Google’s official Material translate icon. Every language has home, projects and privacy pages; `/zh/` is preserved, with new `/zh-hant/`, `/ja/`, `/fr/` and `/ko/` families. Translation does not change the underlying career, project or privacy facts.

AI-assisted content: the assistant authored and checked each translation against the published English source; Jay requested the six-language release and owns the content. No external native-editor review is claimed. The protected animation and English CV remain byte-identical; no new tracking or data processors are introduced. Search-result performance remains unmeasured.

Release checks: 25 files typechecked without errors, warnings or hints; 19 generated HTML pages pass contracts; all 18 indexable routes are reachable with no orphan/dead-end/broken internal links. Six-language homepages pass 1440/820/390/320px reflow, and project/privacy counterparts pass 1440/320px. Dropdown keyboard, outside dismissal, current state, page/fragment preservation, mobile navigation, native no-JavaScript switching and text-spacing/forced-colour checks pass. The original English case/project facts, animation source and animation CSS rules are preserved. Static resources remain under the project budgets; this is lab evidence, with field metrics and external native-editor review unmeasured.

Production release: `f5944e5bc8f570d2d6a1a9fc18e3ad23bb6c809e`, [Pages run 38042959504](https://github.com/maxazure/maxazure.github.io/actions/runs/38042959504), successful. Live verification at 2026-10-10T09:54:44+00:00 matched all 69 files and passed all 19 HTML-page contracts.


## Public recruiting evidence revision, 11 October 2026

This section supersedes earlier instructions to preserve the old PDF bytes. The owner requested a public CV, inspectable CRM evidence and an internal delivery story while retaining the overall layout. Details, sources, regeneration and verification: [recruiting evidence](docs/recruiting-evidence.md). Success criteria: a readable two-page public CV with personal contacts and three attributed projects; an honest fictional-data walkthrough of retry/conflict/history semantics; equivalent content in all six languages; no private records or fabricated employment outcomes.

### Fact Register and AI-Assisted Content Register

Owner/accountable author: Jay Liu. AI assistance: drafting, translation and implementation from the existing career record, owner operating rules and inspected application source/tests. Public claims are bounded to known employment facts, internal workflow and implemented behaviours. The owner supplied FNZ and HiLily specifics in this conversation; no unprovided metrics or sole hardware authorship are inferred. CRM users are described as Jay and a colleague; no colleague identity, customer identity, private path, endpoint or source repository is disclosed. The walkthrough is visibly labelled a simplified local simulation. Public source verifies CodexView's adapter coverage; GitHub About now agrees with README.

### Section Capacity Map and Design System Handoff

The homepage retains its order and four case rows. The CRM evidence link targets the walkthrough; CV labels now state English, PDF, two pages and 207 KB. Project indexes add one CRM case section before the unchanged thirty-card collection: introduction, five-step explanation, local demo console and four concise delivery-story entries. Desktop uses two columns, phones show controls first and stack the explanation and story. Existing Jost, graphite/paper/orange tokens, square borders, 44px actions and focus treatment are reused. No global stylesheet or Transformer changes. Frontend-design guidance applied; Impeccable is unavailable, so direct rendered verification is recorded without claiming that tool ran.

### Media Register and URL Migration Register

CV source `docs/cv/Jay-Liu-Public-CV.html` → `public/cv/Jie-Liu-CV.pdf`; HTML-authored, Chromium tagged export, two A4 pages, 206,610 bytes, English. Owner-directed public revision, reviewed metadata/text/links and both rendered pages. Existing URL is stable; replace-in-place PDF cache is controlled by GitHub Pages, with live verification pending. Index decision: document-primary. Invalidate export on source changes. Existing project images and social assets remain byte-identical. New local fragments: `/projects/#crm-demo` and the five equivalent locale fragments; no page routes removed or added.

### Privacy and Data Flow Register

No new personal information collection, storage, cookies, analytics or network calls. Fictional demo records live only in memory and clear on reset/reload. The private operational CRM remains unreachable from the demo. Source documents and records are never embedded in the public bundle.

### UI QA Coverage Register and Design Verification Ledger

| Surface / states | Evidence and outcome |
| --- | --- |
| Public CV and download actions | Two A4 pages visually reviewed, tagged headings/lists/links, extracted text and eight annotation URLs verified; metadata and public contacts correct; PDF/UA and screen-reader certification not claimed |
| CRM create, replay, colleague edit, stale rejection, reviewed merge, reset | Unit invariants and normal browser pointer/keyboard input; count stays one, stale version preserves note/history, final history has three revisions; controls announce status and reset focus |
| Six-language narrow variants | Complete interactions and no horizontal overflow at 320px; Chinese also 390px, English desktop 1440px; same five operations and factual scope |
| No JS / forced colours / text spacing / reduced motion | Complete initial-HTML explanation; hidden inactive controls; readable 320px reflow, visible focus and no new motion |
| Existing hero and collection | English/Chinese CV actions reviewed at desktop/narrow widths; four featured cases, all thirty cards, protected animation and image hashes verified |

### Performance Budget Register

No dependencies or external resources added. The demo JavaScript loads only on project indexes; styles are scoped. Existing strict static resource audit passes without warnings. The public PDF is 207 KB and fetched only on navigation. No field Core Web Vitals or hiring impact is inferred.

### Outcome Measurement Register

| Change | Hypothesis / scope | Primary outcome | Guardrails | Baseline / period | Release evidence | Observation window | Segments | Result source | Decision | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| public-proof-2026-10-11 | Aligned CV and inspectable workflow support recruiter evaluation across six locales | Recruitment conversations that explicitly mention a project or CV | No private data, accurate attribution, usable CV, honest simulated evidence | No comparable conversion count; old internal-style PDF and empty preview | Review branch; publication pending owner approval | First 28 full days after publication | Role interest and volunteered source | Owner observations, no added tracking | planned | Jay |

### Release and verification

`pnpm check`, build, HTML verification and demo invariant tests pass. Strict internal-link, downloadable-document and resource audits pass with no warnings. SEO baseline is retained deployed source b3db404d053719b34a67796379f076d9a52794ea, Pages run 38043561167; retained homepage hash matches live. Comparison: 19 routes, zero errors, critical findings or warnings. All old routes/metadata/locale links remain intact. GitHub Pages publication and live PDF response checks await owner approval; a feature-branch push has no deploy trigger. No skill-managed Cloudflare/shared-server deployment applies to this existing GitHub Pages repository.

Documentation audit limitation: the installed skill’s `site-spec-audit` and `design-md-audit` reject the repository’s pre-existing document format (required canonical headings/token-map schema). This revision keeps the established documentation structure and records current evidence; those schema-format audits are not reported as passing. The same limitation was recorded in the prior release. It does not change the passing application, link, PDF, resource and SEO checks.
