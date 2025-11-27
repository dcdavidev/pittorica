import type { Meta, StoryObj } from '@storybook/react';

import { SPACING_TOKENS } from '../../styles/contracts/spacing.css.js';
import { Surface } from '../Surface/Surface.js';
import {
  Container,
  CONTAINER_SIZES,
  type ContainerProps,
} from './Container.js';

const meta: Meta<ContainerProps> = {
  title: 'Layout/Container',
  component: Container,
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
    size: {
      control: 'select',
      options: CONTAINER_SIZES,
    },
    children: {
      control: false,
    },
    padding: {
      control: 'select',
      options: SPACING_TOKENS,
    },
  },
};

export default meta;
type Story = StoryObj<ContainerProps>;

const ExampleContent = () => (
  <Surface padding="large" elevation={1} color="brand">
    <h3>Container Playground</h3>
    <p>
      Village did removed enjoyed explain nor ham saw calling talking. Securing
      as informed declared or margaret. Joy horrible moreover man feelings own
      shy. Request norland neither mistake for yet. Between the for morning
      assured country believe. On even feet time have an no at. Relation so in
      confined smallest children unpacked delicate. Why sir end believe uncivil
      respect. Always get adieus nature day course for common. My little garret
      repair to desire he esteem.
    </p>
  </Surface>
);

export const Default: Story = {
  args: {
    children: <ExampleContent />,
    size: 'xlarge',
    padding: 'none',
  },
};
