import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Button } from './Button.js';

/**
 * Button component following Material Design 3 principles.
 * Supports multiple variants, sizes, and states.
 */
const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'elevated', 'text'],
      description: 'The visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'small', 'medium', 'large', 'xl'],
      description: 'The size of the button',
    },
    shape: {
      control: 'select',
      options: ['round', 'square'],
      description: 'The shape of the button (round or square)',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the button is in selected/toggled state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default filled button
 */
export const Filled: Story = {
  args: {
    children: 'Filled Button',
    variant: 'filled',
  },
};

/**
 * Tonal variant with subtle background
 */
export const Tonal: Story = {
  args: {
    children: 'Tonal Button',
    variant: 'tonal',
  },
};

/**
 * Outlined variant with border
 */
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
};

/**
 * Elevated variant with shadow
 */
export const Elevated: Story = {
  args: {
    children: 'Elevated Button',
    variant: 'elevated',
  },
};

/**
 * Text variant (ghost button)
 */
export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

/**
 * Extra small size button
 */
export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small',
    size: 'xs',
  },
};

/**
 * Small size button (default)
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

/**
 * Medium size button
 */
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

/**
 * Large size button
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

/**
 * Extra large size button
 */
export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl',
  },
};

/**
 * Round shape (default)
 */
export const RoundShape: Story = {
  args: {
    children: 'Round Button',
    shape: 'round',
  },
};

/**
 * Square shape
 */
export const SquareShape: Story = {
  args: {
    children: 'Square Button',
    shape: 'square',
  },
};

/**
 * Selected/Toggle state
 */
export const Selected: Story = {
  args: {
    children: 'Selected',
    selected: true,
  },
};

/**
 * Toggle button example
 */
export const ToggleButton: Story = {
  args: {
    children: 'Toggle Me',
    variant: 'tonal',
    selected: false,
  },
};

/**
 * Button with start icon
 */
export const WithStartIcon: Story = {
  args: {
    children: 'Save',
    startIcon: '💾',
    variant: 'filled',
  },
};

/**
 * Button with end icon
 */
export const WithEndIcon: Story = {
  args: {
    children: 'Next',
    endIcon: '→',
    variant: 'filled',
  },
};

/**
 * Button with both icons
 */
export const WithBothIcons: Story = {
  args: {
    children: 'Download',
    startIcon: '⬇️',
    endIcon: '📁',
    variant: 'tonal',
  },
};

/**
 * Disabled button
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Loading button
 */
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Button variant="filled">Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size="xs">Extra Small</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

/**
 * All shapes showcase
 */
export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button shape="round">Round</Button>
      <Button shape="square">Square</Button>
    </div>
  ),
};

/**
 * Selected states showcase
 */
export const SelectedStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="filled" selected={false}>
          Not Selected
        </Button>
        <Button variant="filled" selected={true}>
          Selected
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="tonal" selected={false}>
          Not Selected
        </Button>
        <Button variant="tonal" selected={true}>
          Selected
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button variant="outlined" selected={false}>
          Not Selected
        </Button>
        <Button variant="outlined" selected={true}>
          Selected
        </Button>
      </div>
    </div>
  ),
};

/**
 * Button as link (href)
 */
export const AsLink: Story = {
  args: {
    children: 'Go to Google',
    href: 'https://google.com',
    variant: 'filled',
  },
};

/**
 * Link button with target blank
 */
export const LinkTargetBlank: Story = {
  args: {
    children: 'Open in New Tab',
    href: 'https://github.com',
    target: '_blank',
    variant: 'outlined',
    endIcon: '↗',
  },
};

/**
 * Disabled link button
 */
export const DisabledLink: Story = {
  args: {
    children: 'Disabled Link',
    href: 'https://example.com',
    disabled: true,
    variant: 'tonal',
  },
};

/**
 * Navigation examples
 */
export const NavigationExamples: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      <Button href="/" variant="filled">
        Home
      </Button>
      <Button href="/about" variant="tonal">
        About
      </Button>
      <Button
        href="https://google.com"
        target="_blank"
        variant="outlined"
        endIcon="↗"
      >
        External Link
      </Button>
      <Button href="/disabled" disabled variant="text">
        Disabled Link
      </Button>
    </div>
  ),
};

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    children: 'Click me!',
    variant: 'filled',
    size: 'medium',
    startIcon: '🚀',
  },
};
