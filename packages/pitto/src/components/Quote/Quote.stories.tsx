import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Quote, type QuoteProps } from './Quote.js';

const meta: Meta<QuoteProps> = {
  title: 'Typography/Quote',
  component: Quote,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the quote.',
    },
  },
};

export default meta;
type Story = StoryObj<QuoteProps>;

export const Playground: Story = {
  args: {
    cite: 'https://www.apple.com/steve-jobs-quotes/',
    children: 'The only way to do great work is to love what you do.',
  },
};
