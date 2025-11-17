# @pittorica/react

A collection of reusable React components for building modern web interfaces. Built with TypeScript, designed for flexibility and performance.

## Installation

```bash
npm install pittorica @pittorica/react
```

or

```bash
yarn add pittorica @pittorica/react
```

## Components

### Layout Components

- **Box** - A flexible container component with styling props
- **Container** - Centers content with responsive max-widths
- **Grid** & **GridItem** - CSS Grid layout system
- **Stack** - Vertical or horizontal stacking with spacing

### UI Components

- **Button** - Versatile button component with variants, sizes, and states
- **IconButton** - Button optimized for icons with loading states
- **Typography** - Text component with theme-aware styling

### Background Components

- **BgBubbles** - Animated background bubbles with customizable colors and speed

## Usage

```tsx
import { Button, BgBubbles, Container } from '@pittorica/react';

function App() {
  return (
    <BgBubbles>
      <Container>
        <Button color="primary">Click me</Button>
      </Container>
    </BgBubbles>
  );
}
```

## Storybook

View interactive examples and documentation at [Storybook](https://pittorica.dev/storybook) (coming soon).

## Development

This package is part of the Pittorica monorepo. To contribute:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run Storybook: `pnpm dlx nx react:storybook`
4. Build: `pnpm build`

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
