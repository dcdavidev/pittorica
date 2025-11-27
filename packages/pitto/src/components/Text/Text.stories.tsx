import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/index.js';
import { Container } from '../Container/Container.js';
import { Text, type TextProps } from './Text.js';

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" style={{ marginTop: 'calc(50vh - 2rem)' }}>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'figcaption'],
      description: 'Polymorphic prop to change the rendered HTML element.',
      table: { defaultValue: { summary: 'p' } },
    },
    variant: {
      control: 'radio',
      options: ['body', 'label'],
      description: 'The visual style variant.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the text.',
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
      description: 'Sprinkles color token.',
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Body: Story = {
  args: {
    children:
      'Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor. So if he into shot half many long. China fully him every fat was world grave.',
    variant: 'body',
    size: 'large',
  },
};

export const Label: Story = {
  args: {
    children: 'Form Label',
    variant: 'label',
    size: 'medium',
    as: 'label',
  },
};

export const ErrorMessage: Story = {
  args: {
    children: 'This field is required.',
    variant: 'body',
    size: 'small',
    color: 'error',
  },
};
