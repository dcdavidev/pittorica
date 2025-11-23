import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Container, ContainerProps } from './Container';

const meta: Meta<ContainerProps> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      description: 'The maximum width of the container.',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ContainerProps>;

/**
 * Default container (large size).
 * Background color added for visibility.
 */
export const Default: Story = {
  args: {
    children: 'Container Content (Large)',
    size: 'large',
    style: {
      backgroundColor: '#e2e8f0',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

/**
 * Small container.
 * Useful for narrow content like forms or articles.
 */
export const Small: Story = {
  args: {
    children: 'Small Container',
    size: 'small',
    style: {
      backgroundColor: '#cbd5e0',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

/**
 * None container.
 * Full width with NO padding.
 */
export const None: Story = {
  args: {
    children: 'Full Width (No Padding)',
    size: 'none',
    style: {
      backgroundColor: '#a0aec0',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};
