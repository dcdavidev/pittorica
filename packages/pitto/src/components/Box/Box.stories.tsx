import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from './Box.js';

const meta = {
  component: Box,
  title: 'Box',
} satisfies Meta<typeof Box>;
export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    backgroundColor: 'surface100',
    p: 'large',
    borderRadius: 'medium',
    children: 'This is a basic box with Sprinkles styles.',
  },
};

export const SpacingAndColor: Story = {
  args: {
    backgroundColor: 'brand',
    color: 'onSurface900',
    p: 'xlarge',
    mx: 'small',
    fontWeight: 'bold',
    children: 'Container with brand color and margins on the X axis.',
  },
};

export const AsButton: Story = {
  args: {
    as: 'button',
    backgroundColor: 'success',
    color: 'onSurface900',
    p: 'medium',
    borderRadius: 'small',
    onClick: () => alert('You clicked the Box/Button!'),
    type: 'button',
    children: 'Box rendered as Button',
  },
};

export const DisplayHeading: Story = {
  args: {
    as: 'h1',
    fontSize: 'headlineLarge',
    fontWeight: 'semibold',
    p: 'none',
    children: 'H1 Title with Semibold Font',
  },
};

export const CircularBox: Story = {
  args: {
    backgroundColor: 'info',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    children: 'Full',
  },
};
