import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Button } from '../Button/Button.jsx';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Layout/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xlarge', 'screen'],
      description: 'Height of the hero section',
    },
    maxWidth: {
      control: 'select',
      options: [
        'none',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        'screen',
      ],
      description: 'Maximum width of the content container',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    shape: {
      control: 'select',
      options: ['none', 'rounded', 'circle'],
    },
    backgroundStyle: {
      control: 'select',
      options: ['none', 'glass', 'blured', 'darken', 'waves', 'bubbles'],
    },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

const DummyContent = () => (
  <div style={{ color: 'inherit', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
      Hero Title
    </h1>
    <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
      This is a subtitle describing the hero section actions. It creates enough
      text to show how the container constraints the width.
    </p>
  </div>
);

export const Default: Story = {
  args: {
    size: 'medium',
    maxWidth: 'large',
    color: '#e2e8f0',
    children: <DummyContent />,
  },
};

export const WithImageAndOverlay: Story = {
  args: {
    size: 'large',
    maxWidth: 'large',
    backgroundImage:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    backgroundStyle: 'darken',
    children: (
      <div style={{ color: 'white' }}>
        <DummyContent />
      </div>
    ),
  },
};

export const GlassEffect: Story = {
  args: {
    size: 'medium',
    maxWidth: 'large',
    backgroundImage:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    backgroundStyle: 'glass',
    shape: 'rounded',
    children: <DummyContent />,
  },
};

export const BrandColor: Story = {
  args: {
    size: 'small',
    maxWidth: 'medium',
    color: '#3182ce', // Brand Blue
    children: (
      <div style={{ color: 'white' }}>
        <DummyContent />
      </div>
    ),
  },
};

/**
 * Demonstrates a full-screen hero with content constrained to a small column.
 * Useful for focused landing pages.
 */
export const ConstrainedContent: Story = {
  args: {
    size: 'screen',
    maxWidth: 'small', // Contenuto stretto (~640px)
    color: '#edf2f7',
    children: (
      <>
        <DummyContent />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <small>
            Notice how narrow this content is compared to the screen width.
          </small>
        </div>
      </>
    ),
  },
};

export const FullScreen: Story = {
  args: {
    size: 'screen',
    maxWidth: 'large',
    color: '#2d3748',
    children: (
      <div style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
        <DummyContent />
        <Button>Call to Action</Button>
      </div>
    ),
  },
};
