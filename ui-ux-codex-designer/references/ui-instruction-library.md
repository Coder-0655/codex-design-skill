# UI Instruction Library

Search this file by section title or keywords to choose patterns and fixes quickly.

## Table of Contents

1. Layout and hierarchy
2. Spacing and density
3. Color and contrast
4. Typography
5. Forms and validation
6. Navigation
7. States (loading/empty/error)
8. Component selection by context
9. Reusable snippets

## 1) Layout and hierarchy

- Symptom: Page feels noisy and unfocused.
  - Fix: Establish one dominant region and reduce competing visual weights.
- Symptom: Important CTA is missed.
  - Fix: Place CTA near task completion point and increase local contrast.
- Symptom: Users scan but do not act.
  - Fix: Shorten headline and supporting copy, then reduce branching choices.

## 2) Spacing and density

- Use a spacing scale: 4, 8, 12, 16, 24, 32, 48.
- Keep inter-section gap >= intra-section gap.
- On mobile, reduce width complexity before reducing text size.

## 3) Color and contrast

- Reserve strongest color for primary actions and key status.
- Do not use more than one accent hue per surface cluster.
- Ensure text/background contrast remains readable in muted surfaces.

## 4) Typography

- Use 1 display size, 2 heading levels, 1 body size, 1 caption size.
- Keep line length around 45-80 characters for paragraphs.
- Increase line-height before increasing font-size to improve readability.

## 5) Forms and validation

- Keep labels visible; do not rely only on placeholders.
- Validate on blur for field-level feedback; validate on submit for summary.
- Place error text adjacent to the field and describe correction steps.

## 6) Navigation

- Use top nav for broad product areas.
- Use side nav for deep task spaces (settings/admin/dashboard).
- Persist location context with page title and breadcrumb when depth > 2.

## 7) States

- Loading: use skeletons that match final layout geometry.
- Empty: explain value + show first-step CTA.
- Error: describe what happened, what user can do now, and retry action.

## 8) Component Selection By Context

- Need to compare many entities:
  - Use `Table` + filters + sortable columns.
- Need quick scanning of key metrics:
  - Use `Card` grid with delta indicators.
- Need long multi-step input:
  - Use progressive sections with clear checkpoints.
- Need risky/destructive action:
  - Use explicit confirmation dialog with action-specific language.

## 9) Reusable Snippets

### CSS token base

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.12);
}
```

### Tailwind section shell

```tsx
export function SectionShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border bg-white p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
```

### Form field block

```tsx
<div className="space-y-2">
  <label className="text-sm font-medium" htmlFor="email">Email</label>
  <input id="email" className="w-full rounded-md border px-3 py-2" />
  <p className="text-xs text-slate-500">Use your work email address.</p>
</div>
```

