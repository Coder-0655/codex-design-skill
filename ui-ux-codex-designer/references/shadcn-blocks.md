# shadcn/ui Blocks Guide

Use this file for fast, high-quality composition with shadcn/ui.

## Core Assembly Pattern

1. Build screen skeleton with `Card`, `Tabs`, `Separator`, `Sheet`/`Dialog`.
2. Add interaction primitives:
   - Forms: `Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`
   - Actions: `Button`, `DropdownMenu`, `ContextMenu`
   - Data: `Table`, `Badge`, `Progress`, `Skeleton`
3. Tune density and rhythm:
   - Container padding: 16 mobile, 24 tablet, 32 desktop
   - Vertical block gaps: 16-24
4. Add state coverage:
   - Loading with `Skeleton`
   - Empty with helpful CTA
   - Error with corrective action

## Recommended Block Combos

## Dashboard Home

- `Card` metrics row
- `Tabs` for timeframe filters
- `Table` or chart region
- `Sheet` for quick item details

## Settings Page

- Left nav list + right content panel
- Use `Card` sections with clear titles and descriptions
- Save pattern: sticky footer with secondary + primary actions

## Checkout

- 2-column desktop, single-column mobile
- Order summary in `Card`
- Step indicators with `Progress` or segmented tabs

## Auth Screens

- Centered constrained layout
- Clear heading + brief reassurance copy
- Social options separated from email form by `Separator`

## Quality Rules

- Keep one primary CTA per viewport where possible.
- Avoid stacking more than three visual emphasis styles in one region.
- Use muted backgrounds sparingly to preserve contrast hierarchy.

