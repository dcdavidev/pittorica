import {
  IconCalendar,
  IconLock,
  IconMail,
  IconPhone,
  IconSearch,
  IconWorld,
} from '@tabler/icons-react';

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
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// --- STANDARD STATES ---

export const Default: Story = {
  args: {
    placeholder: 'Standard input',
    helperText: 'This is a standard helper text.',
  },
};

export const FilledVariant: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled variant',
    helperText: 'Works with filled variant too.',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error input',
    error: true,
    defaultValue: 'Invalid Value',
    helperText: 'Critical error: Invalid input detected.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    startDecorator: <IconSearch size={18} />,
    helperText: 'This field cannot be edited.',
  },
};

// --- INPUT TYPES ---

/**
 * Type: Password
 * Uses a secure mask.
 */
export const TypePassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
    startDecorator: <IconLock size={18} />,
    helperText: 'Must be at least 8 characters long.',
  },
};

/**
 * Type: Email
 * Optimized for email addresses.
 */
export const TypeEmail: Story = {
  args: {
    type: 'email',
    placeholder: 'john.doe@example.com',
    startDecorator: <IconMail size={18} />,
    helperText: "We'll never share your email with anyone else.",
  },
};

/**
 * Type: Number
 * numeric input with spinners (browser default).
 */
export const TypeNumber: Story = {
  args: {
    type: 'number',
    placeholder: 'Quantity',
    endDecorator: (
      <span style={{ fontSize: '0.8rem', color: 'gray' }}>PCS</span>
    ),
    helperText: 'Enter the number of items.',
    min: 0,
    max: 100,
  },
};

/**
 * Type: Search
 * Often includes a clear button in some browsers.
 */
export const TypeSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Search documentation...',
    startDecorator: <IconSearch size={18} />,
    helperText: 'Press enter to search.',
  },
};

/**
 * Type: Tel
 * Trigger numeric keyboard on mobile.
 */
export const TypeTel: Story = {
  args: {
    type: 'tel',
    placeholder: '+39 333 1234567',
    startDecorator: <IconPhone size={18} />,
    helperText: 'Include your country code.',
  },
};

/**
 * Type: URL
 * Validates web addresses.
 */
export const TypeUrl: Story = {
  args: {
    type: 'url',
    placeholder: 'https://mysite.com',
    startDecorator: <IconWorld size={18} />,
    helperText: 'Enter your website URL.',
  },
};

/**
 * Type: Date
 * Native date picker.
 */
export const TypeDate: Story = {
  args: {
    type: 'date',
    startDecorator: <IconCalendar size={18} />,
    helperText: 'Select your date of birth.',
  },
};

/**
 * Type: Time
 * Native time picker.
 */
export const TypeTime: Story = {
  args: {
    type: 'time',
    helperText: 'Select a time slot.',
  },
};

/**
 * Type: Color
 * Native color picker.
 */
export const TypeColor: Story = {
  args: {
    type: 'color',
    defaultValue: '#3182ce',
    helperText: 'Choose your brand color.',
    style: { cursor: 'pointer' },
  },
};

/**
 * Type: File
 * Basic file input styling.
 */
export const TypeFile: Story = {
  args: {
    type: 'file',
    helperText: 'Upload a PDF or JPG (max 5MB).',
    style: { padding: '8px 0' }, // Minor adjustment for file input quirks
  },
};
