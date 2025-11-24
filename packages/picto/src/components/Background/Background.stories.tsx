import type { Meta, StoryObj } from '@storybook/react';

import { themeClass, vars } from '../../styles/theme.css.js';
import { Box } from '../Box/Box.js';
import { Heading } from '../Heading/Heading.js';
import { Inline } from '../Inline/Inline.js';
import { Background, BackgroundProps } from './Background.js';

const meta: Meta<BackgroundProps> = {
  title: 'Components/Background',
  component: Background,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{
          width: '100%',
          height: '600px', // Fixed height for demonstration
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
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
    <Background {...args} style={{ height: '100%' }}>
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
          <Inline bold>Welcome to Picto</Inline>
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
    colors: ['#FFFFFF'],
  },
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100%', backgroundColor: 'black' }}>
      <Box
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Heading
          variant="display"
          size="large"
          color="textInverse"
          style={{ letterSpacing: vars.space.large }}
        >
          Beams
        </Heading>
      </Box>
    </Background>
  ),
};

/**
 * Jupiter planetary background.
 * Features animated gaseous bands and atmospheric glow using SVG filters.
 */
export const Jupiter: Story = {
  args: {
    variant: 'jupiter',
  },
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100%' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          // Text color chosen to complement the deep orange/brown palette of Jupiter
          color: '#FDEBD0',
          textShadow: '0 4px 12px rgba(0,0,0,0.8)',
        }}
      >
        <Heading variant="display" size="large" style={{ fontSize: '5rem' }}>
          JUPITER
        </Heading>
        <Heading variant="headline" size="medium">
          The Gas Giant
        </Heading>
      </Box>
    </Background>
  ),
};

/**
 * Moon surface background.
 * Features cratered rocky texture and lighting effects using SVG filters.
 */
export const Moon: Story = {
  args: {
    variant: 'moon',
  },
  render: (args: BackgroundProps) => (
    <Background {...args} style={{ height: '100%' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          textShadow: '0 4px 20px rgba(0,0,0,1)',
        }}
      >
        <Heading variant="display" size="large" color="light">
          MOON
        </Heading>
        <Heading variant="headline" size="medium" color="light">
          Lunar Surface
        </Heading>
      </Box>
    </Background>
  ),
};
