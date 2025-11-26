import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from '../Surface/Surface.js';
import { Container, CONTAINER_SIZES } from './Container.js';

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Layouts/Container',
  argTypes: {
    size: {
      control: 'select',
      options: CONTAINER_SIZES,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => (
      <Container
        size="none"
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
  <Surface p="medium" shape="none" elevation={200}>
    Container Playground
  </Surface>
);

type Story = StoryObj<typeof Container>;
export const Playground: Story = {
  args: {
    size: 'xlarge',
    children: Content,
  },
};
