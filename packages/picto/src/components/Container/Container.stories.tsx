import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from '../Surface/Surface.jsx';
import { Typography } from '../Typography/Typography.jsx';
import { Container } from './Container.js';

const meta = {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid'],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'md',
    children: (
      <Surface color="primary" style={{ padding: '1rem' }}>
        <Typography size="headline-lg">Container</Typography>
        <Typography size="body-lg" paragraph>
          This Typography—"body-lg", paragraph—is inside a Surface component
          with color primary prop, which is itself inside a responsive container
          with max-width constraints and horizontal padding.
        </Typography>
      </Surface>
    ),
  },
};
