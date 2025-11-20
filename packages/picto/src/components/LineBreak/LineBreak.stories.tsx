import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Text } from '../Text/Text.js';
import { LineBreak, type LineBreakProps } from './LineBreak.js';

const meta: Meta<LineBreakProps> = {
  title: 'Typography/LineBreak',
  component: LineBreak,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A simple wrapper for the `<br />` tag to maintain component consistency.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<LineBreakProps>;

export const Default: Story = {
  render: (args) => (
    <Text>
      This is the first line.
      <LineBreak {...args} />
      This is the second line (forced by LineBreak).
    </Text>
  ),
};

export const PoemExample: Story = {
  render: (args) => (
    <Text as="div">
      Roses are red,
      <LineBreak {...args} />
      Violets are blue,
      <LineBreak {...args} />
      Sugar is sweet,
      <LineBreak {...args} />
      And so are you.
    </Text>
  ),
};
