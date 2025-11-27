import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Surface } from '../Surface/Surface.js';
import {
  Stack,
  STACK_ALIGNS,
  STACK_DIRECTIONS,
  STACK_JUSTIFIES,
  type StackProps,
} from './Stack.js';

const meta: Meta<StackProps> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Container
        size="none"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{ height: '100vh' }}
      >
        <Story />
      </Container>
    ),
  ],

  argTypes: {
    children: {
      control: false,
    },
    direction: {
      control: 'select',
      options: STACK_DIRECTIONS,
    },
    align: {
      control: 'select',
      options: STACK_ALIGNS,
    },
    justify: {
      control: 'select',
      options: STACK_JUSTIFIES,
    },
    gap: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<StackProps>;

const ExampleContent = () => (
  <>
    <Surface padding="large" elevation={1} color="brand">
      Surface 1
    </Surface>
    <Surface padding="large" elevation={2} color="brand">
      Surface 2
    </Surface>
    <Surface padding="large" elevation={3} color="brand">
      Surface 3
    </Surface>
  </>
);

export const Playground: Story = {
  args: {
    children: <ExampleContent />,
  },
};
