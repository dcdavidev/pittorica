import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from '../../Container/Container.js';
import { Surface } from '../../Surface/Surface.js';
import { Abbr } from './Abbr.js';

const defaultValues = {
  title: 'World Wide Web',
  children: 'WWW',
};

const meta = {
  title: 'Typography/Abbr',
  component: Abbr,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text', defaultValue: defaultValues.title },
    },
    children: {
      control: { type: 'text', defaultValue: defaultValues.children },
    },
  },
} satisfies Meta<typeof Abbr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...defaultValues,
  },
  render: (args) => (
    <Container size="xs">
      <Surface
        style={{ padding: '2rem' }}
        color="primary"
        shape="round"
        flex
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Abbr {...args} />
      </Surface>
    </Container>
  ),
};
Playground.parameters = {
  controls: { exclude: ['as'] },
};
