import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography/Typography';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fluid'],
    },
    flex: {
      control: { type: 'boolean' },
    },
    justifyContent: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    gap: {
      control: { type: 'text' },
    },
    grow: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Typography>Default medium container content</Typography>,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: <Typography>Extra small container</Typography>,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <Typography>Small container</Typography>,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: <Typography>Medium container</Typography>,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <Typography>Large container</Typography>,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: <Typography>Extra large container</Typography>,
  },
};

export const Fluid: Story = {
  args: {
    size: 'fluid',
    children: <Typography>Fluid container (full width)</Typography>,
  },
};

export const WithFlex: Story = {
  args: {
    flex: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    children: (
      <>
        <Typography>Item 1</Typography>
        <Typography>Item 2</Typography>
        <Typography>Item 3</Typography>
      </>
    ),
  },
};

export const Nested: Story = {
  render: () => (
    <Container size="fluid">
      <Container size="lg">
        <Typography>Nested containers</Typography>
      </Container>
    </Container>
  ),
};
