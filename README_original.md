# Build me a complete portfolio website (Next.js + Sanity CMS)

## Goal

Create a production‑ready personal site for **Gabriel Castro** (Frontend Engineer) with:

- A beautiful, modern UI (dark mode by default) worthy of a frontend engineer.
- A blog powered by a **free CMS** (use **Sanity** free tier) so I can publish posts and edit all portfolio info without touching code.
- A projects/portfolio section (each project has title, summary, tech, images, links including optional Git URL).
- An experience section describing previous jobs.
- A home page focused on “About me”.
- Everything TypeScript, accessible, fast, and deployable to Vercel.

## Tech & tooling

- **Framework:** Next.js (App Router), TypeScript, Edge‑ready routes where possible
- **Styling/UI:** Tailwind CSS, **shadcn/ui**, Framer Motion (micro‑interactions), Radix UI primitives
- **CMS:** **Sanity v3** (hosted; free tier). Create `/sanity` studio mounted at `/studio` (protected with a simple token check in prod)
- **Content types:** `post`, `project`, `job`, `siteSettings`
- **Images:** Next/Image with Sanity image pipeline
- **MDX** for blog rendering (code blocks with Shiki; copy button; autolinked headings)
- **SEO:** next‑seo config, dynamic OG images per page (Vercel OG or Satori)
- **Analytics:** Vercel Analytics; add a toggleable PostHog hook (env‑based)
- **Testing:** Vitest + @testing-library/react for unit; Playwright for basic E2E (home, blog, post, projects)
- **CI:** GitHub Actions (lint, typecheck, test, build)
- **Quality:** ESLint (next/core-web-vitals), Prettier, Husky + lint‑staged

## Information Architecture & Routes

- `/` (Home) – “About me”, featured projects, latest posts, CTA to contact.
- `/projects` – filterable gallery; cards open to `/projects/[slug]`.
- `/projects/[slug]` – full case study, carousel/gallery, tech stack, roles, links (live, Git optional).
- `/blog` – list with search + tag filters.
- `/blog/[slug]` – MDX post page, TOC on desktop, reading time, prev/next.
- `/experience` – timeline of jobs.
- `/resume` – link to downloadable PDF + inline preview.
- `/contact` – simple form (validations, no backend; send via mailto and show email).
- `/studio` – Sanity Studio (admin).
- `sitemap.xml`, `robots.txt`, RSS feed for blog.

## Design requirements (make it stunning)

- Dark mode default, light mode available (system preference).
- Clean, airy layout with **grid‑based cards**, large type scale, generous whitespace.
- Subtle **glass/blur** and **gradient accents** (no heavy neon).
- **Motion:** smooth page transitions (Framer Motion), hover lifts, fade‑in images, staggered lists. Keep it tasteful and accessible (prefers‑reduced‑motion).
- Typography: Inter (text) + a refined display (e.g., Cal Sans/Geist/Clash Display).
- Reusable sections: Hero, SectionHeader, Card, Tag, Prose components.

## Sanity schema definitions

Create these document types:

1. `siteSettings`

- `name`, `title`, `bio`, `location`, `email`, `phone`, `avatar`, `socials` (github, linkedin)

2. `project`

- `title` (string, required)
- `slug` (required, unique)
- `tagline` (string)
- `summary` (text)
- `tech` (array<string>)
- `year` (number or date range fields: `start`, `end`)
- `images` (array of images with captions)
- `links` (object: `liveUrl?`, `gitUrl?`)
- `featured` (boolean)

3. `job`

- `company` (string)
- `role` (string)
- `startDate` (date)
- `endDate` (date or null for present)
- `location` (string)
- `bullets` (array<string>)
- `tech` (array<string>)
- `logo` (image)

4. `post`

- `title` (string)
- `slug` (required)
- `excerpt` (text)
- `coverImage` (image)
- `tags` (array<string>)
- `publishedAt` (datetime)
- `body` (Portable Text/MDX source)

Add GROQ queries and typed fetchers in `/lib/sanity/`. Include ISR / cache strategies + **webhook revalidation** for `post`, `project`, and `job`.

## Seed content (use this initial data)

**Site settings**

- name: Gabriel Castro
- title: Frontend Engineer
- bio: Short paragraph about focusing on React/TypeScript, performance, clean UX, and shipping high‑quality features.
- location: Brasília, Brazil
- email: [gabriel1997.castro@gmail.com](mailto:gabriel1997.castro@gmail.com)
- phone: +55 (61) 98215‑1307
- socials: github.com/gabriel1997castro, linkedin.com/in/gabriel-castro-a4b776111/

**Jobs** (three bullets each)

- ShowSeeker — React Frontend Developer — Mar 2023 – Present
  Bullets: new features for ads/pilot product; React + TypeScript; E2E with Cypress; responsive UI.
- Autocomplete — React Frontend Developer — Jun 2022 – Feb 2023
  Bullets: insurance quotes flow; React + TS + Storybook; Jest/RTL + Cypress; intl team comms.
- NTT DATA | everis — React & Java Full‑Stack — Jul 2021 – Jul 2022
  Bullets: lightweight Preact chatbot; Spring APIs; Python automations; Docker/K8s.
- Core Consulting — React & React Native — Oct 2019 – Jul 2021
  Bullets: healthcare hub (FHIR); shared code for web/mobile; dynamic clinical record renderer.

**Projects** (examples; include placeholders for images)

- “ShowSeeker Pilot” — Ads management features; React, TypeScript, AG Grid, Cypress. `gitUrl` optional, `liveUrl` placeholder.
- “Insurance Fast Quote” — guided quote UX; React, TS, Storybook, Jest/RTL, Cypress.
- “Consultant Chatbot” — Preact + Spring services; suggestions, PDF renderer, data tooling.
- “Healthcare Hub (FHIR)” — patient records & vaccination schedules; React/React Native.

**Blog**
Seed with 2–3 example posts (engineering lessons learned, testing strategy, React performance notes).

## Components & implementation details

- Shared `PageShell` with animated route transitions.
- `ProjectCard` with progressive image loading, tech tags, Git/live buttons.
- `Timeline` for jobs with logos and dates.
- `MdxProse` for blog with custom components (Callout, ImageWithCaption, CodeBlock).
- `TagFilter` and client‑side search for `/blog` and `/projects`.
- `ContactCTA` (email + mailto link; no backend storage).
- OG image generator at `/api/og` (title, tags, cover image or gradient fallback).

## Performance & accessibility

- Image optimization, font preload, proper `alt`/`aria`, focus states, color contrast.
- Lighthouse target: 95+ across the board on key pages.
- Use `prefers-reduced-motion` and semantic landmarks.

## Content editing UX

- In Studio, add desk structure groups: “Content” (Posts, Projects, Jobs) and “Site” (Settings).
- Add custom preview panes for posts/projects.
- Add “Featured” toggle to surface items on Home.
- Add Studio tips for recommended image sizes.

## Revalidation & webhooks

- Add `/api/revalidate` route with secret token (env).
- Configure Sanity webhook for `post`, `project`, `job`, `siteSettings` to revalidate affected routes.

## RSS & SEO

- Generate RSS at `/rss.xml` from published posts.
- `robots.txt`, `sitemap.xml`, canonical tags, OpenGraph/Twitter cards.

## Docs

Add a README with:

- `pnpm i` (or npm/yarn), `pnpm dev`
- How to set `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_READ_TOKEN`, `REVALIDATE_SECRET`
- How to deploy to **Vercel** (include required env vars)
- How to invite new editors to Sanity

## Tests (at least)

- Unit: `ProjectCard`, `Timeline`, `MdxProse` code blocks, `TagFilter`
- E2E: home renders featured items; open a project; blog filter by tag; post page code block copy; experience timeline visible.

---

**Deliverables**

- Full repo with code, Studio schemas, seed script, env sample, tests, and CI.
- Deployed preview URL on Vercel.
- A few tasteful screenshots in the README.
