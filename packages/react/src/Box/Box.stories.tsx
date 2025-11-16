import { Box } from './Box';

export default {
  title: 'Pittorica/Box',
  component: Box,
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
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'error',
        'success',
        'info',
        'warning',
        'surface',
        'background',
      ],
      description: 'Background color',
    },
    styles: {
      control: 'object',
      description: 'Inline styles',
    },
  },
};

export const Default = {
  args: {
    children: 'This is a transparent Box component',
  },
};

export const AsSection = {
  args: {
    as: 'section',
    children: 'Box rendered as section element',
  },
};

export const WithPrimaryColor = {
  args: {
    color: 'primary',
    children: 'Box with primary background and automatic light text contrast',
  },
};

export const WithErrorColor = {
  args: {
    color: 'error',
    children: 'Box with error background and automatic light text contrast',
  },
};

export const WithSuccessColor = {
  args: {
    color: 'success',
    children: 'Box with success background and automatic light text contrast',
  },
};

export const WithCustomStyles = {
  args: {
    styles: { padding: '1rem', margin: '0.5rem', border: '1px solid #ccc' },
    children: 'Box with custom inline styles',
  },
};
