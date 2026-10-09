---
name: Jay Liu Engineering Portfolio
version: 3
updated: 2026-10-10
---

# Design intent

A personal engineering portfolio for hiring teams. Use a graphite editorial composition, a role-led first viewport and a restrained engineering trace graphic. The visual subject is software systems, with Jay's identity, enterprise experience and technical role carrying the first viewport.

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

Display and wordmark: OFL Jost static 500/700, self-hosted WOFF2. Body: native sans-serif. Technical labels: native monospace. Chinese: platform CJK sans-serif fallback. No simulated display bold/italic. Only Jost 700 is preloaded.

Desktop name: 20–24px; primary role: 48–80px, 38–56px on phones. Major headings: 36–58px. Body: 14–16px, line-height 1.7–1.85. Supporting technical labels: 9–11px. Text remains HTML, including project titles.

## Spacing and layout

Max shell: 1280px. Desktop gutters: 56px; medium 36px; mobile 20px. Section space: 112px desktop, 72px mobile. Major gaps: 80–120px; project gap: 28px. Use mostly square corners. Separate material by grids and rules rather than repeated rounded cards.

Hero: personal name above a prominent engineering role on the left; bounded profile panel with a decorative integration trace, ERP focus and career facts on the right. About and skills establish enterprise capability. Experience uses a paper background and six chronological roles. Projects follow Experience as one continuous three-column album, with 14 numbered cards and concise descriptions. Contact offers direct email and personal profiles.

At narrow widths, put hero copy/actions before the profile panel. Keep the purpose of every project visible. The gallery reflows from three columns to two below 1000px and one below 600px. Small thumbnails never exceed 320 CSS pixels and have no image links or zoom controls. Convert skills to two columns at medium widths and one column below 420px. Collapse chronology into readable rows. Native mobile menu retains a usable no-JavaScript navigation fallback.

## Signature and assets

The hero trace is a decorative abstraction of integration, with no employer-architecture or product-UI claim. Its thin rules and coral node are echoed in the project frames. The existing social card retains the original decorative orbit and its established name/role identity. The gallery uses actual anonymous screenshot exports; open-source cards use explicit decorative code covers. The original wordmark is preserved as an archival asset. The refreshed wordmark spells **JAY LIU** and the favicon uses **JL**.

## Radius, shadow and motion

Production UI corners: square. Favicon: 12/64-unit radius. Case images use a thin border, with no zoom cursor, hover enlargement or image interaction. Hover: orange colour, slight 3px arrow movement, 200ms. The hero trace is static; no continuous animation or extra runtime is used. All animation and smooth scrolling are disabled under reduced motion.

## Components and states

Primary button: orange fill, dark text, 52px minimum height, paper hover. Text links: minimum 44px hit area and simple arrow. Language control: bounded 44px target. Focus: 2px orange outline with 6px offset. The header is sticky, 72px on desktop and 64px on mobile. Scroll padding keeps anchor destinations clear of the header. The mobile menu exposes expanded state, supports Escape and closes after navigation. Without JavaScript, mobile navigation is visible and its header stays in the document flow. Forced colours preserve text and buttons while removing nonessential illustrations. Print removes navigation and decorative media.

## Rules

Use concise, technically specific copy tied to reviewed work. Keep the FNZ career role and personal projects distinct. Omit personal-business branding, links and promotional text. Preserve homepage metadata and legacy anchor IDs. Never add fabricated project screenshots, research results, percentage skill bars, auto-playing media or hiring availability claims. Technical concepts should make the hiring relevance clearer; they should not obscure what was built.
