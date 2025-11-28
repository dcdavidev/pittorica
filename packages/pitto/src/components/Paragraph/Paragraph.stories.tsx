import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/index.js';
import { Container } from '../Container/Container.js';
import { Paragraph, type ParagraphProps } from './Paragraph.js';

const meta: Meta<ParagraphProps> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" style={{ padding: '2rem' }}>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['body', 'label'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
    },
    htmlFor: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<ParagraphProps>;

const lorem = `
  Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old.
`;

export const Medium: Story = {
  args: {
    size: 'medium',
    children: lorem,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: lorem,
    color: 'brand',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children:
      'This is a lead paragraph, often used for introductions to grab the user attention.',
  },
};
