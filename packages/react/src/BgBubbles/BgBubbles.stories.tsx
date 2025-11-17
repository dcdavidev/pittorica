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
    interactive: {
      control: 'boolean',
    },
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
        <p>Move your mouse to interact with the bubbles!</p>
      </div>
    ),
  },
};

export const NonInteractive: Story = {
  args: {
    style: { height: '100vh' },
    interactive: false,
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Static Bubbles</h1>
        <p>The bubbles don't react to mouse movement.</p>
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
