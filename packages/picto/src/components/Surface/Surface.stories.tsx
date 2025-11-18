import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors';
import { ELEVATION_TOKEN } from '../../types/elevation';
import { SHAPE_TOKEN } from '../../types/shapes';
import { Container } from '../Container/Container.js';
import { Grid, GridItem } from '../Grid/index.js';
import { Typography } from '../Typography/Typography';
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
      <Surface style={{ padding: '1rem' }}>
        <Typography size="headline-sm">Surface Content</Typography>
        <Typography size="body-md">
          This is a surface component with customizable color, elevation, and
          shape.
        </Typography>
      </Surface>
    ),
  },
};

export const Colors: Story = {
  args: {
    elevation: 'md',
    shape: 'round',
    children: (
      <Surface style={{ padding: '1rem' }}>
        <Typography size="headline-sm">Color Variants</Typography>
        <Typography size="body-md">
          Test different color combinations
        </Typography>
      </Surface>
    ),
  },
  render: (args) => (
    <Container>
      <Grid columns={4} gap="1rem">
        <GridItem>
          <Surface {...args} color="default" style={{ padding: '1rem' }}>
            <Typography size="headline-sm">Default</Typography>
            <Typography size="body-md">Neutral surface</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} color="primary" style={{ padding: '1rem' }}>
            <Typography size="headline-sm">Primary</Typography>
            <Typography size="body-md">Primary color surface</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} color="secondary" style={{ padding: '1rem' }}>
            <Typography size="headline-sm">Secondary</Typography>
            <Typography size="body-md">Secondary color surface</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} color="success" style={{ padding: '1rem' }}>
            <Typography size="headline-sm">Success</Typography>
            <Typography size="body-md">Success color surface</Typography>
          </Surface>
        </GridItem>
      </Grid>
    </Container>
  ),
};

export const Elevations: Story = {
  args: {
    color: 'primary',
    shape: 'round',
    children: (
      <Surface style={{ padding: '1rem' }}>
        <Typography size="headline-sm">Elevation Test</Typography>
        <Typography size="body-md">Different shadow levels</Typography>
      </Surface>
    ),
  },
  render: (args) => (
    <Container>
      <Grid columns={6} gap="1rem">
        <GridItem>
          <Surface {...args} elevation="none" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              None
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} elevation="sm" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              SM
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} elevation="md" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              MD
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} elevation="lg" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              LG
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} elevation="xl" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              XL
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} elevation="2xl" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              2XL
            </Typography>
          </Surface>
        </GridItem>
      </Grid>
    </Container>
  ),
};

export const Shapes: Story = {
  args: {
    color: 'tertiary',
    elevation: 'md',
    children: (
      <Surface style={{ padding: '1rem' }}>
        <Typography size="headline-sm">Shape Test</Typography>
        <Typography size="body-md">Different border radius</Typography>
      </Surface>
    ),
  },
  render: (args) => (
    <Container>
      <Grid columns={4} gap="1rem">
        <GridItem>
          <Surface {...args} shape="none" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              None
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} shape="square" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              Squared
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface {...args} shape="round" style={{ padding: '1rem' }}>
            <Typography size="body-md" align="center">
              Rounded
            </Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface
            {...args}
            shape="circle"
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography size="body-md" align="center">
              Circle
            </Typography>
          </Surface>
        </GridItem>
      </Grid>
    </Container>
  ),
};
