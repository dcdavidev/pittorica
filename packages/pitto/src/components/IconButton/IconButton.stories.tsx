import { IconSettings } from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container.js';
import { Stack } from '../index.js';
import { IconButton, type IconButtonProps } from './IconButton.js';

const meta: Meta<IconButtonProps> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container size="fixed" padding="large">
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'filled', 'outlined', 'tonal'],
      description: 'The visual style variant (M3 Text/Filled/Outlined/Tonal).',
      table: { defaultValue: { summary: 'text' } },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon button.',
      table: { defaultValue: { summary: 'medium' } },
    },
    children: {
      control: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Text: Story = {
  args: {
    children: <IconSettings />,
    variant: 'text',
  },
};

export const Filled: Story = {
  args: {
    children: <IconSettings />,
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    children: <IconSettings />,
    variant: 'outlined',
  },
};

export const Tonal: Story = {
  args: {
    children: <IconSettings />,
    variant: 'tonal',
  },
};

export const SizeVariants: Story = {
  render: (args) => (
    <Stack direction="horizontal" gap="medium">
      <IconButton {...args} size="small" children={<IconSettings />} />
      <IconButton {...args} size="medium" children={<IconSettings />} />
      <IconButton {...args} size="large" children={<IconSettings />} />
    </Stack>
  ),
  args: {
    variant: 'filled',
  },
};

export const Disabled: Story = {
  args: {
    children: <IconSettings />,
    disabled: true,
    variant: 'filled',
  },
};
