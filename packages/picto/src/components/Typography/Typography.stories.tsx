import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Text & Formatting/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['body', 'label'],
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm'],
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
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    space: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body',
    size: 'md',
    children: 'This is body text',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'body',
    size: 'lg',
    children: 'Body Large Text',
  },
};

export const BodyMedium: Story = {
  args: {
    variant: 'body',
    size: 'md',
    children: 'Body Medium Text',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'body',
    size: 'sm',
    children: 'Body Small Text',
  },
};

export const LabelLarge: Story = {
  args: {
    variant: 'label',
    size: 'lg',
    children: 'Label Large Text',
  },
};

export const LabelMedium: Story = {
  args: {
    variant: 'label',
    size: 'md',
    children: 'Label Medium Text',
  },
};

export const LabelSmall: Story = {
  args: {
    variant: 'label',
    size: 'sm',
    children: 'Label Small Text',
  },
};

export const WithColor: Story = {
  args: {
    variant: 'body',
    size: 'md',
    color: 'primary',
    children: 'Colored Typography',
  },
};

export const WithAlignment: Story = {
  args: {
    variant: 'label',
    size: 'lg',
    align: 'center',
    children: 'Centered Typography',
  },
};

export const WithSpace: Story = {
  args: {
    variant: 'body',
    size: 'lg',
    space: 'md',
    children: 'Typography with Space',
  },
};
