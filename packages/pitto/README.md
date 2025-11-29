# pittorica/pitto

A modern, accessible React component library for building beautiful UIs, featuring composable primitives, utility-first styling, and theming powered by [vanilla-extract](https://vanilla-extract.style/).

---

<!-- toc -->

- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Theming & Styling](#theming--styling)
- [Storybook](#storybook)
- [License](#license)

<!-- tocstop -->

## Features

- **Rich Component Set:**
  - Primitives: Box, Stack, Container, Grid, Surface, Sheet
  - Typography: Heading, Text, Paragraph, Blockquote, Codeblock, Pre, Quote, Abbreviation, Inline, Linebreak, Divider
  - Inputs: Button, IconButton, Checkbox, Switch, Input, Textarea
  - Utilities: Background (with variants), Divider, Icon set
- **TypeScript-first:** Full type safety and autocompletion
- **Theming:** Customizable via vanilla-extract theme contracts
- **Composable & Accessible:** Components are unstyled by default, accessible, and easy to extend
- **Storybook:** All components are documented with interactive stories

## Getting Started

Install via your package manager:

```sh
pnpm add @pittorica/pitto
# or
yarn add @pittorica/pitto
# or
npm install @pittorica/pitto
```

Import and use components:

```tsx
import { Button, Checkbox, Stack } from '@pittorica/pitto';

export function Example() {
  return (
    <Stack gap="medium">
      <Button>Click me</Button>
      <Checkbox label="Accept terms" />
    </Stack>
  );
}
```

## Folder Structure

- `src/components/` – All React components, organized by type
- `src/icons/` – SVG icon components
- `src/styles/` – Theme contracts, global styles, palette, and utility CSS

## Theming & Styling

- Built with [vanilla-extract](https://vanilla-extract.style/) for type-safe, scalable theming
- Customize tokens in `src/styles/contract.css.ts` and `src/styles/contracts/`
- Utility classes via `src/styles/sprinkles.css.ts`

## Storybook

Interactive documentation for all components is available via Storybook. To run locally:

```sh
pnpm exec nx storybook @pittorica/pitto
```

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For full details, see the [LICENSE](LICENSE) file.
