import { Container } from '../Container/Container.jsx';
import { Stack } from '../Stack/Stack.jsx';
import { Button } from './Button.js';

export default {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'filled', 'tonal', 'outlined', 'text'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'error',
        'success',
        'info',
        'warning',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: { type: 'select' },
      options: ['round', 'square'],
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    children: 'Elevated Button',
  },
};

export const Filled = {
  args: {
    variant: 'filled',
    children: 'Filled Button',
  },
};

export const Small = {
  args: {
    variant: 'filled',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Square = {
  args: {
    variant: 'filled',
    shape: 'square',
    children: 'Square Button',
  },
};

export const ExtraSmall = {
  args: {
    variant: 'outlined',
    size: 'xs',
    children: 'XS',
  },
};

export const ExtraLarge = {
  args: {
    variant: 'filled',
    size: 'xl',
    children: 'Extra Large',
  },
};

export const Tonal = {
  args: {
    variant: 'tonal',
    children: 'Tonal Button',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Text = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const TonalTertiary = {
  args: {
    variant: 'tonal',
    children: 'Tonal Tertiary',
  },
};

export const FilledSecondary = {
  args: {
    variant: 'filled',
    color: 'secondary',
    children: 'Filled Secondary',
  },
};

export const OutlinedError = {
  args: {
    variant: 'outlined',
    color: 'error',
    children: 'Outlined Error',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllVariants = {
  render: () => (
    <Container size="md">
      <Stack gap="1rem" direction="vertical" alignItems="flex-start">
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Round:
          </span>
          <Button variant="filled" shape="round">
            Filled
          </Button>
          <Button variant="outlined" shape="round">
            Outlined
          </Button>
          <Button variant="text" shape="round">
            Text
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Square:
          </span>
          <Button variant="filled" shape="square">
            Filled
          </Button>
          <Button variant="outlined" shape="square">
            Outlined
          </Button>
          <Button variant="text" shape="square">
            Text
          </Button>
        </Stack>
      </Stack>
    </Container>
  ),
};
