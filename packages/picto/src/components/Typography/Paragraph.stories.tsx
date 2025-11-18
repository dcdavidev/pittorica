import type { Meta, StoryObj } from '@storybook/react-vite';

import { Paragraph } from './Paragraph.js';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
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
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children:
      'This is a paragraph component. It renders as a <p> element by default and supports all typography styling options except semantic inline elements.',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Paragraph with different sizes.',
  },
  render: (args) => (
    <>
      <Paragraph {...args} size="body-lg">
        Body Large: The quick brown fox jumps over the lazy dog.
      </Paragraph>
      <Paragraph {...args} size="body-md">
        Body Medium: The quick brown fox jumps over the lazy dog.
      </Paragraph>
      <Paragraph {...args} size="body-sm">
        Body Small: The quick brown fox jumps over the lazy dog.
      </Paragraph>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'Styled paragraph with various typography options.',
  },
  render: (args) => (
    <>
      <Paragraph {...args} weight="bold" color="primary">
        Bold primary paragraph
      </Paragraph>
      <Paragraph {...args} italic color="secondary">
        Italic secondary paragraph
      </Paragraph>
      <Paragraph {...args} align="center" color="tertiary">
        Centered tertiary paragraph
      </Paragraph>
    </>
  ),
};
