---
name: Jay Liu Engineering Portfolio
version: 2
updated: 2026-10-10
---

# Design intent

A personal engineering portfolio for hiring teams. Use a graphite editorial composition, large name typography and restrained mathematical wire imagery. The visual subject is software systems, with Jay's name and established engineering identity carrying the first viewport.

## Colour tokens

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#121413` | Main background |
| Surface | `#191d1a` | Project section |
| Paper | `#ecede6` | Main text; experience background |
| Muted | `#afb6af` | Secondary dark-surface text |
| Accent | `#ff835b` | Actions and connecting orbit |
| Line | `#373e38` | Decorative separators |

The palette is a redesign choice, not a claimed pre-existing brand palette. Paper-on-ink and accent-on-ink must meet text contrast. Light-section secondary copy uses `#626b5d`; thin decorative lines do not carry meaning.

## Typography

Display and wordmark: OFL Jost static 500/700, self-hosted WOFF2. Body: native sans-serif. Technical labels: native monospace. Chinese: platform CJK sans-serif fallback. No simulated display bold/italic. Only Jost 700 is preloaded.

Desktop name: 100–174px. Major headings: 36–58px. Body: 14–16px, line-height 1.7–1.85. Supporting technical labels: 9–11px. Text remains HTML, including project titles.

## Spacing and layout

Max shell: 1280px. Desktop gutters: 56px; medium 36px; mobile 20px. Section space: 112px desktop, 72px mobile. Major gaps: 80–120px; project gap: 36px. Use mostly square corners. Separate material by grids and rules rather than repeated rounded cards.

Hero: name and engineering identity on the left, projected mathematical field on the right. Work immediately follows the hero and stack strip: three clearly labelled groups of thumbnail-and-description rows. About follows the concrete cases. Skills: four rule-separated columns. Experience: paper background and chronological rows. Contact: direct email and profile links.

At narrow widths, place hero copy and actions before the simplified field. Keep projects' problem descriptions permanently visible. Project rows reflow from thumbnail/copy/action columns to one column on phones. Thumbnails remain small. Convert skills to two columns at medium widths and one column below 420px. Collapse chronology into readable rows. Native mobile menu retains a usable no-JavaScript navigation fallback.

## Signature and assets

Connecting orbit appears in the hero and social card. The case collection uses actual redacted screenshot exports. It communicates system relationships; these graphics are decorative abstractions and provide no evidence of product UI or employer architecture. The original wordmark is preserved as an archival asset. The refreshed wordmark spells **JAY LIU** and the favicon uses **JL**.

## Radius, shadow and motion

Production UI corners: square. Favicon: 12/64-unit radius. Case images use a thin border, with no zoom cursor, hover enlargement or image interaction. Hover: orange colour, slight 3px arrow movement, 200ms. The hero orbit draws once in 2 seconds; no continuous animation. All animation and smooth scrolling are disabled under reduced motion.

## Components and states

Primary button: orange fill, dark text, 52px minimum height, paper hover. Text links: minimum 44px hit area and simple arrow. Language control: bounded 44px target. Focus: 2px orange outline with 6px offset. Mobile menu exposes expanded state, supports Escape and closes after navigation. Forced colours preserve text and buttons while removing nonessential illustrations. Print removes navigation and decorative media.

## Rules

Use concise, technically specific copy tied to reviewed work. Keep FNZ role and independent projects distinct. Preserve homepage metadata and legacy anchor IDs. Never add fabricated project screenshots, research results, percentage skill bars, auto-playing media or hiring availability claims. Technical concepts should make the hiring relevance clearer; they should not obscure what was built.
