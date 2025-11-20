import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Box } from '../Box/Box.js';
import { Grid, GridProps } from './Grid';

const meta: Meta<GridProps> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 6, 12],
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense'],
    },
    align: {
      control: 'select',
      options: ['stretch', 'start', 'center', 'end'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between'],
    },
  },
};

export default meta;
type Story = StoryObj<GridProps>;

const Placeholder = ({
  height = '50px',
  color = 'brand',
  text = 'Item',
  ...props
}) => (
  <Box
    style={{ height, borderRadius: '4px' }}
    backgroundColor={color}
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="light"
    {...props}
  >
    {text}
  </Box>
);

/**
 * Basic grid with fixed columns.
 */
export const Basic: Story = {
  args: {
    columns: 3,
    gap: 'medium',
    children: (
      <>
        <Placeholder text="1" />
        <Placeholder text="2" />
        <Placeholder text="3" />
        <Placeholder text="4" />
        <Placeholder text="5" />
        <Placeholder text="6" />
      </>
    ),
  },
};

/**
 * Responsive columns (1 on mobile, 2 on tablet, 4 on desktop).
 */
export const Responsive: Story = {
  args: {
    columns: { mobile: 1, tablet: 2, desktop: 4 },
    gap: 'medium',
    children: (
      <>
        <Placeholder text="1" />
        <Placeholder text="2" />
        <Placeholder text="3" />
        <Placeholder text="4" />
      </>
    ),
  },
};

/**
 * Spanning items using `gridColumn` on children.
 */
export const Spanning: Story = {
  render: () => (
    <Grid columns={3} gap="medium">
      <Box gridColumn="span-2">
        <Placeholder text="Span 2" color="secondary" />
      </Box>
      <Box>
        <Placeholder text="1" />
      </Box>
      <Box>
        <Placeholder text="1" />
      </Box>
      <Box gridColumn="span-2">
        <Placeholder text="Span 2" color="secondary" />
      </Box>
      <Box gridColumn="full">
        <Placeholder text="Full Width" color="tertiary" />
      </Box>
    </Grid>
  ),
};

/**
 * Auto flow dense to fill gaps.
 */
export const AutoFlow: Story = {
  args: {
    columns: 3,
    gap: 'small',
    flow: 'dense',
    children: (
      <>
        <Box gridColumn="span-2">
          <Placeholder text="Span 2" color="secondary" />
        </Box>
        <Box>
          <Placeholder text="1" />
        </Box>
        <Box>
          <Placeholder text="1" />
        </Box>
        <Box gridColumn="span-2">
          <Placeholder text="Span 2" color="secondary" />
        </Box>
      </>
    ),
  },
};
