import type { Meta, StoryObj } from '@storybook/react-vite';

import { Em } from './Em.js';

const meta = {
  title: 'Typography/Em',
  component: Em,
  tags: ['autodocs'],
  argTypes: {
    italic: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Em>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    italic: true,
    children: 'This text has emphasis',
  },
};

export const Variants: Story = {
  args: {
    children: 'Emphasized text',
  },
  render: (args) => (
    <>
      <p>
        Italic (em): <Em {...args} italic />
      </p>
      <p>
        Normal (i): <Em {...args} italic={false} />
      </p>
    </>
  ),
};
