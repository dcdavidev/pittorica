import type { Meta, StoryObj } from '@storybook/react-vite';

import { Sup } from '../Sup/Sup.js';
import { Var } from './Var.js';

const meta = {
  title: 'Typography/Var',
  component: Var,
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
} satisfies Meta<typeof Var>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'variable',
  },
  render: (args) => (
    <p>
      The area of a circle is π<Var {...args}>r</Var>
      <Sup>2</Sup>.
    </p>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'x',
  },
  render: (args) => (
    <>
      <p>
        f(
        <Var {...args} size="body-lg">
          x
        </Var>
        ) = x<Sup>2</Sup>
      </p>
      <p>
        f(
        <Var {...args} size="body-md">
          x
        </Var>
        ) = x<Sup>2</Sup>
      </p>
      <p>
        f(
        <Var {...args} size="body-sm">
          x
        </Var>
        ) = x<Sup>2</Sup>
      </p>
    </>
  ),
};

export const WithStyling: Story = {
  args: {
    children: 'variable',
  },
  render: (args) => (
    <>
      <p>
        Let{' '}
        <Var {...args} weight="bold" color="primary">
          n
        </Var>{' '}
        be a number.
      </p>
      <p>
        The{' '}
        <Var {...args} italic color="secondary">
          result
        </Var>{' '}
        is calculated.
      </p>
      <p>
        Variable{' '}
        <Var {...args} align="center" color="tertiary">
          name
        </Var>
      </p>
    </>
  ),
};
