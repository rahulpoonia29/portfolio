# Brand & Interface Guidelines

North Star: **"Compact, purposeful surfaces with quiet character."**

This document encodes the brand & interaction philosophy so future additions feel native.

## 1. Brand Essence

- Feel: Calm, confident, contemporary.
- Vibe: Quietly sharp builder – clarity > flash.
- Personality: Understated craft with occasional dry humor. No hype.

## 2. Color System

- Base: Neutral grayscale (soft off‑white → charcoal). Slightly cool neutrality.
- Accents: Sparse cool green + subtle cyan/blue gradient hints (micro highlights only: active indicator, small inline accent, progress, selection).
- Dark Mode: Slightly softened contrast (avoid pure black #000 or pure white #fff). Maintain legibility while reducing glare.
- Elevation: Use a faint border (`--border`) + subtle tone shift (bg token variation). Avoid heavy drop shadows.
- Avoid: Full-bleed saturated accent backgrounds; large gradient floods.

## 3. Layout & Spacing

- Rhythm: Compact vertical stacks; tight heading → content coupling.
- Section shape: `section > heading + (optional micro intro) + core block`.
- Prefer "strip" / list / matrix over big ornamental cards.
- Breathing: Enough space for scan speed, never sprawling emptiness.
- Mobile-first linear flow; progressive enhancement on wide screens.

## 4. Typography

Scale & tokens (Tailwind classes):

| Role             | Class baseline                                      | Notes                                       |
| ---------------- | --------------------------------------------------- | ------------------------------------------- |
| Page title (h1)  | `text-xl md:text-2xl font-semibold`                 | Calm, no jumbo hero                         |
| Section heading  | `text-sm md:text-base font-semibold tracking-tight` | Compact label feel                          |
| Body primary     | `text-sm md:text-[15px] leading-relaxed`            | Use `text-muted-foreground` for softer tone |
| Meta / timestamp | `.meta` (`font-mono text-xs`)                       | Never larger than body                      |
| Chips / tags     | `.chip` (`text-xs font-medium`)                     | Reuse everywhere                            |

Hierarchy: weight + spacing, not aggressive size jumps. Emphasis via slight weight increase or structural placement.

Monospace: Only for meta / timing / ids. Do not use for full sentences.

Copy tone: Plain, active voice, builder-centric.

## 5. Voice & Tone

- Pragmatic, grounded, slightly witty.
- No hype terms ("revolutionary", "world-class").
- Favor verbs: "Ship", "Build", "Craft", "Optimize".
- Sparkle words (rare, contextual): "lean", "sharp", "quiet", "pragmatic", "focused".

## 6. Interaction & Motion

- Motion: Fast, low amplitude. Purpose > decoration.
- Expand/collapse: Height transitions ≤ 300ms ease-out.
- Hover: Gentle tint/elevation, slight icon/emoji tilt acceptable.
- Reduced motion: Provide `@media (prefers-reduced-motion: reduce)` fallbacks (disable height animation, swap to instant open/close).
- Feedback: Short micro toasts or inline confirmations (e.g., "Copied ✨"). Avoid verbose messages.

## 7. Components (Existing Patterns)

- Navigation Dock: Floating, compact, precise active indicator. Utility tool, not billboard.
- Projects List: Collapsed rows (name + tags). One-level expansion with details (blurb, stack, links). No nested accordions.
- Tech Stack: Matrix / clustered groups with slim category label leading concise chips.
- Experience Timeline: Minimal line + tiny nodes; information density optimized for scanning.
- Contact: Emoji seasoning + short value + optional aside; actions are lightweight pills.
- Tags/Chips: Rounded subtle neutral background, small font, medium weight; consistent vertical rhythm.

## 8. Playfulness Guardrails

- Allowed: Micro emoji tilt, subtle gradient hint line, cheeky label ("code cave").
- Not allowed: Random rotation bursts, rainbow effects, confetti animations, loud color floods.
- Humor must be removable without breaking structure.

## 9. Accessibility Principles

- Keyboard operable: All interactive elements reachable, focus visible.
- Don’t rely solely on color: Combine color + shape/weight for active/selected states.
- Touch targets: Minimum 40px tap area when possible (padding or block-level buttons).
- Provide logical heading order; avoid skipping levels.
- Theming script prevents flash but confirm semantic contrast ratios (target WCAG AA for body text).

## 10. Structural Pattern Recipe

When adding a new section (e.g., "Speaking", "Advisory"):

1. Pick an `id` (kebab-case) + heading `<h2>`.
2. Optional one-line context (12–13px neutral tone).
3. Core content in dense list/matrix/compact expandable pattern.
4. Tags/metadata styled like existing `projects` or `tech stack` chips.
5. Provide default summary state; optional single expansion layer.

## 11. Expansion & Information Density

- Default: Highest-value summary always visible.
- Details: One user action away (click, expand). Avoid deeper nesting.
- No cascaded accordions; flatten where possible.

## 12. CSS / Token Guidelines

- Colors pulled via `hsl(var(--token))`; add new tokens sparingly.
- Prefer composition through utility classes + extracted small primitives when duplication > 3.
- Introduce a reusable chip class if more surfaces added.

### Suggested Utility Groups

```css
/* Example (optional future extraction) */
.chip {
	@apply px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-medium text-zinc-600 dark:text-zinc-300;
}
.meta {
	@apply font-mono text-[11px] text-zinc-500 dark:text-zinc-500;
}
.section {
	@apply flex flex-col gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20;
}
```

## 13. Future-Proofing New Sections

Evaluate a proposed addition by asking:

- Can its core value be summarized in one tight row/band?
- Does it reuse existing chip/meta patterns?
- Is there a single, clear expansion path?
- Are accent elements justified (semantic) rather than decorative?

## 14. Copy Micro-Rules

- Active voice.
- Concision first; remove filler adjectives.
- One accent word max per sentence (if any).
- Avoid trailing exclamation unless playful micro-copy context.

## 15. DO / DON'T Snapshot

| Do                             | Don't                                  |
| ------------------------------ | -------------------------------------- |
| Compress, align, cluster       | Over-card everything                   |
| Use faint borders + tone shift | Heavy shadows / frosted glass gimmicks |
| Provide one expansion layer    | Nest expansions                        |
| Subtle accent sprinkles        | Gradient floods                        |
| Show capability via structure  | Claim hype adjectives                  |

## 16. Checklist for Reviews

Before merging a new UI element:

- [ ] Spacing matches existing vertical rhythm
- [ ] Color tokens reused (no arbitrary hex unless tokenized)
- [ ] Accessible (keyboard + focus + contrast)
- [ ] Motion optional / reduced-motion safe
- [ ] Section structure adhered
- [ ] Copy aligns with tone

---

Maintainer note: Keep this file updated when introducing new primitives or patterns.
