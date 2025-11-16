import { Box } from '../Box/Box';
import { Stack } from './Stack';

export default {
  title: 'Layout/Stack',
  component: Stack,
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
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Stack direction',
    },
    gap: {
      control: 'text',
      description: 'Gap between items (CSS value)',
    },
    alignItems: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
      description: 'Cross-axis alignment',
    },
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Main-axis distribution',
    },
    styles: {
      control: 'object',
      description: 'Inline styles',
    },
  },
};

export const Vertical = {
  args: {
    children: (
      <>
        <Box color="primary" styles={{ padding: '1rem' }}>
          Item 1
        </Box>
        <Box color="secondary" styles={{ padding: '1rem' }}>
          Item 2
        </Box>
        <Box color="tertiary" styles={{ padding: '1rem' }}>
          Item 3
        </Box>
      </>
    ),
  },
};

export const Horizontal = {
  args: {
    direction: 'horizontal',
    children: (
      <>
        <Box color="success" styles={{ padding: '1rem' }}>
          Item 1
        </Box>
        <Box color="info" styles={{ padding: '1rem' }}>
          Item 2
        </Box>
        <Box color="warning" styles={{ padding: '1rem' }}>
          Item 3
        </Box>
      </>
    ),
  },
};

export const AsSection = {
  args: {
    as: 'section',
    children: (
      <>
        <Box color="error" styles={{ padding: '1rem' }}>
          Section Item 1
        </Box>
        <Box color="surface" styles={{ padding: '1rem' }}>
          Section Item 2
        </Box>
      </>
    ),
  },
};

export const WithCustomSpacing = {
  args: {
    direction: 'horizontal',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    children: (
      <>
        <Box color="primary" styles={{ padding: '1rem' }}>
          Start
        </Box>
        <Box color="secondary" styles={{ padding: '1rem' }}>
          Center
        </Box>
        <Box color="tertiary" styles={{ padding: '1rem' }}>
          End
        </Box>
      </>
    ),
  },
};
