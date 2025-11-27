import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/contracts/color.css.js';
import { Container } from '../Container/Container.js';
import { Heading, type HeadingProps } from './Heading.js';

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="fixed"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '30vh', padding: '2rem' }}
      >
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'The semantic HTML level (h1-h6).',
      table: { defaultValue: { summary: '2' } },
    },
    variant: {
      control: 'radio',
      options: ['display', 'headline', 'title'],
      description: 'The visual style variant.',
      table: { defaultValue: { summary: 'headline' } },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the heading.',
      table: { defaultValue: { summary: 'medium' } },
    },
    children: {
      control: 'text',
      description: 'The content of the heading.',
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
    },
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const DisplayLarge: Story = {
  args: {
    children: 'Display Heading',
    variant: 'display',
    size: 'large',
  },
};

export const HeadlineMedium: Story = {
  args: {
    children: 'Headline Medium',
    variant: 'headline',
    size: 'medium',
    color: 'brand',
  },
};

export const HeadlineSmall: Story = {
  args: {
    children: 'Headline Small',
    variant: 'headline',
    size: 'small',
  },
};
