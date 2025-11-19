import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Text, type TextProps } from './Text.js';

const colorOptions = Object.keys(colorsMap);

const meta: Meta<TextProps> = {
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
      control: 'select',
      options: colorOptions,
      description: 'Sprinkles color token.',
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Body: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'body',
    size: 'medium',
  },
};

export const Label: Story = {
  args: {
    children: 'Form Label',
    variant: 'label',
    size: 'medium',
    as: 'label',
  },
};

export const ErrorMessage: Story = {
  args: {
    children: 'This field is required.',
    variant: 'body',
    size: 'small',
    color: 'error-600',
  },
};
