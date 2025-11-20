import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Abbreviation, AbbreviationProps } from './Abbreviation';

const meta: Meta<AbbreviationProps> = {
  title: 'Components/Abbreviation',
  component: Abbreviation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'noUnderline'],
      description: 'Visual style of the abbreviation.',
    },
    title: {
      control: 'text',
      description: 'The full explanation of the abbreviation.',
    },
  },
};

export default meta;
type Story = StoryObj<AbbreviationProps>;

/**
 * Default abbreviation with a dotted underline.
 */
export const Default: Story = {
  args: {
    children: 'A11y',
    title: 'Accessibility',
    variant: 'default',
  },
};

/**
 * Abbreviation without an underline.
 */
export const NoUnderline: Story = {
  args: {
    children: 'HTML',
    title: 'HyperText Markup Language',
    variant: 'noUnderline',
  },
};
