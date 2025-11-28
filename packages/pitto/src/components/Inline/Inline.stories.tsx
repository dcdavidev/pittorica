import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Text } from '../Text/Text.js';
import { Inline, type InlineProps } from './Inline.js';

const meta: Meta<InlineProps> = {
  title: 'Typography/Inline',
  component: Inline,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="fixed"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<InlineProps>;

export const BoldItalic: Story = {
  args: {
    bold: true,
    italic: true,
    children: 'Bold and Italic text',
  },
};

export const Highlight: Story = {
  args: {
    highlight: true,
    children: 'Highlighted text',
  },
};

export const Corrections: Story = {
  render: () => (
    <Text>
      The price is <Inline deleted>50€</Inline>{' '}
      <Inline inserted bold>
        30€
      </Inline>
      !
    </Text>
  ),
};

export const Formulas: Story = {
  render: () => (
    <Text>
      H<Inline sub>2</Inline>O is water. E = mc<Inline sup>2</Inline>.
    </Text>
  ),
};

export const SmallPrint: Story = {
  args: {
    small: true,
    children: 'Terms and conditions apply.',
  },
};
