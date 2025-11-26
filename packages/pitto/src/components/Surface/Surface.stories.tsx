import type { Meta, StoryObj } from '@storybook/react-vite';

import { ELEVATION_PINS } from '../../styles/elevation.css.js';
import { Surface, SURFACE_SHAPES } from './Surface.js';

const meta = {
  component: Surface,
  title: 'Layouts/Surface',

  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 900, step: 100 },
    },
    padding: {
      control: 'select',
      options: ELEVATION_PINS,
    },
    shape: {
      control: 'select',
      options: SURFACE_SHAPES,
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Surface>;
export default meta;

type Story = StoryObj<typeof Surface>;

export const Playground: Story = {
  args: {
    elevation: 100,
    padding: 'medium',
    shape: 'rounded',
    children: 'Surface Playground',
  },
};
