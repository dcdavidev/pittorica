import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Checkbox, type CheckboxProps } from './Checkbox.js';

const meta: Meta<CheckboxProps> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" style={{ padding: '2rem' }}>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text displayed next to the checkbox.',
    },
    hasError: {
      control: 'boolean',
      description: 'Visually indicates an error state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
    },
    checked: {
      control: 'boolean',
      description: 'Controls the checked state.',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Sets the intermediate state (mutually exclusive with checked).',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    label: 'I accept the terms and conditions',
    checked: false,
    hasError: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Allow notifications',
    checked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Required field missing',
    checked: false,
    hasError: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option not available',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Preset option',
    disabled: true,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all/deselect all',
    indeterminate: true,
    checked: false,
  },
};

export const InteractiveToggle: Story = {
  render: (args) => {
    const { checked: initialChecked, onChange, ...restArgs } = args;

    const [isChecked, setIsChecked] = useState(initialChecked || false);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLLabelElement>
    ) => {
      // Only handle input change events
      if (
        'target' in e &&
        (e.target as HTMLInputElement).checked !== undefined
      ) {
        setIsChecked((e.target as HTMLInputElement).checked);
        if (onChange) {
          onChange(e as React.ChangeEvent<HTMLInputElement>);
        }
      } else {
        if (onChange) {
          onChange(e as React.FormEvent<HTMLLabelElement>);
        }
      }
    };

    return (
      <Checkbox
        {...restArgs}
        label="Toggle checkbox status"
        checked={isChecked}
        onChange={handleChange}
        indeterminate={false}
      />
    );
  },
  args: {
    checked: false,
    hasError: false,
    disabled: false,
  },
};
