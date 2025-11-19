import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Heading, type HeadingProps } from './Heading.js';

const colorOptions = Object.keys(colorsMap);

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    level: {
      control: { type: 'range', min: 1, max: 6 },
      description: 'The semantic HTML heading level (h1-h6).',
      table: { defaultValue: { summary: '2' } },
    },
    variant: {
      control: 'radio',
      options: ['display', 'headline'],
      description: 'The visual style variant.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the heading.',
    },
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Sprinkles color token.',
    },
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const Default: Story = {
  args: {
    children: 'Heading Title',
    variant: 'headline',
    size: 'medium',
    level: 2,
  },
};

export const DisplayLarge: Story = {
  args: {
    children: 'Hero Display Text',
    variant: 'display',
    size: 'large',
    level: 1,
  },
};

export const Colored: Story = {
  args: {
    children: 'Colored Heading',
    variant: 'headline',
    size: 'medium',
    color: 'brand-500',
  },
};
