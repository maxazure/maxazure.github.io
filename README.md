# Jay Liu - jayliu.co.nz

Personal engineering portfolio, built with Astro 7, TypeScript and Tailwind CSS 4. Static HTML is generated at build time. Small native disclosures handle mobile navigation and language selection; no React runtime, animation library, analytics or third-party fonts are required.

The portfolio supports senior software engineering, enterprise AI integration and FDE recruitment conversations. Its homepage explains Jay’s business and delivery focus, then presents four attributable cases (enterprise CRM, NZ Accounting Assistant, HiLily and CodexView), career experience, capabilities and direct contact. FDE is an interest, not a past title. The complete 30-project gallery is available in all six languages, with English at `/projects/`.

The owner requested that the existing Transformer animation remain unchanged. A small rounded-square owner-supplied portrait appears in About, after the first screen. The original public CV is linked from the hero, contact and project collection. Homepage descriptions distinguish FNZ employment from independent AI work; the established page titles and identity remain.

## Develop and verify

Use Node.js 22.19 or later and the pinned pnpm version in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm verify
pnpm preview
```

`src/data/profile.ts` owns shared identity. `src/data/locales/en.json` is the factual copy source; matching JSON dictionaries provide Simplified Chinese, Traditional Chinese, Japanese, French and Korean. `src/lib/locales.ts` owns routes and language tags. `src/lib/seo.ts` generates metadata and the Person / WebSite / ProfilePage graph. Reusable Astro components live in `src/components`; styles are in `src/styles/global.css`.

`scripts/verify-site.py` validates the generated routes, internal links, legacy anchors, metadata, schema, crawl files and the unchanged existing CV. `scripts/build-brand.py` optionally reproduces the checked-in social card and favicon PNGs using Pillow and an OFL Jost 700 TTF. Deployment does not need this optional authoring dependency. The self-hosted WOFF2 licence is in `public/fonts/OFL-Jost.txt`.

## Publish

Pushes to `master` trigger `.github/workflows/deploy.yml`. GitHub Actions installs the locked dependencies, checks types, builds static output and verifies it before deploying `dist/` to GitHub Pages. Pages uses the existing `jayliu.co.nz` custom domain and HTTPS. The repository's Pages build source must be **GitHub Actions**.

Preserved public contracts: `/`, `/index.html`, `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact`, `/cv/Jie-Liu-CV.pdf` and the legacy favicon path. Public routes also include `/zh/`, `/projects/`, `/zh/projects/`, `/privacy/`, `/zh/privacy/` and a real GitHub Pages 404 document. The CV is retained byte-for-byte as an existing public document; it is not promoted as a newly prepared job-application CV.

Each locale has home, project and privacy routes: `/`, `/zh/`, `/zh-hant/`, `/ja/`, `/fr/` and `/ko/`. The native language dropdown retains the current page. See [localisation](docs/localisation.md) for factual and translation boundaries.

After publishing, check all six languages, privacy, an unknown URL, robots, sitemap, social image and CV. GitHub Pages owns HTTP headers and cache policy; this project does not claim to configure unsupported `_headers` rules. Search rankings, indexing and project impact are not inferred from build success.

See [positioning and evidence](docs/positioning.md), [DESIGN.md](DESIGN.md), [site specification](site-specification.md) and [content rationale](docs/engineering-content.md) for the design, evidence boundaries and verification record.

## Primary references

- [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
- [Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

Shared project facts live in `src/data/project-catalog.json`; project copy is in the locale dictionaries. Only redacted 320×200 previews belong in `public/projects/`; do not add original screenshots, high-resolution variants, zoom links or client names. Public client-domain links are owner-authorised. Private systems have no public endpoints. See `docs/engineering-content.md` for evidence boundaries.
