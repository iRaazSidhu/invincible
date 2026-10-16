# Invincible

A personal portfolio built with [Astro](https://astro.build/).

## Tech stack

- Astro
- TypeScript (strict mode)
- CSS custom properties and responsive CSS

## Getting started

Requirements: Node.js 22.12.0 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run astro` — run the Astro CLI

## Build

Run `npm run build` to verify the production output. The generated static site is written to `dist/`.

## Project structure

```
src/
  components/  # Reusable UI components
  layouts/     # Shared page layouts
  pages/       # File-based routes
  styles/      # Global design tokens and base styles
public/        # Static assets
```

## Customization

Update the content in `src/pages/index.astro` and the design tokens in `src/styles/global.css` to personalize the portfolio.

## Deployment

The site can be deployed to any static hosting provider that supports Astro. Use `npm run build` and publish the `dist/` directory.
