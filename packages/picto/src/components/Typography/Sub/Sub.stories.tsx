import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sub } from './Sub.js';

const meta = {
  title: 'Typography/Sub',
  component: Sub,
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
} satisfies Meta<typeof Sub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'H',
  },
  render: (args) => (
    <p>
      E = mc<Sub {...args}>2</Sub>
    </p>
  ),
};

export const Sizes: Story = {
  args: {
    children: '2',
  },
  render: (args) => (
    <>
      <p>
        H
        <Sub {...args} size="body-lg">
          2
        </Sub>
        O
      </p>
      <p>
        H
        <Sub {...args} size="body-md">
          2
        </Sub>
        O
      </p>
      <p>
        H
        <Sub {...args} size="body-sm">
          2
        </Sub>
        O
      </p>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: '2',
  },
  render: (args) => (
    <>
      <p>
        CO
        <Sub {...args} weight="bold" color="primary">
          2
        </Sub>
      </p>
      <p>
        H
        <Sub {...args} italic color="secondary">
          2
        </Sub>
        O
      </p>
      <p>
        Chemical{' '}
        <Sub {...args} align="center" color="tertiary">
          formula
        </Sub>
      </p>
    </>
  ),
};
