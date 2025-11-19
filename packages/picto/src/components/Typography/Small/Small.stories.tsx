import type { Meta, StoryObj } from '@storybook/react-vite';

import { Small } from './Small.js';

const meta = {
  title: 'Typography/Small',
  component: Small,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'body-lg',
        'body-md',
        'body-sm',
        'label-lg',
        'label-md',
        'label-sm',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    lineHeight: {
      control: { type: 'select' },
      options: ['normal', 'tight', 'loose'],
    },
    letterSpacing: {
      control: { type: 'select' },
      options: ['normal', 'wide', 'wider'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
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
        'warning',
      ],
    },
    italic: {
      control: { type: 'boolean' },
    },
    pre: {
      control: { type: 'boolean' },
    },
    noMargins: {
      control: { type: 'boolean' },
    },
    html: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Small>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is small text.',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Small text with different sizes.',
  },
  render: (args) => (
    <>
      <Small {...args} size="body-lg">
        Body Large: Fine print here.
      </Small>
      <Small {...args} size="body-md">
        Body Medium: Fine print here.
      </Small>
      <Small {...args} size="body-sm">
        Body Small: Fine print here.
      </Small>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'Styled small text.',
  },
  render: (args) => (
    <>
      <Small {...args} weight="bold" color="primary">
        Bold primary small text
      </Small>
      <Small {...args} italic color="secondary">
        Italic secondary small text
      </Small>
      <Small {...args} align="center" color="tertiary">
        Centered tertiary small text
      </Small>
    </>
  ),
};
