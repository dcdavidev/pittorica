import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors';
import { ELEVATION_TOKEN } from '../../types/elevation';
import { SHAPE_TOKEN } from '../../types/shapes';
import { Surface } from './Surface.js';

const meta = {
  title: 'Components/Surface',
  component: Surface,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', ...COLOR_TOKEN],
    },
    elevation: {
      control: { type: 'select' },
      options: [...ELEVATION_TOKEN],
    },
    shape: {
      control: { type: 'select' },
      options: [...SHAPE_TOKEN],
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: 'default',
    elevation: 'none',
    shape: 'none',
    children: (
      <div style={{ padding: '1rem' }}>
        <h3>Surface Content</h3>
        <p>
          This is a surface component with customizable color, elevation, and
          shape.
        </p>
      </div>
    ),
  },
};

export const Colors: Story = {
  args: {
    elevation: 'md',
    shape: 'round',
    children: (
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h4>Color Variants</h4>
        <p>Test different color combinations</p>
      </div>
    ),
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}
    >
      <Surface {...args} color="default">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h4>Default</h4>
          <p>Neutral surface</p>
        </div>
      </Surface>
      <Surface {...args} color="primary">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h4>Primary</h4>
          <p>Primary color surface</p>
        </div>
      </Surface>
      <Surface {...args} color="secondary">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h4>Secondary</h4>
          <p>Secondary color surface</p>
        </div>
      </Surface>
      <Surface {...args} color="success">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <h4>Success</h4>
          <p>Success color surface</p>
        </div>
      </Surface>
    </div>
  ),
};

export const Elevations: Story = {
  args: {
    color: 'primary',
    shape: 'round',
    children: (
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h4>Elevation Test</h4>
        <p>Different shadow levels</p>
      </div>
    ),
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      }}
    >
      <Surface {...args} elevation="none">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>None</p>
        </div>
      </Surface>
      <Surface {...args} elevation="sm">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>SM</p>
        </div>
      </Surface>
      <Surface {...args} elevation="md">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>MD</p>
        </div>
      </Surface>
      <Surface {...args} elevation="lg">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>LG</p>
        </div>
      </Surface>
      <Surface {...args} elevation="xl">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>XL</p>
        </div>
      </Surface>
      <Surface {...args} elevation="2xl">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>2XL</p>
        </div>
      </Surface>
    </div>
  ),
};

export const Shapes: Story = {
  args: {
    color: 'secondary',
    elevation: 'md',
    children: (
      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h4>Shape Test</h4>
        <p>Different border radius</p>
      </div>
    ),
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      }}
    >
      <Surface {...args} shape="none">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>None</p>
        </div>
      </Surface>
      <Surface {...args} shape="square">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>Squared</p>
        </div>
      </Surface>
      <Surface {...args} shape="round">
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>Rounded</p>
        </div>
      </Surface>
      <Surface {...args} shape="circle">
        <div
          style={{
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>Circle</p>
        </div>
      </Surface>
    </div>
  ),
};
