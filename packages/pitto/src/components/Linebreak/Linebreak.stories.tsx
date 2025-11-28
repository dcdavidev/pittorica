import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Text } from '../Text/Text.js';
import { Linebreak, type LinebreakProps } from './Linebreak.js';

const meta: Meta<LinebreakProps> = {
  title: 'Typography/Linebreak',
  component: Linebreak,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container padding="large">
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<LinebreakProps>;

export const Default: Story = {
  render: (args) => (
    <Text>
      This is the first line.
      <Linebreak {...args} />
      This is the second line (forced by Linebreak).
    </Text>
  ),
};

export const PoemExample: Story = {
  render: (args) => (
    <Text as="div">
      Roses are red,
      <Linebreak {...args} />
      Violets are blue,
      <Linebreak {...args} />
      Sugar is sweet,
      <Linebreak {...args} />
      And so are you.
    </Text>
  ),
};
