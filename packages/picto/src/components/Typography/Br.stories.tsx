import type { Meta, StoryObj } from '@storybook/react-vite';

import { Br } from './Br.js';
import { Paragraph } from './Paragraph.js';

const meta = {
  title: 'Typography/Br',
  component: Br,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Br>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: () => (
    <Paragraph>
      This is the first line.
      <Br />
      This is the second line after a line break.
    </Paragraph>
  ),
};

export const MultipleBreaks: Story = {
  args: {},
  render: () => (
    <Paragraph>
      Line 1
      <Br />
      <Br />
      Line 3 (after double break)
      <Br />
      Line 4
    </Paragraph>
  ),
};
