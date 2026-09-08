# ajejohnson.tech

Personal portfolio for Ajejohnson Emmanuel — full-stack developer and digital
product builder.

## Stack

- **Vite** + **React 19**
- **Tailwind CSS v4** (`@tailwindcss/vite`, tokens in `src/index.css`)
- **sharp** — build-time image / asset generation only (dev dependency)

No router, no animation library. One page, composed from sections in
`src/components/`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # -> dist/
npm run preview
```

## Content

All copy and project data live in two files:

- `src/data/site.js` — name, role, email, location, social links
- `src/data/projects.js` — the six projects (order, copy, roles, stack, links)

## Images

Source screenshots are in `src/assets/images/work/*.png`. The optimised WebP
versions actually used by the site are in `src/assets/images/work/opt/` and are
regenerated with:

```bash
npm run optimize:images
```

Static assets (favicons, `og-image.png`) are regenerated with:

```bash
node scripts/gen-static.mjs
```

## Deploy (Vercel)

1. Import the repo in Vercel. Framework preset: **Vite**
   (build `npm run build`, output `dist`).
2. `vercel.json` sets caching + security headers; nothing else to configure.
3. Add the domain `ajejohnson.tech` in the project's **Domains** tab and follow
   Vercel's DNS instructions (A record `76.76.21.21` for the apex, or Vercel
   nameservers if you delegate the whole zone). `www` redirects to the apex
   automatically once both are added.
4. After the domain resolves, submit `https://ajejohnson.tech/sitemap.xml` in
   Google Search Console.

SEO metadata (title, description, Open Graph, Twitter card, JSON-LD Person,
canonical) is in `index.html`. Update the canonical/OG URLs there if the domain
changes.
