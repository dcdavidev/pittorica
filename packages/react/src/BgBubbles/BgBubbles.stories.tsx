import type { Meta, StoryObj } from '@storybook/react';

import BgBubbles from './BgBubbles.js';

const meta: Meta<typeof BgBubbles> = {
  title: 'Backgrounds/BgBubbles',
  component: BgBubbles,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    animationSpeed: {
      control: { type: 'number', min: 5, max: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { height: '100vh' },
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Background Bubbles</h1>
        <p>Animated background bubbles with customizable colors and speed.</p>
      </div>
    ),
  },
};

export const FewBubbles: Story = {
  args: {
    style: { height: '100vh' },
    colors: ['#08A4BD', '#FF6B9D', '#00FF88', '#FF9800', '#9D4EDD'],
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Fewer Bubbles</h1>
        <p>Only 5 bubbles for a subtler effect.</p>
      </div>
    ),
  },
};

export const FastAnimation: Story = {
  args: {
    style: { height: '100vh' },
    animationSpeed: 5,
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Fast Animation</h1>
        <p>Bubbles animate quickly.</p>
      </div>
    ),
  },
};
