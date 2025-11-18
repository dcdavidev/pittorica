import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography.js';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'display-lg',
        'display-md',
        'display-sm',
        'headline-lg',
        'headline-md',
        'headline-sm',
        'title-lg',
        'title-md',
        'title-sm',
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
        'error',
        'success',
        'info',
        'warning',
        'black',
        'white',
      ],
    },
    pre: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a typography component with default body-lg size.',
  },
};

export const DisplayLarge: Story = {
  args: {
    size: 'display-lg',
    children: 'Display Large Heading',
  },
};

export const HeadlineMedium: Story = {
  args: {
    size: 'headline-md',
    children: 'Headline Medium Text',
  },
};

export const BodyLarge: Story = {
  args: {
    size: 'body-lg',
    children: 'Body Large Text - This is the default size for body text.',
  },
};

export const LabelSmall: Story = {
  args: {
    size: 'label-sm',
    children: 'Label Small Text',
  },
};

export const WithWeight: Story = {
  args: {
    size: 'body-lg',
    weight: 'bold',
    children: 'Bold body text',
  },
};

export const WithColor: Story = {
  args: {
    size: 'body-lg',
    color: 'primary',
    children: 'Primary colored text',
  },
};

export const Centered: Story = {
  args: {
    size: 'title-lg',
    align: 'center',
    children: 'Centered title text',
  },
};

export const Italic: Story = {
  args: {
    size: 'body-lg',
    italic: true,
    children: 'Italic body text',
  },
};

export const Preformatted: Story = {
  args: {
    pre: true,
    children: `function helloWorld() {
  console.log("Hello, World!");
  return "Preformatted text preserves whitespace and formatting";
}`,
  },
};
