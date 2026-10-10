# Public CV and CRM walkthrough

Updated: 11 October 2026. Content owner: Jay Liu.

## Scope and evidence

This revision replaces the older internal-style PDF at the existing public URL with a two-page English recruiting CV. It uses Jay Liu (Jie Liu), the already-public personal email and professional profile links. Dates, formal job titles and education come from the previous career record. It adds three independent projects with observable implementation evidence and keeps them separate from FNZ employment. Employer assignment names and employer email are removed. Owner-supplied examples now support FNZ complex-problem analysis and reliability, and HiLily microphone echo cancellation, noise recognition and speech-to-speech integration.

The CRM case now explains its internal users, the change from local Markdown indexes to shared structured records and versioned notes, the API/CLI delivery, and the remaining human review boundary. Evidence is the existing owner operating instructions, application README, API implementation and API/CLI tests. No customer records, private URLs, employee names or internal repository links are published. No measured time saving or external adoption is claimed; no user-feedback story is invented.

`#crm-demo` on every project index is an explicitly labelled browser-only simulation with fictional data. It illustrates the implemented semantics: one create, an identical retry returning the existing record, another editor's accepted update, rejection of a stale version, and a human-reviewed merge. It is neither a production interface capture nor an integration test of the private backend. The five-step text remains available without JavaScript. Data exists only in memory, reset/reload clears it, and the demo performs no requests or persistent writes.

The existing thirty thumbnails retain their privacy treatment, dimensions and bytes. The CRM thumbnail now has a separate same-page walkthrough link. No high-resolution screenshot, zoom control, real operational record or authentication flow is introduced.

CodexView's GitHub About was updated on 11 October 2026 to match its README and adapter implementations: Codex CLI, Claude Code, OpenCode, AgentWeb codex-team and GitHub Copilot, with inline subagent support where available. The README already reflected this implementation and did not require editing.

## PDF source and regeneration

- Editable layout: `docs/cv/Jay-Liu-Public-CV.html`.
- Published export: `public/cv/Jie-Liu-CV.pdf` (existing URL retained).
- Two A4 pages, English, 206,610 bytes; links label the language, format, page count and rounded size (207 KB).
- HTML-to-PDF was first rendered with the installed html2pdf service. The final accessible-structure export used Chromium 152 `Page.printToPDF`, with `preferCSSPageSize`, `generateTaggedPDF` and `generateDocumentOutline` enabled, `displayHeaderFooter` disabled and print backgrounds enabled.
- No headless Chrome default URL/date header or footer appears. The page numbers and revision date are authored HTML.
- Update HTML first, regenerate, inspect both pages with Poppler, check metadata/text/URLs/structure, then update the reviewed SHA-256 in `scripts/verify-site.py` and the size labels if necessary. A new source revision invalidates the export review.
- The public PDF is a useful standalone recruiting document (`document-primary`); homepage career and project HTML remain readable alternatives. GitHub Pages controls PDF response headers and caches. Live MIME/cache/revision checks are pending publication.

## Verification

- `pnpm check`: 28 files, no errors, warnings or hints. Build and `pnpm verify` pass for all 19 pages and six languages.
- Demo invariant tests check retry identity/history, stale-write preservation, immutable prior state, merged revision history, terminal state and reset. Chromium keyboard/pointer walkthroughs cover the five operations and reset, including all six locale variants.
- Chromium evidence: 1440px desktop, 390px Chinese phone, 320px narrow variants including French/Japanese/Korean/Traditional Chinese. No page-level horizontal overflow in these states. English and Chinese homepage CV actions remain visible and usable.
- Off-happy checks: no JavaScript leaves the five-step explanation visible and hides controls; forced colours, increased text spacing and reduced motion at 320px preserve readable content and focus. No new animation was added.
- Both PDF pages were rendered and inspected. Text extraction, eight URL annotations, public title, two A4 pages and tagged H1/H2/H3/list/link structure pass. No employer email or internal assignment identifier remains. This does not claim PDF/UA certification or a screen-reader audit.
- Strict internal-link, downloadable-document and resource-budget audits pass without warnings. SEO comparison against the retained deployed build has 19 unchanged route surfaces, zero errors, critical findings or warnings. Its homepage hash matched the live site; baseline Pages run: 38043561167, source b3db404d053719b34a67796379f076d9a52794ea.
- The Transformer component, global stylesheet and existing project image bytes are unchanged. No new dependencies, analytics, production calls or personal information collection.
- Temporary browser/PDF screenshots and machine-readable reports are outside the repository. Branded Safari, assistive-technology certification, field performance, recruiting outcomes and post-publication delivery remain unverified.

## Release plan

The review branch is `improve-public-cv-crm-demo`. Its push does not deploy. After owner approval, merge to `master`; the existing `Build and deploy portfolio` GitHub Actions workflow checks, builds and publishes `dist` to GitHub Pages at `https://jayliu.co.nz`. No DNS, server or Cloudflare changes are needed. Verify the live PDF bytes/headers and the English/Chinese walkthrough after publication. CodexView's About update is already live.

Documentation audit limitation: the installed skill’s `site-spec-audit` and `design-md-audit` reject the repository’s pre-existing document format (required canonical headings/token-map schema). This revision keeps the established documentation structure and records current evidence; those schema-format audits are not reported as passing. The same limitation was recorded in the prior release. It does not change the passing application, link, PDF, resource and SEO checks.

## FDE narrative follow-up

Owner-supplied evidence on 11 October adds problem-led CRM customisation and AI workflow integration, FNZ complex-problem analysis/reliability, and HiLily microphone/echo/noise/speech-model integration. All six language versions and the CV reflect this. The CV now also includes a short volunteer HiLily contribution. Implemented CRM reminders and controlled writes are distinguished from broader AI analysis/decision extensions. See positioning.md for the exact factual boundaries. The two-page PDF was regenerated and both pages reviewed; its source remains the archived HTML.

Follow-up validation: typecheck/build/19-page contracts and existing demo invariants pass. Both regenerated CV pages are A4, readable and tagged; eight link annotations include HiLily. Six homepage locales have no horizontal overflow at 320px; updated English desktop and Chinese narrow case copy were visually reviewed. SEO comparison remains 19 routes with zero errors, critical findings or warnings. The review branch remains unpublished.
