import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { colorsMap } from '../../styles/sprinkles.css.js';
import { themeClass } from '../../styles/theme.css.js';
import { Box } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import { Divider, type DividerProps } from './Divider.js';

const colorOptions = Object.keys(colorsMap);

const meta: Meta<DividerProps> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={themeClass} style={{ padding: '2rem', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'wave', 'zigzag', 'dashed', 'double'],
      description: 'The visual style of the separator.',
      table: { defaultValue: { summary: 'solid' } },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientation (Vertical works best with Flex layouts).',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    thickness: {
      control: 'text',
      description: 'Thickness of the line (only for solid variant).',
      table: { defaultValue: { summary: '1px' } },
    },
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Color token from the theme.',
      defaultValue: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Default: Story = {
  args: {
    variant: 'solid',
  },
  render: (args) => (
    <Box>
      <Text size="small" color="neutrals-dark">
        Above
      </Text>
      <Divider marginY="medium" {...args} />
      <Text size="small" color="neutrals-dark">
        Below
      </Text>
    </Box>
  ),
};

export const Patterns: Story = {
  render: (args) => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Box>
        <Text size="small" color="neutrals-dark" style={{ marginBottom: 8 }}>
          Square (Tech)
        </Text>
        <Divider variant="square" color="brand" {...args} />
      </Box>
      <Box>
        <Text size="small" color="neutrals-dark" style={{ marginBottom: 8 }}>
          Scallop (Organic)
        </Text>
        <Divider variant="scallop" color="secondary" {...args} />
      </Box>
      <Box>
        <Text size="small" color="neutrals-dark" style={{ marginBottom: 8 }}>
          Dots (Minimal)
        </Text>
        <Divider variant="dots" color="tertiary" {...args} />
      </Box>
      <Box>
        <Text size="small" color="neutrals-dark" style={{ marginBottom: 8 }}>
          Cross (Decorative)
        </Text>
        <Divider variant="cross" color="error" {...args} />
      </Box>
      <Box>
        <Text size="small" color="neutrals-dark" style={{ marginBottom: 8 }}>
          Wave (Classic)
        </Text>
        <Divider variant="wave" color="info" {...args} />
      </Box>
    </Box>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        border: '1px dashed #ddd',
        padding: '10px',
      }}
    >
      <Text>Left</Text>

      {/* Vertical Divider needs 'alignSelf: stretch' or a set height to be visible */}
      <Divider orientation="vertical" marginX="large" {...args} />

      <Text>Right</Text>

      <Divider
        orientation="vertical"
        marginX="large"
        color="brand"
        thickness="4px"
      />

      <Text color="brand">Bold</Text>
    </Box>
  ),
};

// 4. Custom Thickness & Color (Solid)
export const ThickAndColored: Story = {
  args: {
    variant: 'solid',
    thickness: '4px',
    color: 'error',
    marginY: 'large',
  },
};

// 5. Realistic Context (Card)
export const CardExample: Story = {
  render: () => (
    <Box
      backgroundColor="light"
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        maxWidth: '320px',
        overflow: 'hidden',
      }}
    >
      <Box padding="medium">
        <Text variant="label" size="large">
          Receipt #1234
        </Text>
        <Text size="small" color="dark">
          Purchased on Nov 20, 2025
        </Text>
      </Box>

      {/* Pattern Divider */}
      <Divider variant="zigzag" color="light" />

      <Box padding="medium">
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <Text size="small">Coffee</Text>
          <Text size="small">$3.50</Text>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text size="small">Bagel</Text>
          <Text size="small">$2.00</Text>
        </Box>
      </Box>

      {/* Solid Divider */}
      <Divider />

      <Box padding="medium" backgroundColor="neutrals-light">
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text variant="label">Total</Text>
          <Text variant="label">$5.50</Text>
        </Box>
      </Box>
    </Box>
  ),
};
