# Pittorica Utility Classes

Utility classes inspired by TailwindCSS, using Pittorica design tokens.

## Spacing

- `.picto-p-1`, `.picto-m-2`, `.picto-pt-1`, `.picto-mb-1`, etc.
- Use for padding, margin, gap.
- All values are responsive (rem-based).

## Layout

- `.picto-flex`, `.picto-flex-row`, `.picto-flex-col`, `.picto-items-center`, `.picto-justify-between`, etc.
- `.picto-grid`, `.picto-grid-cols-2`, `.picto-grid-cols-3`, etc.
- Use for flexbox and grid layouts.

## Colors

- `.picto-bg-primary`, `.picto-bg-surface`, `.picto-text-primary`, `.picto-text-error`, etc.
- Use for background and text color, mapped to design tokens.

## Border Radius

- `.picto-radius-xs`, `.picto-radius-md`, `.picto-radius-full`, etc.
- Use for rounded corners, mapped to radius tokens.

## Typography

- `.picto-font-display-large`, `.picto-font-body-large`, `.picto-font-label-large`, etc.
- Use for semantic typography, mapped to responsive tokens.

## Usage Example

```html
<div class="picto-bg-primary picto-p-4 picto-radius-md picto-font-body-large">
  Example content
</div>
```

## How to Import

- All utility classes are included via `@import './utilities.css';` in `index.css`.
- You can also import individual modules for tree-shaking.

See also:

- [Design Tokens](./tokens.md)
- [Base CSS](./base-css.md)
