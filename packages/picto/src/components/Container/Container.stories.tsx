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
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'The maximum width of the container.',
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
    children: 'Container Content',
    size: 'lg',
    style: { backgroundColor: '#e2e8f0', height: '200px' }, // Visual aid
  },
};

/**
 * Small container.
 */
export const Small: Story = {
  args: {
    children: 'Small Container',
    size: 'sm',
    style: { backgroundColor: '#cbd5e0', height: '200px' },
  },
};

/**
 * Full width container.
 */
export const Full: Story = {
  args: {
    children: 'Full Width Container',
    size: 'full',
    style: { backgroundColor: '#a0aec0', height: '200px' },
  },
};
