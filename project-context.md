# Portfolio Context for LLM

## Project Overview

Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, following neobrutalism design principles. The site features both light and dark modes, with strong emphasis on accessibility and performance.

## Tech Stack

-   Next.js 14
-   TypeScript
-   Tailwind CSS
-   React Icons
-   Lucide Icons

## Design System

-   Neobrutalism style
-   High contrast colors
-   Bold borders
-   Strong shadows
-   Playful interactions
-   Accessible components

## Component Structure

Main components:

1. Hero - Introduction and main heading
2. About - Personal details and background
3. TechStack - Skills and technologies
4. Projects - Featured work and case studies
5. Contact - Contact information
6. Connect - Call to action for collaboration

## Key Features

1. Dark/Light mode support
2. Neobrutalism design
3. Responsive layout
4. Accessible components
5. Performance optimized
6. SEO friendly

## Style Patterns

```tsx
// Common component structure
<section
  id="section-id"
  className="flex flex-col gap-4"
  aria-label="Section Name"
>
  {/* Content */}
</section>

// Common button style
<button className="neo-button dark:neo-button-dark neo-button-light">
  {/* Content */}
</button>

// Common card style
<div className="neo-card dark:neo-card-dark neo-card-light">
  {/* Content */}
</div>
```

## Animation Patterns

-   Hover transitions
-   Shadow animations
-   Scale transforms
-   Rotation effects
-   Smooth page transitions

## Color System

Uses CSS variables and Tailwind classes for:

-   Background colors
-   Text colors
-   Border colors
-   Shadow colors
-   Accent colors

## Accessibility Features

-   Semantic HTML
-   ARIA labels
-   Keyboard navigation
-   Color contrast
-   Screen reader support

## Common Utils

-   CSS utilities in globals.css
-   Tailwind configurations
-   Component patterns
-   Animation keyframes

Use this context to maintain consistency when:

1. Creating new components
2. Modifying existing components
3. Adding new features
4. Implementing animations
5. Ensuring accessibility
6. Maintaining design system
