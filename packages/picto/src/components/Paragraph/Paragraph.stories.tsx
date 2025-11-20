import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Paragraph, type ParagraphProps } from './Paragraph.js';

const colorOptions = Object.keys(colorsMap);

const meta: Meta<ParagraphProps> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{ padding: '2rem', maxWidth: '600px' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The font size of the paragraph.',
      table: { defaultValue: { summary: 'medium' } },
    },
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Text color override.',
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
    color: 'light',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children:
      'This is a lead paragraph, often used for introductions to grab the user attention.',
  },
};
