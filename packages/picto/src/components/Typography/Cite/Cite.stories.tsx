import type { Meta, StoryObj } from '@storybook/react-vite';

import { Cite } from './Cite.js';

const meta = {
  title: 'Typography/Cite',
  component: Cite,
  tags: ['autodocs'],
} satisfies Meta<typeof Cite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'The Great Gatsby',
  },
};
