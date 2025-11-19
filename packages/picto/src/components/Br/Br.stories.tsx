import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography/Typography';
import Br from './Br';

const meta: Meta<typeof Br> = {
  title: 'Text & Formatting/Br',
  component: Br,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Typography>
      This is the first line
      <Br />
      This is the second line
      <Br />
      And this is the third line
    </Typography>
  ),
};

export const WithTypography: Story = {
  render: () => (
    <div>
      <Typography variant="body" size="lg">
        Large body text with line break
        <Br />
        Second line
      </Typography>
      <Typography variant="label" size="md">
        Label text
        <Br />
        With break
      </Typography>
    </div>
  ),
};
