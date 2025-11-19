import type { Meta, StoryObj } from '@storybook/react-vite';

import { Kbd } from './Kbd.js';

const meta = {
  title: 'Typography/Kbd',
  component: Kbd,
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Ctrl + C',
  },
};
