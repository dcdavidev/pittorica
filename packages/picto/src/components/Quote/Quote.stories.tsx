import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Quote, QuoteProps } from './Quote';

const meta: Meta<QuoteProps> = {
  title: 'Typography/Quote',
  component: Quote,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the quote.',
    },
  },
};

export default meta;
type Story = StoryObj<QuoteProps>;

/**
 * Default quote with automatic quotation marks.
 */
export const Default: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
  },
};
