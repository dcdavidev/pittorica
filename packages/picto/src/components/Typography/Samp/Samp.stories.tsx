import type { Meta, StoryObj } from '@storybook/react-vite';

import { Samp } from './Samp.js';

const meta = {
  title: 'Typography/Samp',
  component: Samp,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'body-lg',
        'body-md',
        'body-sm',
        'label-lg',
        'label-md',
        'label-sm',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    lineHeight: {
      control: { type: 'select' },
      options: ['normal', 'tight', 'loose'],
    },
    letterSpacing: {
      control: { type: 'select' },
      options: ['normal', 'wide', 'wider'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'error',
        'success',
        'info',
        'warning',
      ],
    },
    italic: {
      control: { type: 'boolean' },
    },
    pre: {
      control: { type: 'boolean' },
    },
    noMargins: {
      control: { type: 'boolean' },
    },
    html: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Samp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Sample output from a program.',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Sample output with different sizes.',
  },
  render: (args) => (
    <>
      <Samp {...args} size="body-lg">
        Body Large: Error 404: File not found.
      </Samp>
      <Samp {...args} size="body-md">
        Body Medium: Error 404: File not found.
      </Samp>
      <Samp {...args} size="body-sm">
        Body Small: Error 404: File not found.
      </Samp>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'Styled sample output.',
  },
  render: (args) => (
    <>
      <Samp {...args} weight="bold" color="error">
        Bold error sample
      </Samp>
      <Samp {...args} italic color="info">
        Italic info sample
      </Samp>
      <Samp {...args} align="center" color="success">
        Centered success sample
      </Samp>
    </>
  ),
};
