import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container';
import { Abbreviation, type AbbreviationProps } from './Abbreviation';

const meta: Meta<AbbreviationProps> = {
  title: 'Typography/Abbreviation',
  component: Abbreviation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="small"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Story />
      </Container>
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
