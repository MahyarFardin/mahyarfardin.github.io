# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio/CV site (Mahyar Fardinfar — AI engineer/researcher) built with Next.js App Router and statically exported to GitHub Pages. All content (experience, projects, publications) is hardcoded as inline data arrays in the page components — there is no CMS, database, or markdown content pipeline, despite `gray-matter`, `next-mdx-remote`, and the `rehype-*`/`remark-gfm` packages being present in `package.json`. Those are unused leftovers; don't assume an MDX/blog system exists.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # next build -> static export to ./out (output: "export" in next.config.ts)
npm run start    # serve production build (not used for deploy; see below)
npm run lint     # next lint (eslint.config.mjs: next/core-web-vitals + next/typescript)
npm run deploy   # predeploy runs `next build`, then publishes ./out via gh-pages
```

There is no test suite/framework configured in this repo.

## Deployment

Two independent, redundant deploy paths exist — be aware of both when changing build/export config:
1. **GitHub Actions** (`.github/workflows/nextjs.yml`): builds with `next build` and deploys `./out` to GitHub Pages on every push to `main`.
2. **`npm run deploy`**: builds locally and pushes `./out` to the `gh-pages` branch via the `gh-pages` npm package.

Because the site is statically exported (`output: "export"`, `images.unoptimized: true`), only static-compatible features work: no server components with runtime data fetching, no `next/image` optimization, and Route Handlers only work if they export a static `GET` with no dynamic APIs. `src/app/api/health/router.ts` is dead code — Next.js route handlers must be named `route.ts`, not `router.ts`, so this file is never picked up as an endpoint.

## Architecture

- **App Router** under `src/app`, one folder per top-level nav page (`Experience`, `Projects`, `Publications`), each with its own `page.tsx`. Root `page.tsx` is the home/"Brief" page.
- **`src/app/layout.tsx`** is the single shared shell: wraps everything in `next-themes` `ThemeProvider`, and renders a responsive two-pane layout — a `Sidebar` (desktop, `md:` and up) and a `MobileSidebar` (mobile header + slide-out drawer), both built from the same `Sidebar` component and `NavItem` component in `src/components`.
- **Navigation** (`NavItem.tsx`) distinguishes internal links (Next `Link`, active-state styling via `usePathname`) from external links (plain `<a target="_blank">`, e.g. Google Scholar/GitHub/LinkedIn/Medium) purely by whether `href` starts with `http`.
- **Page content is data-driven but inline**: each page (`Projects/page.tsx`, `Publications/page.tsx`, `Experience/experience.js`) defines a local array of objects (projects, publications, timeline entries) and maps over it to render. To add/edit a project, publication, or job entry, edit the array in that file directly — there's no separate data layer.
- **Experience page** renders `Experience/experience.js` data (title/subtitle/bullets/image per entry) as a manually built vertical timeline (`border-l-2` + dot), matching the same timeline pattern used on `Projects`/`Publications`. No timeline library is used.
- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- Styling is Tailwind CSS v4 (class-based dark mode, configured in `tailwind.config.ts`) plus `src/styles/prose.css` for prose-style content and `src/app/globals.css` for globals. Note several components (e.g. `Sidebar.tsx`) use hardcoded hex colors via inline `style` rather than Tailwind dark-mode classes, so dark mode is not fully wired through the whole UI.
