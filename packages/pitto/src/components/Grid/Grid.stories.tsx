import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Surface } from '../Surface/Surface.js';
import {
  Grid,
  GRID_ALIGN_TOKENS,
  GRID_FLOW_TOKENS,
  GRID_GAP_TOKENS,
  GRID_JUSTIFY_TOKENS,
  type GridProps,
} from './Grid.js';

const meta: Meta<GridProps> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Container size="fixed" style={{ marginTop: 'calc(50vh - 2rem)' }}>
        <Story />
      </Container>
    ),
  ],

  argTypes: {
    children: {
      control: false,
    },
    columns: {
      control: 'object',
    },
    gap: {
      control: 'select',
      options: GRID_GAP_TOKENS,
    },
    flow: {
      control: 'select',
      options: GRID_FLOW_TOKENS,
    },
    align: {
      control: 'select',
      options: GRID_ALIGN_TOKENS,
    },
    justify: {
      control: 'select',
      options: GRID_JUSTIFY_TOKENS,
    },
  },
};

export default meta;
type Story = StoryObj<GridProps>;

const ExampleContent = () => (
  <>
    <Surface padding="medium" elevation={1} color="brand">
      <p>Grid Item 1</p>
    </Surface>
    <Surface padding="medium" elevation={2} color="black">
      <p>Grid Item 2</p>
    </Surface>
    <Surface padding="medium" elevation={9} color="white">
      <p>Grid Item 3</p>
    </Surface>
    <Surface padding="medium" elevation={3} color="info">
      <p>Grid Item 4</p>
    </Surface>
    <Surface padding="medium" elevation={5} color="success">
      <p>Grid Item 5</p>
    </Surface>
    <Surface padding="medium" elevation={6} color="warning">
      <p>Grid Item 6</p>
    </Surface>
    <Surface padding="medium" elevation={4} color="error">
      <p>Grid Item 7</p>
    </Surface>
    <Surface padding="medium" elevation={8} color="gray">
      <p>Grid Item 8</p>
    </Surface>
  </>
);

export const Default: Story = {
  args: {
    columns: { mobile: 1, tablet: 2, desktop: 4 },
    gap: 'medium',
    children: <ExampleContent />,
  },
};
