import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Heading } from './Heading.js';

/**
 * Story configuration for the Heading component.
 * Displays the typographic hierarchy for titles.
 */
const meta: Meta<typeof Heading> = {
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
      control: 'text',
      description: 'Sprinkles color token (e.g., "brand-500", "error-600").',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

/**
 * Default headline usage.
 */
export const Default: Story = {
  args: {
    children: 'Heading Title',
    variant: 'headline',
    size: 'medium',
    level: 2,
  },
};

/**
 * Large display style for hero sections.
 */
export const DisplayLarge: Story = {
  args: {
    children: 'Hero Display Text',
    variant: 'display',
    size: 'large',
    level: 1,
  },
};

/**
 * Example of overriding the color using Sprinkles props.
 */
export const Colored: Story = {
  args: {
    children: 'Colored Heading',
    variant: 'headline',
    size: 'medium',
    color: 'brand-500',
  },
};
