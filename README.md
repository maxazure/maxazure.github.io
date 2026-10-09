# Jay Liu — jayliu.co.nz

Personal engineering portfolio, built with Astro 7, TypeScript and Tailwind CSS 4. Static HTML is generated at build time. A small native JavaScript disclosure handles mobile navigation; no React runtime, animation library, analytics or third-party fonts are required.

The English homepage retains its established title and description. The site presents enterprise software experience and recent independent engineering work for a recruitment audience, with concise research references. FNZ employment is shown separately from independent projects.

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

`src/data/profile.ts` owns profile facts and English/Chinese copy. `src/lib/seo.ts` generates metadata and the Person / WebSite / ProfilePage graph. Reusable Astro components live in `src/components`; styles are in `src/styles/global.css`.

`scripts/verify-site.py` validates the generated routes, internal links, legacy anchors, metadata, schema, crawl files and the unchanged existing CV. `scripts/build-brand.py` optionally reproduces the checked-in social card and favicon PNGs using Pillow and an OFL Jost 700 TTF. Deployment does not need this optional authoring dependency. The self-hosted WOFF2 licence is in `public/fonts/OFL-Jost.txt`.

## Publish

Pushes to `master` trigger `.github/workflows/deploy.yml`. GitHub Actions installs the locked dependencies, checks types, builds static output and verifies it before deploying `dist/` to GitHub Pages. Pages uses the existing `jayliu.co.nz` custom domain and HTTPS. The repository's Pages build source must be **GitHub Actions**.

Preserved public contracts: `/`, `/index.html`, `#home`, `#about`, `#skills`, `#resume`, `#portfolio`, `#contact`, `/cv/Jie-Liu-CV.pdf` and the legacy favicon path. New routes are `/zh/`, `/privacy/`, `/zh/privacy/` and a real GitHub Pages 404 document. The CV is retained byte-for-byte as an existing public document; it is not promoted as a newly prepared job-application CV.

After publishing, check the homepage, both language versions, privacy, an unknown URL, robots, sitemap, social image and CV. GitHub Pages owns HTTP headers and cache policy; this project does not claim to configure unsupported `_headers` rules. Search rankings, indexing and research benchmark performance are not inferred from build success.

See [DESIGN.md](DESIGN.md), [site specification](site-specification.md) and [content rationale](docs/engineering-content.md) for the design, evidence boundaries and verification record.

## Primary references

- [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
- [Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [ReAct](https://arxiv.org/abs/2210.03629)
- [SWE-agent](https://arxiv.org/abs/2405.15793)
- [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)
- [LongMemEval](https://arxiv.org/abs/2410.10813)
