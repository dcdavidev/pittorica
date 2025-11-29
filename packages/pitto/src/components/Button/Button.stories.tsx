import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Stack } from '../Stack/Stack.js';
import { Button, type ButtonProps } from './Button.js';

const PlaceholderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const meta: Meta<ButtonProps> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'tonal', 'elevated'],
      description:
        'The visual style variant according to Material Design 3 Expressive.',
      table: { defaultValue: { summary: 'filled' } },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button.',
      table: { defaultValue: { summary: 'medium' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to full width.',
      table: { defaultValue: { summary: 'false' } },
    },
    startDecorator: {
      control: false,
      description: 'Icon before the text.',
    },
    endDecorator: {
      control: false,
      description: 'Icon after the text.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'The button content (text).',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const FilledButton: Story = {
  args: {
    children: 'Confirm Action',
    variant: 'filled',
  },
};

export const OutlinedButton: Story = {
  args: {
    children: 'Secondary Action',
    variant: 'outlined',
  },
};

export const TonalButton: Story = {
  args: {
    children: 'Tonal Action',
    variant: 'tonal',
  },
};

export const TextButton: Story = {
  args: {
    children: 'Low Emphasis',
    variant: 'text',
  },
};

export const SizeVariants: Story = {
  render: (args) => (
    <Stack gap="medium" align="center" direction="horizontal">
      <Button {...args} size="small">
        Small Button
      </Button>
      <Button {...args} size="medium">
        Medium Button
      </Button>
      <Button {...args} size="large">
        Large Button
      </Button>
    </Stack>
  ),
  args: {
    variant: 'filled',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: 'Next Step',
    variant: 'filled',
    startDecorator: <PlaceholderIcon />,
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Cannot Proceed',
    variant: 'filled',
    disabled: true,
  },
};

export const FullWidthExample: Story = {
  args: {
    children: 'Save All Changes',
    variant: 'filled',
    size: 'large',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
