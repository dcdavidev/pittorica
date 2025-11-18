import { Box } from '../Box/Box';
import { Grid } from './Grid';
import { GridItem } from './GridItem';

export default {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML element to render as',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    columns: {
      control: 'number',
      description: 'Number of columns',
    },
    gap: {
      control: 'text',
      description: 'Gap between items (CSS value)',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive breakpoints',
    },
    styles: {
      control: 'object',
      description: 'Inline styles',
    },
  },
};

export const Basic = {
  args: {
    children: (
      <>
        <GridItem span={6}>
          <Box color="primary" styles={{ padding: '1rem', minHeight: '4rem' }}>
            Span 6
          </Box>
        </GridItem>
        <GridItem span={3}>
          <Box
            color="secondary"
            styles={{ padding: '1rem', minHeight: '4rem' }}
          >
            Span 3
          </Box>
        </GridItem>
        <GridItem span={3}>
          <Box color="tertiary" styles={{ padding: '1rem', minHeight: '4rem' }}>
            Span 3
          </Box>
        </GridItem>
        <GridItem span={4}>
          <Box color="success" styles={{ padding: '1rem', minHeight: '4rem' }}>
            Span 4
          </Box>
        </GridItem>
        <GridItem span={4}>
          <Box color="info" styles={{ padding: '1rem', minHeight: '4rem' }}>
            Span 4
          </Box>
        </GridItem>
        <GridItem span={4}>
          <Box color="warning" styles={{ padding: '1rem', minHeight: '4rem' }}>
            Span 4
          </Box>
        </GridItem>
      </>
    ),
  },
};

export const CustomColumns = {
  args: {
    columns: 4,
    gap: '1rem',
    children: (
      <>
        <GridItem>
          <Box color="primary" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Col 1
          </Box>
        </GridItem>
        <GridItem>
          <Box
            color="secondary"
            styles={{ padding: '1rem', minHeight: '3rem' }}
          >
            Col 2
          </Box>
        </GridItem>
        <GridItem>
          <Box color="tertiary" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Col 3
          </Box>
        </GridItem>
        <GridItem>
          <Box color="success" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Col 4
          </Box>
        </GridItem>
      </>
    ),
  },
};

export const NonResponsive = {
  args: {
    responsive: false,
    children: (
      <>
        <GridItem span={3}>
          <Box color="error" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Fixed 3
          </Box>
        </GridItem>
        <GridItem span={3}>
          <Box color="surface" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Fixed 3
          </Box>
        </GridItem>
        <GridItem span={3}>
          <Box color="primary" styles={{ padding: '1rem', minHeight: '3rem' }}>
            Fixed 3
          </Box>
        </GridItem>
        <GridItem span={3}>
          <Box
            color="secondary"
            styles={{ padding: '1rem', minHeight: '3rem' }}
          >
            Fixed 3
          </Box>
        </GridItem>
      </>
    ),
  },
};
