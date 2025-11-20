import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Box } from '../Box/Box.js';
import { Container } from '../Container/Container';
import { Stack, StackProps } from './Stack';

const meta: Meta<StackProps> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container className={themeClass}>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
    },
  },
};

export default meta;
type Story = StoryObj<StackProps>;

const Placeholder = ({
  width = '100%',
  height = '50px',
  color = '#3182ce',
}) => (
  <Box
    style={{ width, height, backgroundColor: color, borderRadius: '4px' }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="light"
  >
    Item
  </Box>
);

/**
 * Default vertical stack.
 */
export const Vertical: Story = {
  args: {
    direction: 'column',
    gap: 'medium',
    children: (
      <>
        <Placeholder color="#3182ce" />
        <Placeholder color="#805ad5" />
        <Placeholder color="#d53f8c" />
      </>
    ),
  },
};

/**
 * Horizontal stack.
 */
export const Horizontal: Story = {
  args: {
    direction: 'row',
    gap: 'medium',
    children: (
      <>
        <Placeholder width="100px" color="#3182ce" />
        <Placeholder width="100px" color="#805ad5" />
        <Placeholder width="100px" color="#d53f8c" />
      </>
    ),
  },
};

/**
 * Nested stacks.
 */
export const Nested: Story = {
  render: () => (
    <Stack gap="large" style={{ border: '1px dashed #ccc', padding: '1rem' }}>
      <Box>Parent Stack (Column)</Box>
      <Stack direction="row" gap="medium">
        <Placeholder width="80px" color="#4299e1" />
        <Placeholder width="80px" color="#4299e1" />
      </Stack>
      <Stack direction="row" gap="medium" justify="space-between">
        <Placeholder width="80px" color="#48bb78" />
        <Placeholder width="80px" color="#48bb78" />
      </Stack>
    </Stack>
  ),
};

/**
 * Responsive direction (row on desktop, column on mobile).
 * Resize the viewport to see the effect.
 */
export const Responsive: Story = {
  args: {
    direction: { mobile: 'column', tablet: 'row' },
    gap: 'medium',
    children: (
      <>
        <Placeholder width="100%" color="#ecc94b" />
        <Placeholder width="100%" color="#f56565" />
      </>
    ),
  },
};
