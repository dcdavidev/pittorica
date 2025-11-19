import type { Meta, StoryObj } from '@storybook/react-vite';

import { Bdo } from './Bdo.js';

const meta = {
  title: 'Typography/Bdo',
  component: Bdo,
  tags: ['autodocs'],
  argTypes: {
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
    },
  },
} satisfies Meta<typeof Bdo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    dir: 'rtl',
    children: 'Hello World',
  },
};
