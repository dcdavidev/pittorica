import type { Meta, StoryObj } from '@storybook/react-vite';

import { I } from './I.js';

const meta = {
  title: 'Typography/I',
  component: I,
  tags: ['autodocs'],
  argTypes: {
    italic: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof I>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    italic: true,
    children: 'This text is italic',
  },
};

export const Variants: Story = {
  args: {
    children: 'Italic text',
  },
  render: (args) => (
    <>
      <p>
        Italic: <I {...args} italic />
      </p>
      <p>
        Normal: <I {...args} italic={false} />
      </p>
    </>
  ),
};
