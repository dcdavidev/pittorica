# Picto

**Picto** is a modern UI component library built with React, TypeScript, and Vanilla Extract. It provides a painterly foundation for creating beautiful, accessible, and performant user interfaces.

Picto unifies multiple design philosophies into a single, flexible toolkit with a rich and powerful structure that remains intentionally lightweight and easy to integrate.

## Table of Contents

<!-- toc -->

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
  * [Layout Primitives](#layout-primitives)
  * [Typography](#typography)
  * [Interactive](#interactive)
  * [Visual](#visual)
- [Architecture](#architecture)
  * [Box Primitive](#box-primitive)
  * [Vanilla Extract](#vanilla-extract)
  * [Sprinkles (Atomic CSS)](#sprinkles-atomic-css)
- [Styling System](#styling-system)
- [License](#license)

<!-- tocstop -->

## Features

- **🎨 Modern Design** - Built following modern design principles and best practices
- **⚡ Performance** - Zero-runtime CSS-in-JS with Vanilla Extract
- **♿ Accessible** - Semantic HTML and ARIA best practices
- **🎯 Type-Safe** - Full TypeScript support with comprehensive types
- **🧩 Composable** - Flexible primitives that work together seamlessly
- **📦 Tree-Shakeable** - Import only what you need
- **🎭 Themeable** - Customizable design tokens and color palettes

## Installation

```bash
npm install @pittorica/picto
```

```bash
pnpm add @pittorica/picto
```

```bash
yarn add @pittorica/picto
```

```bash
bun add @pittorica/picto
```

## Quick Start

```tsx
import { Button, Stack, Heading, Text } from '@pittorica/picto';

function App() {
  return (
    <Stack gap="large" padding="xlarge">
      <Heading level={1} variant="display">
        Welcome to Picto
      </Heading>
      <Text variant="body" size="large">
        A modern UI component library for React
      </Text>
      <Button variant="filled" size="large">
        Get Started
      </Button>
    </Stack>
  );
}
```

## Components

Picto provides 17 carefully crafted components organized into functional categories:

### Layout Primitives

- **Box** - The foundational polymorphic component with atomic style props
- **Stack** - Flexbox-based vertical/horizontal stacking with configurable spacing
- **Grid** - CSS Grid layout with simplified API
- **Container** - Content width constraint with responsive padding
- **Inline** - Versatile inline text with semantic HTML support (bold, italic, highlight, etc.)

### Typography

- **Heading** - Semantic headings (h1-h6) with modern typography styles
- **Text** - Body text, labels, and descriptions with variant support
- **Paragraph** - Semantic paragraph component
- **Code** - Inline code with variants for `<code>`, `<kbd>`, `<samp>`, and `<var>`
- **Pre** - Preformatted text blocks for code snippets
- **Abbreviation** - Accessible abbreviations with hover tooltips
- **Quote** - Inline quotations with automatic quote marks
- **Blockquote** - Block-level quotations with attribution support

### Interactive

- **Button** - Versatile button with multiple variants (filled, tonal, outlined, elevated, text), sizes, and states

### Visual

- **Divider** - Separators with solid lines and decorative SVG patterns (wave, zigzag, dots, etc.)
- **Background** - Animated bubble backgrounds with interactive mode
- **LineBreak** - Semantic line breaks for text formatting

## Architecture

### Box Primitive

The `Box` component is the foundation of Picto. It's a polymorphic component that:

- Accepts any HTML element via the `as` prop
- Provides atomic style props via Sprinkles
- Separates style props from native DOM attributes at runtime
- Enables type-safe composition

```tsx
<Box as="section" padding="large" backgroundColor="brand">
  <Box as="h1" fontSize="displayLarge" color="white">
    Hello World
  </Box>
</Box>
```

### Vanilla Extract

Picto uses [Vanilla Extract](https://vanilla-extract.style/) for zero-runtime CSS-in-JS:

- Type-safe styles with TypeScript
- CSS is extracted at build time (no runtime overhead)
- Automatic critical CSS extraction
- Scoped styles with generated class names

### Sprinkles (Atomic CSS)

Sprinkles provides atomic CSS utilities with:

- Responsive design tokens
- Color system with tonal palettes (100-900)
- Spacing scale based on rem units
- Typography tokens with comprehensive type scale
- Flexbox and Grid utilities

## Styling System

Picto's styling system is built on design tokens:

**Colors**: Tonal palettes for brand, secondary, tertiary, info, success, warning, and error
**Spacing**: Consistent scale from `small` (4px) to `xxlarge` (64px)
**Typography**: Comprehensive type scale (display, headline, title, body, label)
**Border Radius**: Small, medium, and full (pill-shaped)

All tokens are customizable through the theme system.

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
