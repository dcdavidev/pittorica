import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Text } from '../Text/Text.js';
import { Inline, type InlineProps } from './Inline.js';

const meta: Meta<InlineProps> = {
  title: 'Typography/Inline',
  component: Inline,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Text size="medium" as="div">
          <Story />
        </Text>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<InlineProps>;

export const BoldItalic: Story = {
  args: {
    bold: true,
    italic: true,
    children: 'Bold and Italic text',
  },
};

export const Highlight: Story = {
  args: {
    highlight: true,
    children: 'Highlighted text',
  },
};

export const Corrections: Story = {
  render: () => (
    <Text>
      The price is <Inline deleted>50€</Inline>{' '}
      <Inline inserted bold>
        30€
      </Inline>
      !
    </Text>
  ),
};

export const Formulas: Story = {
  render: () => (
    <Text>
      H<Inline sub>2</Inline>O is water. E = mc<Inline sup>2</Inline>.
    </Text>
  ),
};

export const SmallPrint: Story = {
  args: {
    small: true,
    children: 'Terms and conditions apply.',
  },
};
