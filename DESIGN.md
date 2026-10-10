---
name: Jay Liu Engineering Portfolio
version: 9
updated: 2026-10-11
---

# Design intent

A personal engineering portfolio for hiring teams. Use a graphite editorial composition, a role-led first viewport and a faint silver fern background. The visual subject combines New Zealand identity and engineering, with Jay's identity, enterprise experience and technical role carrying the first viewport.

## Colour tokens

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#121413` | Main background |
| Surface | `#191d1a` | Project section |
| Paper | `#ecede6` | Main text; experience background |
| Muted | `#afb6af` | Secondary dark-surface text |
| Accent | `#ff835b` | Actions and integration trace |
| Line | `#373e38` | Decorative separators |

The palette is a redesign choice, not a claimed pre-existing brand palette. Paper-on-ink and accent-on-ink must meet text contrast. Light-section secondary copy uses `#626b5d`; thin decorative lines do not carry meaning.

## Typography

Display and wordmark: OFL Jost static 500/700, self-hosted WOFF2. Body: native sans-serif. Technical labels: native monospace. Chinese, Japanese and Korean: locale-appropriate platform sans-serif fallbacks. No simulated display bold/italic. Only Jost 700 is preloaded.

Desktop name: 20–24px; primary role: 48–80px, 38–56px on phones. Major headings: 36–58px. Body: 14–16px, line-height 1.7–1.85. Supporting technical labels: 9–11px. Text remains HTML, including project titles.

## Spacing and layout

Max shell: 1280px. Desktop gutters: 56px; medium 36px; mobile 20px. Section space: 112px desktop, 72px mobile. Major gaps: 80–120px; project gap: 28px. Use mostly square corners. Separate material by grids and rules rather than repeated rounded cards.

Hero: personal name, engineering role, Enterprise AI & FinTech specialism, business-workflow value and selected-work/CV/LinkedIn actions on the left. Preserve the entire right panel and Transformer animation. A faint botanical silver fern remains behind the copy. About includes a small 94px-wide portrait (76px on phones), strictly after the hero and outside the first screen. Four text-led featured cases follow: two-column editorial rows with business context, role, engineering judgement and stage/evidence. Career experience retains the paper background, with three general FNZ delivery responsibilities. Capabilities and a compact open-source list precede direct contact. The complete thirty-card gallery lives on its own route in each language with homepage and recruitment links.

At narrow widths, put concise hero copy/actions before a compact focus panel. The panel keeps a smaller attention field and three readable rows; omit the old statistics. The fern remains a faint background, with a separately positioned and masked mobile crop. The repeated stack strip is hidden on phones, while the technical stack remains in hero copy and Skills. Keep the purpose of every project visible. The gallery reflows from three columns to two below 1000px and one below 600px. Small thumbnails never exceed 320 CSS pixels and have no image links or zoom controls. Convert skills to two columns at medium widths and one column below 420px. Collapse chronology into readable rows. Native mobile menu retains a usable no-JavaScript navigation fallback.

## Signature and assets

The silver fern is a flat botanical background at 22% desktop / 20% mobile opacity. It has no motion or model renderer and disappears in print and forced colours. The small original canvas attention field shows six tokens flowing through an embedding column and three layers, weighted causal-attention curves with travelling particles for the active query, a forward-pass pulse and a live 6×6 attention matrix. It cycles through four colour-coded heads (previous-token, self, anchor, semantic). This is a decorative interpretation of Transformer multi-head attention, with no claim of training a model or research authorship. It pauses when off-screen or the tab is hidden; reduced motion renders one static frame. The existing social card retains the original decorative orbit and its established name/role identity. The project indexes use eleven actual anonymous screenshot exports and nineteen AI-generated interface mockups. Generated previews use a compact in-frame label without adding separate caption lines; accurate alternatives and media records retain provenance. Homepage cases use text and source links as evidence. The original wordmark is preserved as an archival asset. The refreshed wordmark spells **JAY LIU** and the favicon uses **JL**. Asset paths, production treatment and full prompts are recorded in `docs/interface-media.md`; historical prompts are retained in the two earlier media records.

## Radius, shadow and motion

Production UI corners: square. Favicon: 12/64-unit radius. Case images use a thin border, with no zoom cursor, hover enlargement or image interaction. Hover: orange colour, slight 3px arrow movement, 200ms. The botanical background is static. The attention field is a looping inline canvas script, with no extra runtime or 3D library. All animation and smooth scrolling are disabled under reduced motion.

## Components and states

Primary button: orange fill, dark text, 52px minimum height, paper hover. Text links: minimum 44px hit area and simple arrow. Language control: Google’s Material Icons Round translate SVG and a caret open a native six-link disclosure; the control and panel have 10px corners. Each option has a 44px minimum target; the 224px panel aligns to the right and fits narrow viewports. Labels always use each language’s native name, with a matching `lang` attribute. Focus: 2px orange outline with 6px offset. The header is sticky, 72px on desktop and 64px on mobile. Scroll padding keeps anchor destinations clear of the header. The mobile menu exposes expanded state, supports Escape and closes after navigation. Without JavaScript, mobile navigation is visible and its header stays in the document flow. Forced colours preserve text and buttons while removing nonessential illustrations. Print uses A4 with 14mm margins, dark text on white, hidden navigation and a compact project layout with small previews. Headings, career rows, project cards and the contact block stay together across page breaks.

## Rules

Use concise, technically specific copy tied to reviewed work. Keep the FNZ career role and personal projects distinct. Omit personal-business branding, links and promotional text. Preserve homepage titles and legacy anchor IDs. Descriptions separate employer responsibilities from independent AI work. Never present generated mockups as actual project screenshots, research results, percentage skill bars, auto-playing media or hiring availability claims. Technical concepts should make the hiring relevance clearer; they should not obscure what was built.


## Recruiting path additions

Featured rows use the existing square, ruled editorial style with 32px titles, 18px problem summaries and 15px evidence text. On phones each row becomes one column; all copy stays visible without an accordion. Project descriptions are 14px and supporting status labels 11px. The original 219×256 photo file is retained. Display it as a 94×94px rounded square (76×76px on phones), with 10px corners and object-fit cover at center 40% to keep the face in view; preserve its colours and lazy loading. No new motion, font, JavaScript dependency or external embed is introduced. The contact headline states the recruitment context; CV, LinkedIn and email remain direct links.

## CRM walkthrough and public CV

The project index adds a scoped, ruled CRM walkthrough with fictional records. At desktop the five-step explanation sits beside a bordered console; below 800px the console comes first, followed by the full sequence. A four-part internal usage story follows. Existing colours/fonts and focus patterns apply. The console announces each result, preserves earlier revisions, and exposes reset; no storage, requests or animation. Static explanation remains available without JavaScript. The homepage layout and global CSS are unchanged. CV links identify English PDF, two pages and 203 KB. The CV uses a separate restrained A4 print layout, with career history on page one and independent projects plus education on page two.
