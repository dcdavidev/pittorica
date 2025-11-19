import type { Meta, StoryObj } from '@storybook/react-vite';

import { Bdi } from './Bdi.js';

const meta = {
  title: 'Typography/Bdi',
  component: Bdi,
  tags: ['autodocs'],
} satisfies Meta<typeof Bdi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Hello',
  },
};
