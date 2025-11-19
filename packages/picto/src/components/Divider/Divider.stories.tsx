import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [undefined, 'wave', 'zigzag', 'dashed', 'double'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'error',
        'success',
        'info',
        'danger',
      ],
    },
    space: {
      control: { type: 'select' },
      options: ['normal', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithColor: Story = {
  args: {
    color: 'primary',
  },
};

export const WithSpace: Story = {
  args: {
    space: 'lg',
  },
};

export const Wave: Story = {
  args: {
    variant: 'wave',
  },
};

export const Zigzag: Story = {
  args: {
    variant: 'zigzag',
    color: 'secondary',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    color: 'tertiary',
  },
};

export const Double: Story = {
  args: {
    variant: 'double',
    color: 'neutral',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div>
      <h3>Default</h3>
      <Divider />
      <h3>Wave</h3>
      <Divider variant="wave" />
      <h3>Zigzag</h3>
      <Divider variant="zigzag" />
      <h3>Dashed</h3>
      <Divider variant="dashed" />
      <h3>Double</h3>
      <Divider variant="double" />
    </div>
  ),
};
