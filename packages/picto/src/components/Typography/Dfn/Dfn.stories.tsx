import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dfn } from './Dfn.js';

const meta = {
  title: 'Typography/Dfn',
  component: Dfn,
  tags: ['autodocs'],
} satisfies Meta<typeof Dfn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'HTML',
  },
};
