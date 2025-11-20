import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Blockquote, type BlockquoteProps } from './Blockquote.js';

const colorOptions = Object.keys(colorsMap);

const meta: Meta<BlockquoteProps> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['classic', 'solid', 'minimal'],
      description: 'Visual style of the quote.',
    },
    author: {
      control: 'text',
      description: 'The author of the quote.',
    },
    source: {
      control: 'text',
      description: 'The source material (book, article, etc.).',
    },
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Accent color for border (classic) or background (solid).',
    },
  },
};

export default meta;
type Story = StoryObj<BlockquoteProps>;

export const Classic: Story = {
  args: {
    children:
      'Design is not just what it looks like and feels like. Design is how it works.',
    author: 'Steve Jobs',
    variant: 'classic',
  },
};

export const Solid: Story = {
  args: {
    children: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
    variant: 'solid',
    color: 'light',
  },
};

export const WithSource: Story = {
  args: {
    children: 'Stay hungry, stay foolish.',
    author: 'Stewart Brand',
    source: 'Whole Earth Catalog',
    variant: 'classic',
  },
};

export const CustomColor: Story = {
  args: {
    children: 'To be, or not to be, that is the question.',
    author: 'William Shakespeare',
    variant: 'classic',
    color: 'error',
  },
};

export const Minimal: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    variant: 'minimal',
  },
};
