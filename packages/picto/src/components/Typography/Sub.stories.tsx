import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sub } from './Sub.js';

const meta = {
  title: 'Typography/Sub',
  component: Sub,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '2',
  },
  render: () => (
    <span>
      H<Sub>2</Sub>O
    </span>
  ),
};
