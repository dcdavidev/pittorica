# Pittorica

**Pittorica** is a comprehensive design system built with React, TypeScript, and modern web technologies. It provides a collection of reusable components, design tokens, and utilities for building consistent and beautiful user interfaces.

<p align="center">
  <img src="./images/gh-banner.png" alt="pittorica" />
</p>

<!-- toc -->

- [Picto](#picto)
  - [Features](#features)
  - [Components](#components)
  - [Technology Stack](#technology-stack)
- [License](#license)

<!-- tocstop -->

## Picto

[`picto`](./packages/picto/) is the core UI framework that serves as a painterly foundation for modern interfaces. It unifies multiple design philosophies into a single, flexible toolkit with a rich and powerful structure that remains intentionally lightweight and easy to integrate.

```bash
npm install @pittorica/picto
```

### Features

- **🎨 Modern Design** - Components following modern design principles and best practices
- **⚡ Zero-Runtime CSS** - Built with Vanilla Extract for optimal performance
- **♿ Accessibility First** - Semantic HTML and ARIA best practices
- **🎯 Fully Typed** - Comprehensive TypeScript support
- **🧩 Composable** - Flexible primitives built on the Box component
- **📦 Tree-Shakeable** - Import only what you need

### Components

Picto provides 17 carefully crafted components:

**Layout**: Box, Stack, Grid, Container, Inline
**Typography**: Heading, Text, Paragraph, Code, Pre, Abbreviation, Quote, Blockquote
**Interactive**: Button
**Visual**: Divider, Background, LineBreak

Each component is fully documented with JSDoc comments and includes TypeScript types for a great developer experience.

### Technology Stack

- **React** - Component library
- **TypeScript** - Type safety and developer experience
- **Vanilla Extract** - Zero-runtime CSS-in-JS
- **Sprinkles** - Atomic CSS utilities
- **Modern Design Tokens** - Comprehensive theming system

For detailed documentation, see the [Picto README](./packages/picto/README.md).

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
