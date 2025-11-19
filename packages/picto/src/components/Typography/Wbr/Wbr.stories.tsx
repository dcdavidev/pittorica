import type { Meta, StoryObj } from '@storybook/react-vite';

import { Wbr } from './Wbr.js';

const meta = {
  title: 'Typography/Wbr',
  component: Wbr,
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
} satisfies Meta<typeof Wbr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: '200px', border: '1px solid black' }}>
      <p>
        Thisisaverylongwordthatmightbreak
        <Wbr {...args} />
        here.
      </p>
    </div>
  ),
};

export const WithStyling: Story = {
  render: (args) => (
    <>
      <div style={{ width: '150px', border: '1px solid black' }}>
        <p>
          Supercalifragilisticexpialidocious
          <Wbr {...args} weight="bold" />
        </p>
      </div>
    </>
  ),
};
