import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Text } from './Text.js';

/**
 * Story configuration for the Text component.
 * Handles body text and UI labels.
 */
const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'figcaption'],
      description: 'Polymorphic prop to change the rendered HTML element.',
      table: { defaultValue: { summary: 'p' } },
    },
    variant: {
      control: 'radio',
      options: ['body', 'label'],
      description: 'The visual style variant.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the text.',
    },
    color: {
      control: 'text',
      description: 'Sprinkles color token.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

/**
 * Standard body text.
 */
export const Body: Story = {
  args: {
    children:
      'Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.',
    variant: 'body',
    size: 'medium',
  },
};

/**
 * Label style, typically used for UI controls or metadata.
 * It usually has a slightly heavier weight.
 */
export const Label: Story = {
  args: {
    children: 'Form Label',
    variant: 'label',
    size: 'medium',
    as: 'label',
  },
};

/**
 * Example with a semantic color for feedback.
 */
export const ErrorMessage: Story = {
  args: {
    children: 'This field is required.',
    variant: 'body',
    size: 'small',
    color: 'error-600',
  },
};
