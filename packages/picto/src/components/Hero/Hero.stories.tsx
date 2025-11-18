import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography/Typography.js';
import { Container } from '../Container/Container.js';
import { Hero } from './Hero.js';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'screen'],
    },
    background: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ textAlign: 'center' }}>
        <Typography size="display-lg" style={{ marginBottom: '1rem' }}>
          Welcome to Pittorica
        </Typography>
        <Typography size="body-lg">
          A modern design system for building beautiful interfaces
        </Typography>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <Typography size="title-lg">Small Hero Section</Typography>,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: <Typography size="headline-lg">Medium Hero Section</Typography>,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <Typography size="display-md">Large Hero Section</Typography>,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: (
      <Typography size="display-lg">Extra Large Hero Section</Typography>
    ),
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    size: 'xxl',
    children: (
      <Typography size="display-lg">Extra Extra Large Hero Section</Typography>
    ),
  },
};

export const FullScreen: Story = {
  args: {
    size: 'screen',
    children: (
      <div style={{ textAlign: 'center', color: 'white' }}>
        <Typography size="display-lg" style={{ marginBottom: '1rem' }}>
          Full Screen Hero
        </Typography>
        <Typography size="body-lg">
          This hero takes up the entire viewport height
        </Typography>
      </div>
    ),
  },
};

export const WithColorBackground: Story = {
  args: {
    size: 'lg',
    background: { variant: 'color', color: 'primary' },
    children: (
      <div style={{ textAlign: 'center' }}>
        <Typography
          size="display-md"
          style={{ marginBottom: '1rem', color: 'white' }}
        >
          Hero with Primary Background
        </Typography>
        <Typography size="body-lg" style={{ color: 'white' }}>
          Content with semantic color background
        </Typography>
      </div>
    ),
  },
};

export const WithCustomColorBackground: Story = {
  args: {
    size: 'lg',
    background: { variant: 'color', color: '#ff6b6b' },
    children: (
      <div style={{ textAlign: 'center' }}>
        <Typography
          size="display-md"
          style={{ marginBottom: '1rem', color: 'white' }}
        >
          Hero with Custom Background
        </Typography>
        <Typography size="body-lg" style={{ color: 'white' }}>
          Content with custom color background
        </Typography>
      </div>
    ),
  },
};

export const WithImageBackground: Story = {
  args: {
    size: 'screen',
    background: {
      variant: 'image',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    },
    children: (
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        <Typography size="display-lg" style={{ marginBottom: '1rem' }}>
          Hero with Image Background
        </Typography>
        <Typography size="body-lg">
          Beautiful landscape background image
        </Typography>
      </div>
    ),
  },
};

export const Contained: Story = {
  args: {
    size: 'lg',
    background: { variant: 'color', color: 'secondary' },
    children: (
      <Container size="lg">
        <div style={{ textAlign: 'center' }}>
          <Typography
            size="display-md"
            style={{ marginBottom: '1rem', color: 'white' }}
          >
            Contained Hero Content
          </Typography>
          <Typography size="body-lg" style={{ color: 'white' }}>
            This content is constrained to a maximum width and centered
          </Typography>
        </div>
      </Container>
    ),
  },
};

export const WithCSSClassBackground: Story = {
  args: {
    size: 'lg',
    className: 'picto-hero-bg-primary',
    children: (
      <div style={{ textAlign: 'center' }}>
        <Typography size="display-md" style={{ marginBottom: '1rem' }}>
          Hero with CSS Class Background
        </Typography>
        <Typography size="body-lg">
          Using picto-hero-bg-primary class for semantic background
        </Typography>
      </div>
    ),
  },
};
