# Paul Adrian O. Pascual — Portfolio

Personal portfolio for **Paul Adrian O. Pascual**, a full-stack developer and AI
integration engineer based in the Philippines. Built as a fast, static (SSG)
site — no database, no CMS, no auth. All content lives in typed data files
under [`lib/data/`](lib/data).

## Tech stack

- **Next.js 15** (App Router, React Server Components, SSG)
- **React 19** + **TypeScript** (strict mode, `noUncheckedIndexedAccess`)
- **Tailwind CSS v4** (CSS-first config, custom design tokens)
- **Framer Motion** — scroll reveals, hero entrance, page transitions, mobile menu
- **Lucide + react-icons** — UI glyphs and tech-stack/social brand marks
- **shadcn/ui conventions** — `cn()`, CVA-variant primitives (`button`, `badge`, `card`, `skeleton`)
- **next-themes** — light/dark/system theme, no-FOUC
- **ESLint + Prettier** (`prettier-plugin-tailwindcss`)

Server Components are the default; Client Components are used only where
interactivity requires them (nav, theme toggle, copy-to-clipboard, motion).

## Getting started

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. (optional) configure the production URL for SEO/sitemap/OG tags
cp .env.example .env.local   # then edit NEXT_PUBLIC_SITE_URL

# 3. Run the dev server
npm run dev                  # http://localhost:3000
```

### Scripts

| Script                 | What it does               |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start the dev server       |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | `tsc --noEmit` type check  |
| `npm run format`       | Format with Prettier       |
| `npm run format:check` | Verify formatting in CI    |

## Project structure

```
app/                    App Router routes
  layout.tsx            Root layout — fonts, theme provider, nav, footer, metadata
  template.tsx          Per-navigation page fade
  loading.tsx           Skeleton loading UI
  error.tsx / not-found.tsx
  page.tsx              Home (hero, work, stack, about, contact)
  work/                 /work index + /work/[slug] detail (generateStaticParams, dynamicParams=false)
  about/  contact/      Standalone pages
  sitemap.ts robots.ts manifest.ts icon.svg opengraph-image.tsx
components/             Co-located by feature
  layout/               navbar, footer, container, section, page-header, scroll-progress, back-to-top
  ui/                   shadcn-style primitives + reveal
  home/  about/  projects/  contact/  theme/  providers/
lib/
  site.ts               Site-wide identity + SEO + stats
  data/                 ← CONTENT LIVES HERE (projects, tech-stack, about, social, capabilities)
  hooks/                use-scroll-spy, use-mounted
  utils.ts              cn()
types/                  Shared interfaces (Project, TechStackItem, SocialLink, …)
public/projects/        Project covers (SVG placeholders + ColabHealth PNG)
```

## Editing content

All content is data-driven — you rarely touch JSX to update the site.

### Add or edit a project

Edit [`lib/data/projects.ts`](lib/data/projects.ts) and append an object that
satisfies the `Project` interface in [`types/project.ts`](types/project.ts):

```ts
{
  slug: "my-project",                 // → /work/my-project
  title: "My Project",
  tagline: "One-line hook",
  description: "1–2 sentence summary (cards + meta).",
  overview: "Longer narrative for the detail page.",
  highlights: ["Bullet one", "Bullet two"],
  role: "Solo developer",
  techStack: ["Next.js 15", "TypeScript", "Prisma"],
  status: "in-development",            // "production" | "in-development"
  liveUrl: "https://example.com",      // optional
  repoUrl: "https://github.com/...",   // optional
  imageUrl: "/projects/my-project.svg",
  accent: { from: "#2dd4bf", to: "#0ea5e9" },
  timeframe: "2026 — Present",
}
```

That's it — the `/work` grid, the home featured section, the static detail
page, and `sitemap.xml` all pick it up automatically. Drop a cover image at
the `imageUrl` path (the shipped covers are generated placeholders you can
replace with real screenshots).

### Other content

- **Social / email:** [`lib/data/social.ts`](lib/data/social.ts) — single source
  of truth for contact details.
- **Bio & career:** [`lib/data/about.ts`](lib/data/about.ts)
- **Tech stack:** [`lib/data/tech-stack.ts`](lib/data/tech-stack.ts)
- **Capabilities:** [`lib/data/capabilities.ts`](lib/data/capabilities.ts)
- **Name / role / SEO / stats:** [`lib/site.ts`](lib/site.ts)

> **Review the project copy.** The descriptions in `projects.ts` were drafted
> from a brief, not dictated — read and correct them before publishing (see the
> banner comment at the top of the file).

## Theme

The site ships with **light and dark themes** (and follows the OS preference).
All colors are tokenized in `app/globals.css` under `:root` (light) and
`.dark` (dark) — re-theming is a one-file edit. The accent palette is a
confident teal with AA-checked contrast in both themes.

## Accessibility & performance

- Skip-to-content link, semantic landmarks, `aria-current` nav, `aria-live`
  clipboard announcement, keyboard-friendly focus rings.
- `prefers-reduced-motion` respected by CSS **and** every Framer Motion
  component.
- No-JS safe: reveal animations are gated behind a `.js` class injected before
  paint, so crawlers and no-JS visitors always see fully-visible content.
- 100% static output — every route is prerendered; images use `next/image`
  with responsive `sizes`, priority hints, and a sandboxed SVG CSP.
- Route-level `loading.tsx` (skeletons) and `error.tsx` boundaries.

## Deploying to Vercel (recommended)

1. Push this repo to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), **Import** the repository.
3. Framework preset auto-detects **Next.js** — no build settings to change.
4. Add **`NEXT_PUBLIC_SITE_URL`** = your production URL so canonical links, the
   sitemap, and OG tags are correct.
5. Deploy. Add a custom domain under **Settings → Domains**.

`vercel.json` pins the framework and adds a few security headers.

## Deploying to Alibaba Cloud ECS (alternative)

Self-host with the NGINX + PM2 pattern used across Paul's other projects
(ColabHealth, etc.). This runs the Next.js Node server (`next start`), so SSR/
ISR and the dynamic OG image keep working.

```bash
git clone <your-repo-url> && cd paul-adrian-pascual-portfolio
npm ci
npm run build
npm i -g pm2
NEXT_PUBLIC_SITE_URL=https://yourdomain.com pm2 start "npm run start" --name portfolio
pm2 save && pm2 startup
```

Then put **NGINX** in front as a reverse proxy (and terminate TLS there, e.g.
with Certbot):

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass         http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header   Upgrade $http_upgrade;
    proxy_set_header   Connection 'upgrade';
    proxy_set_header   Host $host;
    proxy_set_header   X-Real-IP $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }
}
```

To deploy updates: `git pull && npm ci && npm run build && pm2 reload portfolio`.

## License

© Paul Adrian O. Pascual. All rights reserved.
