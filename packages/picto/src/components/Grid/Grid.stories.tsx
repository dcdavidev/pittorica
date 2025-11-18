import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from '../Surface/Surface.js';
import { Typography } from '../Typography/Typography.js';
import { Grid } from './Grid.js';
import { GridItem } from './GridItem.js';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'number' },
      description: 'Number of columns in the grid',
    },
    gap: {
      control: { type: 'text' },
      description: 'Gap between grid items (CSS value)',
    },
    responsive: {
      control: { type: 'boolean' },
      description: 'Enable responsive behavior that stacks on mobile',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    columns: 12,
    gap: '1rem',
    responsive: true,
    children: (
      <>
        <GridItem span={6}>
          <Surface
            color="primary"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 6</Typography>
          </Surface>
        </GridItem>
        <GridItem span={3}>
          <Surface
            color="secondary"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 3</Typography>
          </Surface>
        </GridItem>
        <GridItem span={3}>
          <Surface
            color="success"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 3</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="primary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 4</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="secondary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 4</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="success"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Span 4</Typography>
          </Surface>
        </GridItem>
      </>
    ),
  },
};

export const Basic: Story = {
  args: {
    children: (
      <>
        <GridItem span={6}>
          <Surface
            color="primary"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Half width</Typography>
          </Surface>
        </GridItem>
        <GridItem span={6}>
          <Surface
            color="secondary"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">Half width</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="success"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">One third</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="primary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">One third</Typography>
          </Surface>
        </GridItem>
        <GridItem span={4}>
          <Surface
            color="secondary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '4rem' }}
          >
            <Typography size="body-lg">One third</Typography>
          </Surface>
        </GridItem>
      </>
    ),
  },
};

export const CustomColumns: Story = {
  args: {
    columns: 4,
    gap: '1rem',
    children: (
      <>
        <GridItem>
          <Surface
            color="primary"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Column 1</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface
            color="secondary"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Column 2</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface
            color="success"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Column 3</Typography>
          </Surface>
        </GridItem>
        <GridItem>
          <Surface
            color="primary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Column 4</Typography>
          </Surface>
        </GridItem>
      </>
    ),
  },
};

export const NonResponsive: Story = {
  args: {
    responsive: false,
    children: (
      <>
        <GridItem span={3}>
          <Surface
            color="primary"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Fixed 3 cols</Typography>
          </Surface>
        </GridItem>
        <GridItem span={3}>
          <Surface
            color="secondary"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Fixed 3 cols</Typography>
          </Surface>
        </GridItem>
        <GridItem span={3}>
          <Surface
            color="success"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Fixed 3 cols</Typography>
          </Surface>
        </GridItem>
        <GridItem span={3}>
          <Surface
            color="primary"
            elevation="sm"
            style={{ padding: '1rem', minHeight: '3rem' }}
          >
            <Typography size="body-md">Fixed 3 cols</Typography>
          </Surface>
        </GridItem>
      </>
    ),
  },
};

export const ComplexLayout: Story = {
  args: {
    gap: '1.5rem',
    children: (
      <>
        {/* Header spanning full width */}
        <GridItem span={12}>
          <Surface
            color="primary"
            elevation="md"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <Typography size="headline-lg">Full Width Header</Typography>
          </Surface>
        </GridItem>

        {/* Main content area */}
        <GridItem span={8}>
          <Surface
            color="default"
            style={{ padding: '1.5rem', minHeight: '12rem' }}
          >
            <Typography size="headline-md" paragraph>
              Main Content
            </Typography>
            <Typography size="body-lg">
              This is the main content area that spans 8 columns out of 12. It
              contains the primary information and takes up most of the space.
            </Typography>
          </Surface>
        </GridItem>

        {/* Sidebar */}
        <GridItem span={4}>
          <Surface
            color="secondary"
            elevation="sm"
            style={{ padding: '1.5rem', minHeight: '12rem' }}
          >
            <Typography size="headline-sm" paragraph>
              Sidebar
            </Typography>
            <Typography size="body-md">
              Additional content or navigation can go here in the sidebar area.
            </Typography>
          </Surface>
        </GridItem>

        {/* Footer */}
        <GridItem span={12}>
          <Surface
            color="default"
            elevation="sm"
            style={{ padding: '1rem', textAlign: 'center' }}
          >
            <Typography size="body-sm">Footer spanning full width</Typography>
          </Surface>
        </GridItem>
      </>
    ),
  },
};
