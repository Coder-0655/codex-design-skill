---
name: ui-ux-codex-designer
description: Design and implement high-quality UI/UX for websites and apps with Codex. Use when requests involve interface design, visual polish, layout decisions, component selection, responsive behavior, accessibility, design systems, shadcn/ui composition, or framework-specific UI edits in HTML/CSS, React, Next.js, Tailwind, Vue, Svelte, or React Native.
---

# UI/UX Codex Designer

Design for clarity, hierarchy, and interaction quality before writing code.

## Run This Workflow

1. Define context in one pass:
   - Product type (marketing site, dashboard, mobile app, settings, checkout, auth, etc.)
   - Primary user action and success metric
   - Constraints (brand colors, framework, existing design system, delivery speed)
2. Choose a design direction:
   - Pick a visual intent (calm, editorial, technical, playful, premium, utilitarian)
   - Pick one color strategy and one typography strategy
   - Set spacing and radius scale up front
3. Build a minimal design system first:
   - Define tokens for color, spacing, radius, shadow, type scale, and motion duration
   - Apply tokens globally before per-component edits
4. Compose the page/screen by hierarchy:
   - Lead section or primary task surface
   - Secondary information blocks
   - Supporting actions
   - Empty/loading/error states
5. Implement with framework-specific patterns from `references/framework-guides.md`.
6. Validate quality before finalizing:
   - Responsive checks (mobile/tablet/desktop)
   - Keyboard and focus behavior
   - Contrast and readability
   - Consistent spacing rhythm
   - Visual balance and density

## Adapt By Stack

- Use `references/framework-guides.md` for exact implementation style by stack.
- Use `references/shadcn-blocks.md` when building with shadcn/ui.
- Use `references/theme-presets.md` to pick a fast, coherent color/type direction.

## Edit UI Correctly

1. Fix structure before cosmetics:
   - Correct layout and information hierarchy first.
   - Then tune color, typography, spacing, and shadows.
2. Change by tokens, not raw literals:
   - Replace one-off values with shared variables/classes.
3. Improve one axis at a time:
   - Layout -> type -> color -> spacing -> interaction -> motion.
4. Preserve existing system constraints:
   - If project has an established design system, extend it instead of replacing it.

## Use The UI Instruction Library

Consult `references/ui-instruction-library.md` as a searchable library of:
- Component patterns
- UI/UX repair playbooks
- Reusable code snippets
- Situation-based recommendations

When task scope is broad, load only the sections needed for the current screen.

## Output Standard

For any UI task, produce:
1. A short design intent statement.
2. Concrete implementation changes (files/components/styles).
3. Accessibility and responsive checks performed.
4. Any follow-up refinements that would further improve quality.

