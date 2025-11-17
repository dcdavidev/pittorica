<p align="center">
  <img src="./images/gh-banner.png" alt="pittorica" />
</p>

<h1 align="center">Pittorica</h1>

<p align="center">
  A modern design system and component library for React applications.
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#packages">Packages</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## About

Pittorica is a comprehensive design system built with React, TypeScript, and modern web technologies. It provides a collection of reusable components, design tokens, and utilities for building consistent and beautiful user interfaces.

## Packages

### Core Packages

- [**@pittorica/react**](./packages/react) - React components library
- [**@pittorica/core**](./packages/pittorica) - Core design tokens and utilities

### Components

The React package includes:

- **Layout**: Box, Container, Grid, Stack
- **UI**: Button, IconButton, Typography
- **Specialized**: BgBubbles (animated backgrounds)

## Installation

```bash
# Install the React components
npm install @pittorica/react

# Or with yarn
yarn add @pittorica/react
```

## Quick Start

```tsx
import { Button, BgBubbles, Container } from '@pittorica/react';

function App() {
  return (
    <BgBubbles colors={['#ff6b9d', '#4ecdc4', '#45b7d1']}>
      <Container>
        <Button>Hello Pittorica!</Button>
      </Container>
    </BgBubbles>
  );
}
```

## Documentation

- [Storybook](https://pittorica.dev/storybook) - Interactive component documentation
- [API Reference](./packages/react/README.md) - Detailed component APIs

## Development

This is a monorepo managed with [pnpm](https://pnpm.io/) and [Nx](https://nx.dev/).

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/dcdavidev/pittorica.git
cd pittorica

# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Build all packages
pnpm build
```

### Project Structure

```
pittorica/
├── packages/
│   ├── react/          # React components
│   └── pittorica/      # Core styles and tokens
├── images/             # Assets
└── tools/              # Build tools
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
