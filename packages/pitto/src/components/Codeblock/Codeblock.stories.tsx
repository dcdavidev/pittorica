import { themes } from 'prism-react-renderer';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Codeblock, type CodeBlockProps } from './Codeblock.js';

const THEME_NAMES = Object.keys(themes) as (keyof typeof themes)[];

const meta: Meta<CodeBlockProps> = {
  title: 'Content/Codeblock',
  component: Codeblock,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    language: {
      control: 'text',
      description: 'The language for syntax highlighting (e.g., "jsx", "bash", "typescript"). Defaults to "plaintext".',
      table: { defaultValue: { summary: 'plaintext' } },
    },
    theme: {
      control: 'select',
      options: THEME_NAMES,
      description: 'The Prism theme to use for highlighting.',
      table: { defaultValue: { summary: 'github' } },
    },
    children: {
      control: 'text',
      description: 'The code content as a string.',
    },
  },
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const TypeScriptExample: Story = {
  args: {
    language: 'typescript',
    theme: 'github',
    children: `import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <button onClick={increment}>
      Clicked {count} times
    </button>
  );
};`,
  },
};

export const JsxDarkTheme: Story = {
  args: {
    language: 'jsx',
    theme: 'dracula',
    children: `<CodeBlock language="jsx" theme="dracula">
  <Header>
    <Logo src="/logo.svg" alt="App Logo" />
  </Header>
  <main>
    <h1>Hello World!</h1>
  </main>
</CodeBlock>`,
  },
};

export const BashCommands: Story = {
  args: {
    language: 'bash',
    theme: 'nightOwl',
    children: `npm install

npm run dev

npm run build`,
  },
};

export const PlaintextLight: Story = {
  args: {
    language: 'plaintext',
    theme: 'duotoneLight',
    children: `This is just plain text.
  There is no syntax highlighting here.
  Lines are still numbered.`,
  },
};
