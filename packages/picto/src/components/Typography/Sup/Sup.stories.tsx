import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sup } from './Sup.js';

const meta = {
  title: 'Typography/Sup',
  component: Sup,
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
} satisfies Meta<typeof Sup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '2',
  },
  render: (args) => (
    <p>
      E = mc<Sup {...args}>2</Sup>
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
        10
        <Sup {...args} size="body-lg">
          2
        </Sup>
      </p>
      <p>
        10
        <Sup {...args} size="body-md">
          2
        </Sup>
      </p>
      <p>
        10
        <Sup {...args} size="body-sm">
          2
        </Sup>
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
        x
        <Sup {...args} weight="bold" color="primary">
          2
        </Sup>
      </p>
      <p>
        e
        <Sup {...args} italic color="secondary">
          iπ
        </Sup>{' '}
        + 1 = 0
      </p>
      <p>
        Footnote
        <Sup {...args} align="center" color="tertiary">
          1
        </Sup>
      </p>
    </>
  ),
};
