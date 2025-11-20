import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Text } from '../Text/Text.js';
import { Code, type CodeProps } from './Code.js';

const meta: Meta<CodeProps> = {
  title: 'Typography/Code',
  component: Code,
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
      control: 'radio',
      options: ['code', 'kbd', 'samp', 'var'],
    },
  },
};

export default meta;
type Story = StoryObj<CodeProps>;

export const Snippet: Story = {
  args: {
    variant: 'code',
    children: 'npm install @pittorica/picto',
  },
  render: (args) => (
    <Text>
      Run <Code {...args} /> to install.
    </Text>
  ),
};

export const KeyboardInput: Story = {
  args: {
    variant: 'kbd',
    children: 'CTRL + C',
  },
};

export const OutputSample: Story = {
  args: {
    variant: 'samp',
    children: 'Error: Connection timeout',
  },
};

export const Variable: Story = {
  args: {
    variant: 'var',
    children: 'x',
  },
  render: (args) => (
    <Text>
      Solve for <Code {...args} /> in the equation.
    </Text>
  ),
};
