import type { Meta, StoryObj } from '@storybook/react-vite';

import { Strong } from './Strong.js';

const meta = {
  title: 'Typography/Strong',
  component: Strong,
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
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'This is strong text.',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Strong text with different sizes.',
  },
  render: (args) => (
    <>
      <Strong {...args} size="body-lg">
        Body Large: Important information.
      </Strong>
      <Strong {...args} size="body-md">
        Body Medium: Important information.
      </Strong>
      <Strong {...args} size="body-sm">
        Body Small: Important information.
      </Strong>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'Styled strong text.',
  },
  render: (args) => (
    <>
      <Strong {...args} weight="bold" color="primary">
        Bold primary strong text
      </Strong>
      <Strong {...args} italic color="secondary">
        Italic secondary strong text
      </Strong>
      <Strong {...args} align="center" color="tertiary">
        Centered tertiary strong text
      </Strong>
    </>
  ),
};
