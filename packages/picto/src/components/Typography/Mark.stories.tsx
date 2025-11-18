import type { Meta, StoryObj } from '@storybook/react-vite';

import { Mark } from './Mark.js';

const meta = {
  title: 'Typography/Mark',
  component: Mark,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Mark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This text is highlighted',
  },
};
