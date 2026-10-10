# Six-language portfolio

The owner requested English, Simplified Chinese, Traditional Chinese, Japanese, French and Korean on 10 October 2026. English is the factual source. The source revision is the published recruitment release `8520c86f38a0cbab70bff824c307d25ea8bcf690`, deployed by [Pages run 38041508348](https://github.com/maxazure/maxazure.github.io/actions/runs/38041508348). All 57 files from that release were fetched and matched the local build before this change.

## Content and routes

Each language has a homepage, a complete 30-project collection and a privacy page. English keeps `/`, `/projects/` and `/privacy/`. Simplified Chinese keeps `/zh/`. New prefixes are `/zh-hant/`, `/ja/`, `/fr/` and `/ko/`. Chinese targeting is now explicitly script-based (`zh-Hans`, `zh-Hant`); the established `/zh/` URLs remain unchanged. All 18 indexable routes have self-canonicals, reciprocal six-language alternates and English `x-default` links.

`src/data/locales/en.json` is the copy contract. Each other JSON file must contain the same fields and list entries; missing translations fail verification instead of silently falling back to English. `profile.ts` retains shared identity. The project and featured catalogs keep IDs, ordering, stages, image paths and external URLs shared. Locales supply names, descriptions, alternatives and case explanations. Source revision and factual review are recorded here; translations do not create new project claims.

The translation pass covers navigation, actions, accessibility labels, headings, biography, six career entries, four capability groups, four featured cases, all thirty projects, image alternatives, privacy, metadata and footer. Proper product, institution and employer names retain their official spellings. The original English CV is labelled as an English PDF in every language. The existing decorative Transformer component and its English technical labels are deliberately preserved at the owner's direction.

English pages contain no Chinese characters, including the portrait caption, accessible labels and language choices. The language selector uses an original source-controlled SVG combining a letter panel and globe, followed by a caret. Choices are written in the current page's language; the English menu therefore says “Simplified Chinese” and “Traditional Chinese”. Chinese pages use the requested Chinese labels. No flags, external icon font or translation service is loaded.

## Translation review

Prepared and reviewed by the coding assistant against the owner-supplied English facts. Japanese, French and Korean were written as complete translations with natural sentence structure. Traditional Chinese began with a local ICU script conversion, followed by terminology and phrasing review against English; it uses consistent Traditional Chinese terms including 軟體, 資料, 專案, 介面 and 紐西蘭. This is not a claim of external native-editor review.

Protected facts: 18+ years; career dates and employers; FNZ's delivery focus and confidentiality; FDE as an interest rather than a previous title; the CRM's internal use; the accounting tool's human-review boundary; HiLily's volunteer advisory attribution, team ownership and pre-pilot MVP stage; CodexView's public packages without adoption claims. Privacy text describes the same existing data flows and adds no collection, processor or legal promise.

## Interaction and layout contract

The native `details` / `summary` disclosure contains six ordinary links and works without JavaScript. It identifies the current language, closes on Escape and outside interaction, restores focus on Escape and closes the mobile navigation when opened. Switching retains the page family; enhancement also carries the current fragment to its counterpart. There is no automatic language redirect, cookie or browser-language detection.

The menu uses the existing graphite, paper, orange and rule tokens, with a 44px minimum target. Japanese and Korean use local system font fallbacks and adjusted heading sizes; Japanese title chunks stay intact across line breaks. Original animation source, public CV, portrait bytes and project previews remain unchanged.

## Acceptance

- Typecheck, static build and 19-page HTML verification, including six complete dictionaries, route parity, privacy constraints, unchanged protected files and English without Chinese characters.
- Homepage layouts at 1440, 820, 390 and 320 CSS pixels in all six languages; no page overflow. Photo is 94px square on desktop and 76px square on phones, 10px corners, below the first viewport.
- Project/privacy routes passed at 1440px and 320px in every language (24 route/viewport checks). Actual EN-to-FR project switching preserved `#project-codexview`. Enter, Tab, Escape/focus return, outside dismissal and mobile-menu destination focus passed. With JavaScript disabled, native disclosure and KO-to-JA project navigation passed using browser input. All six homepages passed 320px text-spacing overrides. Forced colours preserved the current-language marker, menu border and focus; the accessibility tree exposes the native disclosure name, expanded state and controlled navigation.
- Final typecheck: 25 files, zero errors, warnings or hints. Build and six-language verifier pass. Original English project/case facts and every Transformer CSS rule were compared with the published source and are preserved. Internal-link and static-resource audits pass. Search indexing, field performance, branded Safari, screen-reader certification and external native-editor review are not claimed.

Published commit `f5944e5bc8f570d2d6a1a9fc18e3ad23bb6c809e` via [Pages run 38042959504](https://github.com/maxazure/maxazure.github.io/actions/runs/38042959504). The workflow passed typecheck, build, verification and deployment. At 2026-10-10T09:54:44+00:00, all 69 live files matched the local build byte-for-byte, and the verifier passed against the live 19-page snapshot.
