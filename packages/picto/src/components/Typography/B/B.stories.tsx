import type { Meta, StoryObj } from '@storybook/react-vite';

import { B } from './B.js';

const meta = {
  title: 'Typography/B',
  component: B,
  tags: ['autodocs'],
  argTypes: {
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'neutral'],
    },
  },
} satisfies Meta<typeof B>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    weight: 'bold',
    children: 'This text is bold',
  },
};

export const Weights: Story = {
  args: {
    children: 'Bold text with different weights',
  },
  render: (args) => (
    <>
      <p>
        Regular: <B {...args} weight="regular" />
      </p>
      <p>
        Medium: <B {...args} weight="medium" />
      </p>
      <p>
        Semibold: <B {...args} weight="semibold" />
      </p>
      <p>
        Bold: <B {...args} weight="bold" />
      </p>
    </>
  ),
};
