import type { Meta, StoryObj } from '@storybook/react-vite';

import { Q } from './Q.js';

const meta = {
  title: 'Typography/Q',
  component: Q,
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
    cite: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Q>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is a short quotation.',
  },
};

export const WithCite: Story = {
  args: {
    children: 'To be or not to be.',
    cite: 'https://example.com/hamlet',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Short quote with different sizes.',
  },
  render: (args) => (
    <>
      <Q {...args} size="body-lg">
        Body Large: "The quick brown fox jumps over the lazy dog."
      </Q>
      <Q {...args} size="body-md">
        Body Medium: "The quick brown fox jumps over the lazy dog."
      </Q>
      <Q {...args} size="body-sm">
        Body Small: "The quick brown fox jumps over the lazy dog."
      </Q>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'Styled short quotation.',
  },
  render: (args) => (
    <>
      <Q {...args} weight="bold" color="primary">
        Bold primary quote
      </Q>
      <Q {...args} italic color="secondary">
        Italic secondary quote
      </Q>
      <Q {...args} align="center" color="tertiary">
        Centered tertiary quote
      </Q>
    </>
  ),
};
