# Pittorica Design Tokens

## Color System

- Semantic roles: `primary`, `secondary`, `tertiary`, `error`, `background`, `surface`, `outline`, etc.
- Dynamic palettes generated with `color-mix()` from base colors (Coolors palette).
- Example:
  ```css
  --picto-primary-base: #08a4bd;
  --picto-primary-10: color-mix(in srgb, var(--picto-primary-base), white 90%);
  --picto-primary-100: var(--picto-primary-base);
  ```

## Typography System (Responsive)

- All font sizes use `rem` and `clamp()` for responsive scaling.
- Structure inspired by Material Design 3: display, headline, title, body, label.
- Example:
  ```css
  --picto-display-large-size: clamp(2.5rem, 6vw, 3.563rem); /* 40px-57px */
  --picto-body-large-size: clamp(0.875rem, 1.5vw, 1rem); /* 14px-16px */
  ```

## Spacing System (Responsive)

- 4px base scale, all values in `rem`.
- Semantic and component-specific spacing tokens.
- Example:
  ```css
  --picto-space-1: 0.25rem; /* 4px */
  --picto-space-md: var(--picto-space-4);
  ```

## Radius System (Responsive)

- Border radius and shape system in `rem`.
- Example:
  ```css
  --picto-radius-md: 0.75rem; /* 12px */
  --picto-shape-corner-large: 1rem; /* 16px */
  ```

## Usage

- Import `index.css` to get all tokens and base rules.
- Use CSS variables for utility classes, components, themes, and overrides.
- Designed for SSR, responsive, and easy theming.
