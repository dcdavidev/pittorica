import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

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
    variant: 'display',
    size: 'lg',
    children: 'This is a heading',
  },
};

export const DisplayLarge: Story = {
  args: {
    variant: 'display',
    size: 'lg',
    children: 'Display Large Heading',
  },
};

export const DisplayMedium: Story = {
  args: {
    variant: 'display',
    size: 'md',
    children: 'Display Medium Heading',
  },
};

export const DisplaySmall: Story = {
  args: {
    variant: 'display',
    size: 'sm',
    children: 'Display Small Heading',
  },
};

export const HeadlineLarge: Story = {
  args: {
    variant: 'headline',
    size: 'lg',
    children: 'Headline Large Heading',
  },
};

export const HeadlineMedium: Story = {
  args: {
    variant: 'headline',
    size: 'md',
    children: 'Headline Medium Heading',
  },
};

export const HeadlineSmall: Story = {
  args: {
    variant: 'headline',
    size: 'sm',
    children: 'Headline Small Heading',
  },
};

export const TitleLarge: Story = {
  args: {
    variant: 'title',
    size: 'lg',
    children: 'Title Large Heading',
  },
};

export const TitleMedium: Story = {
  args: {
    variant: 'title',
    size: 'md',
    children: 'Title Medium Heading',
  },
};

export const TitleSmall: Story = {
  args: {
    variant: 'title',
    size: 'sm',
    children: 'Title Small Heading',
  },
};

export const WithColor: Story = {
  args: {
    variant: 'headline',
    size: 'md',
    color: 'primary',
    children: 'Colored Heading',
  },
};

export const WithAlignment: Story = {
  args: {
    variant: 'title',
    size: 'lg',
    align: 'center',
    children: 'Centered Heading',
  },
};

export const WithSpace: Story = {
  args: {
    variant: 'display',
    size: 'md',
    space: 'lg',
    children: 'Heading with Space',
  },
};
