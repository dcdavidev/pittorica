import type { Meta, StoryObj } from '@storybook/react-vite';

import { Small } from './Small.js';

const meta = {
  title: 'Typography/Small',
  component: Small,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Small>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is small text',
  },
};
