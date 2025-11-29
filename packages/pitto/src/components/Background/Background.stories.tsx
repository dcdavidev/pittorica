import type { Meta, StoryObj } from '@storybook/react';

import { pitto } from '../../styles/contract.css.js';
import { Box } from '../Box/Box.js';
import { Heading } from '../Heading/Heading.js';
import { Inline } from '../Inline/Inline.js';
import { Background, type BackgroundProps } from './Background.js';

const meta: Meta<BackgroundProps> = {
  title: 'Components/Background',
  component: Background,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bubbles', 'beams', 'jupiter', 'moon'],
      description: 'Visual style of the background',
    },
    animationSpeed: {
      control: { type: 'range', min: 5, max: 60, step: 1 },
      description: 'Speed of animation (bubbles only)',
    },
    colors: {
      control: 'object',
      description: 'Array of hex color strings for bubbles or beams',
    },
  },
};

export default meta;
type Story = StoryObj<BackgroundProps>;

/**
 * Default Bubbles background.
 * Acts as an absolute layer covering the parent.
 */
export const Bubbles: Story = {
  args: {
    variant: 'bubbles',
    animationSpeed: 15,
  },
};

/**
 * Bubbles with custom colors.
 */
export const CustomColors: Story = {
  args: {
    variant: 'bubbles',
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'],
    animationSpeed: 15,
  },
};

/**
 * Background acting as a container for content.
 */
export const AsContainer: Story = {
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100vh' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Heading variant="display" size="large">
          <Inline bold>Welcome to @pittorica/pitto</Inline>
        </Heading>
        <Heading variant="headline" size="large">
          A beautiful design system
        </Heading>
      </Box>
    </Background>
  ),
};

/**
 * Beams background.
 * Uses a dark background by default to make beams pop.
 */
export const Beams: Story = {
  args: {
    variant: 'beams',
    colors: ['brand'],
  },
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100vh' }}>
      <Box
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <Heading
          variant="display"
          size="large"
          style={{ letterSpacing: pitto.spacing.large }}
        >
          Beams
        </Heading>
      </Box>
    </Background>
  ),
};

/**
 * Background using a static image URL.
 * Demonstrates the 'image' variant with cover behavior.
 */
export const Image: Story = {
  args: {
    variant: 'image',
    imageUrl: 'https://picsum.photos/1200/800',
  },
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100vh', minHeight: '400px' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          textShadow: '0 0 10px rgba(0,0,0,0.9)',
        }}
      >
        <Heading variant="display" size="large">
          Image Background
        </Heading>
        <Heading variant="headline" size="large">
          (Cover Mode)
        </Heading>
      </Box>
    </Background>
  ),
};
