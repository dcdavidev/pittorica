import { Box } from '../Box/Box.js';
import { Container } from './Container.js';

export default {
  title: 'Pittorica/Container',
  component: Container,
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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid'],
      description: 'Container size variant',
    },
    styles: {
      control: 'object',
      description: 'Inline styles',
    },
  },
};

export const Default = {
  args: {
    children: (
      <Box color="surface" styles={{ padding: '1rem', minHeight: '4rem' }}>
        This is content in a default responsive container
      </Box>
    ),
  },
};

export const ExtraSmall = {
  args: {
    size: 'xs',
    children: (
      <Box color="primary" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Extra small container (24rem max-width)
      </Box>
    ),
  },
};

export const Small = {
  args: {
    size: 'sm',
    children: (
      <Box color="secondary" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Small container (36rem max-width)
      </Box>
    ),
  },
};

export const Medium = {
  args: {
    size: 'md',
    children: (
      <Box color="tertiary" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Medium container (48rem max-width)
      </Box>
    ),
  },
};

export const Large = {
  args: {
    size: 'lg',
    children: (
      <Box color="success" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Large container (64rem max-width)
      </Box>
    ),
  },
};

export const ExtraLarge = {
  args: {
    size: 'xl',
    children: (
      <Box color="info" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Extra large container (75rem max-width)
      </Box>
    ),
  },
};

export const Fluid = {
  args: {
    size: 'fluid',
    children: (
      <Box color="warning" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Fluid container (full viewport width)
      </Box>
    ),
  },
};

export const AsMain = {
  args: {
    as: 'main',
    children: (
      <Box color="error" styles={{ padding: '1rem', minHeight: '4rem' }}>
        Container rendered as main element
      </Box>
    ),
  },
};
