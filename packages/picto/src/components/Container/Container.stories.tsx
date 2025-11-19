import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from '../Surface/Surface.jsx';
import { Typography } from '../Typography/Typography.jsx';
import { Container } from './Container.js';

const meta = {
  title: 'Layout/Container',
  component: Container,
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
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    gap: {
      control: { type: 'text' },
      description: 'Gap between flex items (e.g., "1rem", "16px")',
    },
    grow: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'md',
    children: (
      <Surface color="primary" style={{ padding: '1rem' }}>
        <Typography size="headline-lg">Container</Typography>
        <Typography size="body-lg" paragraph>
          This Typography—"body-lg", paragraph—is inside a Surface component
          with color primary prop, which is itself inside a responsive container
          with max-width constraints and horizontal padding.
        </Typography>
      </Surface>
    ),
  },
};

export const Showroom: Story = {
  args: {
    size: 'lg',
    flex: true,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    children: '',
  },
  render: () => (
    <Surface flex gap="1rem" flexDirection="column">
      <Container size="lg">
        <Surface>
          <Typography size="display-lg" align="center">
            <Typography weight="bold">Container</Typography> Component Story
          </Typography>
        </Surface>
      </Container>

      <Container size="lg" flex gap="4rem" alignItems="stretch">
        <Surface
          color="success"
          flex
          grow={1}
          flexDirection="column"
          style={{ padding: '1rem' }}
        >
          <Container size="xs">
            <Typography size="body-md">
              On recommend tolerably my belonging or am. Mutual has cannot
              beauty indeed now sussex merely you. It possible no husbands
              jennings ye offended packages pleasant he. Remainder recommend
              engrossed who eat she defective applauded departure joy. Get
              dissimilar not introduced day her apartments. Fully as taste he mr
              do smile abode every. Luckily offered article led lasting country
              minutes nor old. Happen people things oh is oppose up parish
              effect. Law handsome old outweigh humoured far appetite.
            </Typography>
          </Container>
        </Surface>

        <Surface
          color="primary"
          style={{ padding: '1rem' }}
          flex
          justifyContent="center"
        >
          <Typography size="display-lg" noMargins>
            🧑‍🎨
          </Typography>
        </Surface>

        <Surface
          color="secondary"
          style={{ padding: '1rem' }}
          flex
          justifyContent="center"
        >
          <Typography size="display-lg" noMargins>
            ❤️
          </Typography>
        </Surface>
      </Container>
    </Surface>
  ),
};
