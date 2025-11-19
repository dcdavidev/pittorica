import type { Meta, StoryObj } from '@storybook/react-vite';

import { Ins } from './Ins.js';

const meta = {
  title: 'Typography/Ins',
  component: Ins,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Ins>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This text is inserted',
  },
};
