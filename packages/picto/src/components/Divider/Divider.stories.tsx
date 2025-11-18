import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors';
import { Divider, DIVIDER_VARIANT } from './Divider.js';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [undefined, ...DIVIDER_VARIANT],
      labels: {
        undefined: 'Line',
        wave: 'Wave',
        zigzag: 'Zigzag',
        dashes: 'Dashes',
        double: 'Double',
      },
    },
    color: {
      control: { type: 'select' },
      options: [undefined, ...COLOR_TOKEN],
    },
    space: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'normal'],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: undefined,
    variant: undefined,
    space: 'md',
  },
};
