import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Switch, type SwitchProps } from './Switch.js';

const meta: Meta<SwitchProps> = {
  title: 'Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="fixed"
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text displayed next to the switch.',
    },
    hasError: {
      control: 'boolean',
      description: 'Visually indicates an error state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch.',
    },
    checked: {
      control: 'boolean',
      description: 'Controls the checked state.',
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    label: 'Disable dark mode',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Enable GPS',
    checked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Check permission',
    checked: true,
    hasError: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Feature locked',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Active feature (read only)',
    disabled: true,
    checked: true,
  },
};

export const InteractiveToggle: Story = {
  render: (args) => {
    const { checked: initialChecked, onChange, ...restArgs } = args;

    const [isChecked, setIsChecked] = useState(initialChecked || false);

    const handleChange: React.FormEventHandler<HTMLLabelElement> &
      React.ChangeEventHandler<HTMLInputElement> = (
      e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLLabelElement>
    ) => {
      // Handle both event types
      if (
        'target' in e &&
        (e.target as HTMLInputElement).checked !== undefined
      ) {
        const checked = (e.target as HTMLInputElement).checked;
        setIsChecked(checked);
      }
      if (onChange) {
        // @ts-expect-error: onChange expects ChangeEvent<HTMLInputElement>
        onChange(e);
      }
    };

    return (
      <Switch
        {...restArgs}
        label="Interactive mode"
        checked={isChecked}
        onChange={handleChange}
      />
    );
  },
  args: {
    checked: false,
    hasError: false,
    disabled: false,
  },
};
