import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Pre, type PreProps } from './Pre.js';

const meta: Meta<PreProps> = {
  title: 'Typography/Pre',
  component: Pre,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{ padding: '2rem', maxWidth: '600px' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['block', 'ghost'],
      description: 'Visual style.',
    },
  },
};

export default meta;
type Story = StoryObj<PreProps>;

const codeSnippet = `// This is a JavaScript function
function calculateTotal(price, tax) {
  const total = price + (price * tax);
  return total.toFixed(2);
}

console.log(calculateTotal(100, 0.22));`;

export const CodeBlock: Story = {
  args: {
    variant: 'block',
    children: <code>{codeSnippet}</code>,
  },
};

export const LongLineScroll: Story = {
  args: {
    variant: 'block',
    children: `This line is extremely long and serves the purpose of testing whether the container properly handles horizontal overflow by showing a scrollbar instead of breaking the layout or hiding the content.`,
  },
};

export const ASCIIArt: Story = {
  args: {
    variant: 'ghost',
    children: String.raw`
   /\_/\
  ( o.o )
   > ^ <
  `,
  },
};
