# Project Index

A concise structural overview of the codebase (Next.js App Router + TypeScript + TailwindCSS).

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript / TSX
- Styling: Tailwind CSS (custom CSS variables for theme tokens)
- Theming: Manual class-based dark mode + `ThemeProvider` wrapper + persisted preference script
- Icons: `lucide-react`
- Animation: `motion` (from `motion` package) for height transitions
- Utility: `clsx` + `tailwind-merge` via `cn()` helper

## Global Conventions

- Design tokens defined as CSS custom properties (HSL) in `app/globals.css` for light/dark.
- Semantic color keys used in Tailwind via `hsl(var(--token))` mapping (`background`, `foreground`, `border`, `accent`, etc.).
- Components are co-located in `components/`, each a client component where interaction/state needed (`"use client"`).
- Content-like data in `constants/` (projects, experience, tech stack, about copy, icon maps).
- Types in `types/` (e.g., `project.ts`).

## Directory Outline

```
app/
  layout.tsx      # Root HTML structure, metadata, theme script injection
  globals.css     # Tailwind base + design tokens + scrollbar + transitions
  page.tsx        # (Home) assembles sections from components
  blogs/page.tsx  # Blogs listing (placeholder or future content)
  projects/page.tsx # Standalone projects page (may reuse components)
components/
  hero.tsx              # Intro block (name, time, tags)
  about.tsx             # About section details
  experience.tsx        # Timeline style experience list
  projectsSection.tsx   # Expandable projects list (animation)
  projectMini.tsx       # Likely a compact project card/row
  featuredProject.tsx   # Highlighted project presentation
  techStack.tsx         # Clustered categories of technologies
  contact.tsx           # Contact methods with playful minimal style
  connect.tsx           # Social / outreach section
  dock.tsx              # Floating navigation dock + active indicator
  theme-provider.tsx    # Context/provider for color mode
  theme-toggle.tsx      # UI control for switching theme
constants/
  *.ts (projects, experience, tech stack, copy blocks, icon mapping)
lib/
  utils.ts        # `cn` utility
```

## Component Patterns (Observed)

- Sections: `<section id="..." className="flex flex-col gap-* pt-* border-t ...">` with a heading `<h2>` or `<h1>` followed by structured content.
- Timeline: `ol` with `before:` pseudo element vertical line; list items with positioned dot + content.
- Expandable panels: wrapper `<li>` with border + subtle bg; button toggles height animation of details container using `motion.animate`.
- Tag/Chip style: now standardized via `.chip` utility class.
- Monospace meta: standardized via `.meta` class.

## Styling Tokens Snapshot

From `globals.css` (light → dark override):

- Neutrals lean slightly cool (zinc-like); dark mode reduces contrast moderately.
- Radius: `--radius: 0.6rem` mapped to Tailwind `rounded-*` via extension.
- Transition baseline: all elements have color/background/border transitions (0.3s ease) for calm feel.

## Accessibility & Interaction

- Buttons controlling expansion use `aria-expanded`.
- Headings have `aria-labelledby` on sections linking heading IDs.
- Needs future audit for: focus outlines (relies on default? consider explicit), keyboard toggle order, reduced motion preference.

## Theming Approach

- Early inline script in `layout.tsx` sets `dark` class before paint to prevent flash.
- `ThemeProvider` presumably supplies context + toggle (implementation not indexed here but pattern consistent).

## Page Assembly

`app/page.tsx` likely imports hero, projects, experience, etc., stacking vertically with consistent spacing, while `layout.tsx` centers content via a constrained `<main>`.

## Opportunities / TODO Ideas

- Add explicit skip link for keyboard nav.
- Provide reduced-motion fallback (instant open) in expansion animations.
- Extract a `<Chip />` React component if logic (icons, variants) grows.
- Add automated lint rule / stylelint plugin to forbid raw hex except in token definition.
- Add unit test or story to snapshot the experience timeline & projects expansion.

---

Generated: (auto index) – keep updated when adding new sections.
