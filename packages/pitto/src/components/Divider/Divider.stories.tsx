import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/index.js';
import { Container } from '../Container/Container.js';
import { Divider, type DividerProps } from './Divider.js';

const meta: Meta<DividerProps> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'wave', 'zigzag', 'dashed', 'double'],
      description: 'The visual style of the separator.',
      table: { defaultValue: { summary: 'solid' } },
    },
    thickness: {
      control: 'text',
      description: 'Thickness of the line (only for solid variant).',
      table: { defaultValue: { summary: '1px' } },
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
      description: 'Color token from the theme.',
      defaultValue: 'black',
    },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Default: Story = {
  args: {
    variant: 'wave',
  },
};
