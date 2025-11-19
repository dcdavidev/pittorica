import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading.js';

const meta: Meta<typeof Heading> = {
  title: 'Text & Formatting/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['display', 'headline', 'title'],
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm'],
    },
    color: {
      control: { type: 'select' },
      options: [
        undefined,
        'dark',
        'light',
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'neutral-variant',
        'error',
        'success',
        'info',
        'danger',
      ],
    },
    align: {
      control: { type: 'select' },
      options: [undefined, 'left', 'center', 'right', 'justify'],
    },
    space: {
      control: { type: 'text' },
      description: 'Vertical spacing: lg, md, sm, or custom value like "1rem"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'display',
    size: 'lg',
    children: 'This is a display large heading',
  },
};

export const Headline: Story = {
  args: {
    variant: 'headline',
    size: 'lg',
    children: 'This is a headline large heading',
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    size: 'lg',
    children: 'This is a title large heading',
  },
};

export const WithColor: Story = {
  args: {
    variant: 'display',
    size: 'md',
    color: 'primary',
    children: 'Colored heading with primary color',
  },
};

export const Centered: Story = {
  args: {
    variant: 'headline',
    size: 'md',
    align: 'center',
    children: 'Centered headline',
  },
};

export const SmallTitle: Story = {
  args: {
    variant: 'title',
    size: 'sm',
    children: 'Small title heading',
  },
};

export const WithSpacing: Story = {
  args: {
    variant: 'display',
    size: 'md',
    space: 'lg',
    children: 'Heading with large spacing',
  },
};
