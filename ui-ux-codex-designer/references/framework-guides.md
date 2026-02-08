# Framework Guides

Use this file when implementing or editing UI/UX in a specific stack.

## HTML/CSS/JS

- Create token variables in `:root` before component rules.
- Use semantic landmarks (`header`, `main`, `nav`, `section`, `footer`).
- Use utility classes only if a utility convention already exists.
- Keep layout primitives explicit:
  - Stack (vertical flow)
  - Cluster (horizontal wraps)
  - Grid (2D layout)

## React + Tailwind

- Centralize theme values in Tailwind config or CSS variables.
- Split large screens into small composable sections.
- Prefer composition over deeply configurable mega-components.
- Keep class order readable: layout -> spacing -> typography -> color -> effects.

## Next.js (App Router)

- Keep presentational components server-compatible when possible.
- Add client components only when interaction/state is needed.
- Co-locate section components under route directories for maintainability.
- Use responsive image and typography strategies for LCP-critical hero sections.

## Vue

- Keep styles scoped when building isolated views; use global tokens for system values.
- Use composables for interaction logic that repeats across components.
- Keep template structure shallow to preserve readability.

## Svelte

- Use component props for variants and keep style contracts explicit.
- Extract repeated layout primitives into shared components.
- Keep transitions meaningful and restrained.

## React Native

- Design with density awareness: touch targets >= 44x44 points.
- Use scale-aware spacing and typography tokens.
- Preserve platform conventions for navigation and form controls.
- Always test keyboard overlays and scroll behavior on form-heavy screens.

