import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Box } from '../Box/Box.js';
import { Heading } from '../Heading/Heading.js';
import { Inline } from '../Inline/Inline.js';
import { Background, BackgroundProps } from './Background';

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
      options: ['bubbles'],
    },
    animationSpeed: {
      control: { type: 'range', min: 5, max: 60, step: 1 },
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
  },
};

/**
 * Bubbles with custom colors.
 */
export const CustomColors: Story = {
  args: {
    variant: 'bubbles',
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'],
  },
};

/**
 * Background acting as a container for content.
 */
export const AsContainer: Story = {
  render: (args) => (
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
