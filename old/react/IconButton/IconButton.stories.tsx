import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton.js';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'error',
        'success',
        'info',
        'warning',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['round', 'square'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '🚀',
  },
};

export const Colored: Story = {
  args: {
    children: '❤️',
    color: 'error',
  },
};

export const Disabled: Story = {
  args: {
    children: '🚫',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: '⏳',
    loading: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <IconButton>🚀</IconButton>
      <IconButton color="primary">🚀</IconButton>
      <IconButton color="secondary">🚀</IconButton>
      <IconButton color="tertiary">🚀</IconButton>
      <IconButton color="error">🚀</IconButton>
      <IconButton color="success">🚀</IconButton>
      <IconButton color="info">🚀</IconButton>
      <IconButton color="warning">🚀</IconButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <IconButton size="xs" color="primary">
        🚀
      </IconButton>
      <IconButton size="sm" color="primary">
        🚀
      </IconButton>
      <IconButton size="md" color="primary">
        🚀
      </IconButton>
      <IconButton size="lg" color="primary">
        🚀
      </IconButton>
      <IconButton size="xl" color="primary">
        🚀
      </IconButton>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <IconButton shape="round" color="secondary">
        🚀
      </IconButton>
      <IconButton shape="square" color="secondary">
        🚀
      </IconButton>
    </div>
  ),
};
