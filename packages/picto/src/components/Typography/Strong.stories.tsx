import type { Meta, StoryObj } from '@storybook/react-vite';

import { Strong } from './Strong.js';

const meta = {
  title: 'Typography/Strong',
  component: Strong,
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
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    weight: 'bold',
    children: 'This text is strong/bold',
  },
};

export const Weights: Story = {
  args: {
    children: 'Strong text with different weights',
  },
  render: (args) => (
    <>
      <p>
        Regular: <Strong {...args} weight="regular" />
      </p>
      <p>
        Medium: <Strong {...args} weight="medium" />
      </p>
      <p>
        Semibold: <Strong {...args} weight="semibold" />
      </p>
      <p>
        Bold: <Strong {...args} weight="bold" />
      </p>
    </>
  ),
};
