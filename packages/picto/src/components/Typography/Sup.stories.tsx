import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sup } from './Sup.js';

const meta = {
  title: 'Typography/Sup',
  component: Sup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '2',
  },
  render: () => (
    <span>
      E = mc<Sup>2</Sup>
    </span>
  ),
};