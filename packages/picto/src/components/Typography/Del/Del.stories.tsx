import type { Meta, StoryObj } from '@storybook/react-vite';

import { Del } from './Del.js';

const meta = {
  title: 'Typography/Del',
  component: Del,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Del>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This text is deleted',
  },
};
