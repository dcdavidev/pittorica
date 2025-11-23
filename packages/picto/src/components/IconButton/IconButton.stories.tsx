import React from 'react';

import {
  IconHeart,
  IconMenu2,
  IconSearch,
  IconSettings,
  IconTrash,
  IconX,
} from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'filled', 'tonal', 'outlined'],
      description: 'The visual style of the button.',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xl'],
      description: 'The fixed width and height of the button.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    shape: {
      control: { type: 'radio' },
      options: ['circle', 'square'],
      description: 'The border-radius shape.',
      table: {
        defaultValue: { summary: 'circle' },
      },
    },
    color: {
      control: { type: 'select' },
      options: [
        'brand',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'gray',
      ],
      description: 'The semantic color palette of the button.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interactions and modifies styling.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner instead of the icon.',
    },
    'aria-label': {
      control: 'text',
      description: 'MANDATORY accessible label (tooltip on hover).',
      type: { name: 'string', required: true },
    },
    href: {
      control: 'text',
      description: 'If provided, renders as an anchor tag (<a>).',
    },
    onClick: { action: 'clicked' },
    children: {
      control: false,
      description: 'The icon component to render.',
    },
  },
  args: {
    variant: 'text',
    size: 'medium',
    shape: 'circle',
    color: 'brand',
    disabled: false,
    loading: false,
    'aria-label': 'Search',
    children: <IconSearch size={'1.2em'} />,
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * The default playground. Use the controls panel to experiment with options.
 */
export const Playground: Story = {};

export const AllColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <IconButton {...args} color="brand" variant="filled" aria-label="Brand">
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        color="secondary"
        variant="filled"
        aria-label="Secondary"
      >
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        color="tertiary"
        variant="filled"
        aria-label="Tertiary"
      >
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton {...args} color="info" variant="filled" aria-label="Info">
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        color="success"
        variant="filled"
        aria-label="Success"
      >
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        color="warning"
        variant="filled"
        aria-label="Warning"
      >
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton {...args} color="error" variant="filled" aria-label="Error">
        <IconHeart size={'1.2em'} />
      </IconButton>
      <IconButton {...args} color="gray" variant="filled" aria-label="Gray">
        <IconHeart size={'1.2em'} />
      </IconButton>
    </div>
  ),
};

/**
 * All available visual variants.
 * 'Text' is the default and most common for icon buttons (often called "ghost").
 */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton {...args} variant="text" aria-label="Menu (Text variant)">
        <IconMenu2 size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        variant="outlined"
        aria-label="Settings (Outlined variant)"
      >
        <IconSettings size={'1.2em'} />
      </IconButton>
      <IconButton {...args} variant="tonal" aria-label="Search (Tonal variant)">
        <IconSearch size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        variant="filled"
        aria-label="Close (Filled variant)"
      >
        <IconX size={'1.2em'} />
      </IconButton>
    </div>
  ),
};

/**
 * Available fixed sizes ranging from small (32px) to xl (56px).
 * The icon size scales accordingly.
 */
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton {...args} size="small" variant="tonal" aria-label="Small">
        <IconSearch size={'1.2em'} />
      </IconButton>
      <IconButton {...args} size="medium" variant="tonal" aria-label="Medium">
        <IconSearch size={'1.2em'} />
      </IconButton>
      <IconButton {...args} size="large" variant="tonal" aria-label="Large">
        <IconSearch size={'1.2em'} />
      </IconButton>
      <IconButton {...args} size="xl" variant="tonal" aria-label="XL">
        <IconSearch size={'1.2em'} />
      </IconButton>
    </div>
  ),
};

/**
 * Shapes: Circle (default) vs Square.
 */
export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton
        {...args}
        shape="circle"
        variant="filled"
        aria-label="Circle shape"
      >
        <IconMenu2 size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        shape="square"
        variant="filled"
        aria-label="Square shape"
      >
        <IconMenu2 size={'1.2em'} />
      </IconButton>
    </div>
  ),
};

/**
 * States: Disabled and Loading.
 * The loading state automatically replaces the icon with a spinner.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton {...args} variant="outlined" aria-label="Enabled">
        <IconTrash size={'1.2em'} />
      </IconButton>
      <IconButton {...args} disabled variant="outlined" aria-label="Disabled">
        <IconTrash size={'1.2em'} />
      </IconButton>
      <IconButton {...args} loading variant="outlined" aria-label="Loading">
        <IconTrash size={'1.2em'} />
      </IconButton>
      <IconButton
        {...args}
        loading
        variant="filled"
        aria-label="Loading Filled"
      >
        <IconTrash size={'1.2em'} />
      </IconButton>
    </div>
  ),
};

/**
 * When an `href` prop is provided, the component renders as an `<a>` tag.
 * Useful for social links or navigation icons.
 */
export const AsLink: Story = {
  args: {
    href: 'https://google.com',
    target: '_blank',
    'aria-label': 'Go to Google',
    variant: 'tonal',
    children: <IconSearch size={'1.2em'} />,
  },
};
