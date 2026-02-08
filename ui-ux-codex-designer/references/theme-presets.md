# Theme Presets

Use these presets to avoid random styling decisions. Pick one direction per screen/flow.

## 1) Clean SaaS

- Intent: trusted, clear, efficient
- Base: neutral background, blue primary, restrained accent
- Radius: medium (10-12px)
- Shadow: soft, low blur

```css
:root {
  --bg: #f7f8fa;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --primary: #2563eb;
  --primary-contrast: #ffffff;
  --border: #e2e8f0;
  --radius: 12px;
}
```

## 2) Editorial Product

- Intent: premium, content-forward, typographic
- Base: warm paper tones, deep ink text, muted accent
- Radius: small (6-8px)
- Shadow: minimal

```css
:root {
  --bg: #f6f2eb;
  --surface: #fffdf9;
  --text: #1f1a17;
  --muted: #6b625d;
  --primary: #8c4a2f;
  --primary-contrast: #ffffff;
  --border: #e8ddd2;
  --radius: 8px;
}
```

## 3) Technical Dashboard

- Intent: dense but readable data UI
- Base: cool neutrals, stronger separators, vivid status colors
- Radius: small-medium
- Shadow: subtle; rely more on borders

```css
:root {
  --bg: #f3f6fb;
  --surface: #ffffff;
  --text: #0b1220;
  --muted: #526077;
  --primary: #0f766e;
  --primary-contrast: #ffffff;
  --border: #d6deea;
  --radius: 10px;
}
```

