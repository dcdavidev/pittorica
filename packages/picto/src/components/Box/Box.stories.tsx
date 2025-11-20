import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Box, type BoxProps } from './Box';

// Options for controls (we get the keys from your config files)
const spaceOptions = ['none', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const colorOptions = Object.keys(colorsMap);

const meta: Meta<BoxProps> = {
  title: 'Foundations/Box', // We put it under Foundations because it's a primitive
  component: Box,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  // We manually configure the most important controls,
  // because Storybook struggles to read Sprinkles' complex types
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render.',
      table: { defaultValue: { summary: 'div' } },
    },
    padding: {
      control: 'select',
      options: spaceOptions,
      description: 'Padding on all sides.',
    },
    margin: {
      control: 'select',
      options: spaceOptions,
      description: 'Margin on all sides.',
    },
    backgroundColor: {
      control: 'select',
      options: colorOptions,
    },
    color: {
      control: 'select',
      options: colorOptions,
    },
    borderRadius: {
      control: 'text', // Or select if you have defined atoms for radius
    },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

/**
 * The Playground lets you experiment with atomic props.
 */
export const Playground: Story = {
  args: {
    children: 'I am a Box',
    padding: 'large',
    backgroundColor: 'brand',
    color: 'text',
    borderRadius: 'medium',
  },
};

/**
 * Demonstration of polymorphism.
 * Here the Box is rendered as a <button>.
 */
export const AsButton: Story = {
  args: {
    as: 'button',
    children: 'I am a Box rendered as a Button',
    padding: 'medium',
    backgroundColor: 'secondary',
    color: 'text',
    style: { border: 'none', cursor: 'pointer' }, // Inline styles for non-atomic things (temporary)
  },
};

/**
 * Layout example.
 * Nested Boxes to show how to manage margins and padding.
 */
export const LayoutExample: Story = {
  render: () => (
    <Box backgroundColor="neutrals-light" padding="large">
      <Box
        backgroundColor="light"
        padding="medium"
        marginBottom="medium"
        style={{ border: '1px solid #ccc' }}
      >
        Card 1
      </Box>
      <Box
        backgroundColor="light"
        padding="medium"
        style={{ border: '1px solid #ccc' }}
      >
        Card 2
      </Box>
    </Box>
  ),
};
