import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/index.js';
import { Container } from '../Container/Container.js';
import { Blockquote, type BlockquoteProps } from './Blockquote.js';

const meta: Meta<BlockquoteProps> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="fixed"
        style={{ marginTop: 'calc(50vh - 4rem)', minHeight: '100px' }}
      >
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['classic', 'solid', 'minimal'],
      description: 'The visual style of the quote.',
      table: { defaultValue: { summary: 'classic' } },
    },
    author: {
      control: 'text',
      description: 'Name of the author of the quote.',
    },
    source: {
      control: 'text',
      description: 'Source of the quote (e.g., book title, article, website).',
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
      description: 'Accent color for the blockquote.',
      table: { defaultValue: { summary: 'brand' } },
    },
    children: {
      control: 'text',
      description: 'The content of the quote.',
    },
  },
};

export default meta;
type Story = StoryObj<BlockquoteProps>;

export const Classic: Story = {
  args: {
    children:
      'The best way to predict the future is to create it. Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Peter Drucker',
    source: 'Innovation and Entrepreneurship',
    variant: 'classic',
  },
};

export const Solid: Story = {
  args: {
    children:
      'There is no greater agony than bearing an untold story inside you.',
    author: 'Maya Angelou',
    source: 'I Know Why the Caged Bird Sings',
    variant: 'solid',
    color: 'brand',
  },
};

export const Minimal: Story = {
  args: {
    children:
      'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain',
    variant: 'minimal',
  },
};

export const ClassicError: Story = {
  args: {
    children:
      'An error does not become a mistake until you refuse to correct it.',
    author: 'Orlando Aloysius Battista',
    variant: 'classic',
    color: 'error100',
  },
};
