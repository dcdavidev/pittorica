# Pittorica Base CSS

## HTML & Body

```css
html {
  font-family: var(--picto-font-family-base);
  font-size: 16px;
  color: var(--picto-on-surface);
  background-color: var(--picto-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-size: var(--picto-body-large-size);
  line-height: var(--picto-body-large-line-height);
  font-weight: var(--picto-body-large-weight);
  letter-spacing: var(--picto-body-large-tracking);
}
```

## Headings

```css
h1 { font-size: var(--picto-display-large-size); ... }
h2 { font-size: var(--picto-display-medium-size); ... }
h3 { font-size: var(--picto-display-small-size); ... }
h4 { font-size: var(--picto-headline-large-size); ... }
h5 { font-size: var(--picto-headline-medium-size); ... }
h6 { font-size: var(--picto-headline-small-size); ... }
```

## Usage

- All base styles use Pittorica tokens for consistency and responsiveness.
- Extend with utility classes and components for your design system.
