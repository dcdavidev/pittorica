import type { Meta, StoryObj } from '@storybook/react-vite';

import { Code } from './Code.js';

const meta = {
  title: 'Typography/Code',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'const hello = "world";',
  },
};
