import { IconMail, IconSearch } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{ padding: '20px', maxWidth: '400px' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outlined: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'filled',
  },
};

export const WithStartDecorator: Story = {
  args: {
    placeholder: 'Search...',
    startDecorator: <IconSearch />,
  },
};

export const WithEndDecorator: Story = {
  args: {
    placeholder: 'Enter amount',
    endDecorator: (
      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>EUR</span>
    ),
  },
};

export const WithBothDecorators: Story = {
  args: {
    placeholder: 'Email',
    startDecorator: <IconMail />,
    endDecorator: (
      <span style={{ fontSize: '0.75rem', color: 'green' }}>Verified</span>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error input',
    error: true,
    defaultValue: 'Invalid Value',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    startDecorator: <IconSearch />,
  },
};
