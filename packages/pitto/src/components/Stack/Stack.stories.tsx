import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from '../Container/Container.js';
import { Surface } from '../Surface/Surface.js';
import { Stack, STACK_DIRECTIONS, STACK_GAPS } from './Stack.js';

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'Layouts/Stack',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    direction: {
      control: 'select',
      options: STACK_DIRECTIONS,
    },
    gap: {
      control: 'select',
      options: STACK_GAPS,
    },
  },

  decorators: [
    (Story) => (
      <Container
        size="large"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </Container>
    ),
  ],
};
export default meta;

const Content = (
  <>
    <Surface p="medium" elevation={100}>
      Container Playground
    </Surface>
    <Surface p="medium" elevation={200}>
      Container Playground
    </Surface>
    <Surface p="medium" elevation={300}>
      Container Playground
    </Surface>
  </>
);

type Story = StoryObj<typeof Stack>;
export const Playground: Story = {
  args: {
    children: Content,
    direction: 'vertical',
    gap: 'medium',
  },
};
