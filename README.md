# Invincible

A personal portfolio built with [Astro](https://astro.build/), using a static-first architecture and a shared Vercel-inspired design system.

## Tech stack

- Astro
- TypeScript (strict mode)
- CSS custom properties and responsive CSS
- Static routes with reusable project and blog data

## Getting started

Requirements: Node.js 22.22.0 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — create the production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run astro` — run the Astro CLI

## Site structure

- `/` — homepage
- `/work/` and `/work/{slug}/` — work index and individual case studies
- `/about/` — about page
- `/services/` — services overview
- `/blog/` and `/blog/{slug}/` — editorial index and articles
- `/contact/` — contact options
- `/privacy/` — privacy notice
- `/robots.txt` and `/sitemap.xml` — crawler endpoints
- `/404.html` — custom not-found page

## Adding work

Edit `src/data/projects.ts`. Add a project record with a unique `slug`, summary, context, challenge, approach, focus areas and deliverables. The work index, case-study routes and sitemap are generated from this shared model.

## Publishing a blog article

Add an article object to `src/data/blog.ts` with a unique `slug`, title, description, category, ISO publication date, reading-time label, intro and sections. The blog index, article route, related-reading links, BlogPosting structured data and sitemap entries are generated from that source.

Use descriptive titles and summaries, ensure article content is genuinely useful, link between related pages, and never add unsupported performance claims or keyword-volume estimates as facts.

## SEO and deployment

The shared layout outputs a unique description, canonical URL, Open Graph metadata and basic WebSite/Organization JSON-LD. Article pages add BlogPosting structured data; work pages add CreativeWork structured data. The sitemap and robots.txt endpoints use the configured site URL.

The default site URL is `https://invincible-seven.vercel.app`. Set `SITE_URL` in the deployment environment if the production domain changes. Canonical URLs use trailing slashes to match the route structure.

After deployment, verify the domain in Google Search Console and inspect sitemap processing, indexing and performance there. A successful build is not a guarantee of indexing or ranking.

## Design system

Preserve the tokens in `DESIGN.md` and `src/styles/global.css`: near-white surfaces, ink-black typography and CTAs, Geist typography, hairline dividers and blue accents. Do not introduce an unrelated palette.
