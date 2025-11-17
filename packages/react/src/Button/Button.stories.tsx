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
    startDecorator: {
      control: 'text',
      description: 'Element to display before the children',
    },
    endDecorator: {
      control: 'text',
      description: 'Element to display after the children',
    },
    focusStartDecorator: {
      control: 'text',
      description: 'Element to display before the children when focused',
    },
    focusEndDecorator: {
      control: 'text',
      description: 'Element to display after the children when focused',
    },
    activeStartDecorator: {
      control: 'text',
      description: 'Element to display before the children when active',
    },
    activeEndDecorator: {
      control: 'text',
      description: 'Element to display after the children when active',
    },
    successStartDecorator: {
      control: 'text',
      description:
        'Element to display before the children when success is true',
    },
    successEndDecorator: {
      control: 'text',
      description: 'Element to display after the children when success is true',
    },
    errorStartDecorator: {
      control: 'text',
      description: 'Element to display before the children when error is true',
    },
    errorEndDecorator: {
      control: 'text',
      description: 'Element to display after the children when error is true',
    },
    loadingDecorator: {
      control: 'text',
      description: 'Element to display when loading is true',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    success: {
      control: 'boolean',
      description: 'Success state',
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

export const WithDecorators = {
  args: {
    variant: 'filled',
    children: 'Button',
    startDecorator: '🚀',
    endDecorator: '⭐',
  },
};

export const WithStatusDecorators = {
  args: {
    variant: 'filled',
    children: 'Button',
    success: true,
    successStartDecorator: '✅',
    successEndDecorator: '🎉',
  },
};

export const Loading = {
  args: {
    variant: 'filled',
    children: 'Button',
    loading: true,
    loadingText: 'Loading...',
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
            Elevated:
          </span>
          <Button variant="elevated" shape="round">
            Elevated
          </Button>
          <Button variant="elevated" shape="square">
            Elevated
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Filled:
          </span>
          <Button variant="filled" shape="round">
            Filled
          </Button>
          <Button variant="filled" shape="square">
            Filled
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Tonal:
          </span>
          <Button variant="tonal" shape="round">
            Tonal
          </Button>
          <Button variant="tonal" shape="square">
            Tonal
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Outlined:
          </span>
          <Button variant="outlined" shape="round">
            Outlined
          </Button>
          <Button variant="outlined" shape="square">
            Outlined
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Text:
          </span>
          <Button variant="text" shape="round">
            Text
          </Button>
          <Button variant="text" shape="square">
            Text
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Sizes:
          </span>
          <Button variant="filled" size="xs">
            XS
          </Button>
          <Button variant="filled" size="sm">
            SM
          </Button>
          <Button variant="filled" size="md">
            MD
          </Button>
          <Button variant="filled" size="lg">
            LG
          </Button>
          <Button variant="filled" size="xl">
            XL
          </Button>
        </Stack>
        <Stack gap="0.5rem" direction="horizontal" alignItems="center">
          <span
            style={{ minWidth: '80px', fontSize: '0.875rem', color: '#666' }}
          >
            Colors:
          </span>
          <Button variant="filled" color="primary">
            Primary
          </Button>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
          <Button variant="filled" color="tertiary">
            Tertiary
          </Button>
          <Button variant="filled" color="error">
            Error
          </Button>
          <Button variant="filled" color="success">
            Success
          </Button>
        </Stack>
      </Stack>
    </Container>
  ),
};
