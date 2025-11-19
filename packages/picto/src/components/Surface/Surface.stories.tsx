import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container/Container';
import Typography from '../Typography/Typography';
import { Surface } from './Surface';

const Content = function ({ text = 'Surface' }: { text?: string }) {
  return <Typography size="lg">{text}</Typography>;
};

const defaultValues = {
  as: 'div' as const,
  shape: 'round' as const,
  elevation: 'none' as const,
  color: 'primary' as const,
  flex: true,
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: '',
  grow: 0,
  screen: false,
  textAlign: 'center' as const,
  className: '',
  style: { padding: '1rem' },
  children: <Content />,
};

const meta: Meta<typeof Surface> = {
  title: 'Components/Surface',
  component: Surface,
  argTypes: {
    as: {
      control: { type: 'text' },
      description:
        'The HTML element or React component to render as the root element.',
    },
    shape: {
      control: { type: 'select' },
      options: ['none', 'square', 'round', 'circle'],
    },
    elevation: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'transparent',
        'default',
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'error',
        'success',
        'info',
        'danger',
      ],
    },
    flex: {
      control: { type: 'boolean' },
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
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
    gap: {
      control: { type: 'text' },
    },
    grow: {
      control: { type: 'number' },
    },
    screen: {
      control: { type: 'boolean' },
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    className: {
      control: { type: 'text' },
    },
    style: {
      control: { type: 'object' },
    },
    children: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...defaultValues,
    flex: true,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  render: (args) => (
    <Container size="xs">
      <Surface {...args}>{args.children}</Surface>
    </Container>
  ),
};
Playground.parameters = {
  controls: { exclude: ['children', 'as'] },
};

export const Shape: Story = {
  args: {
    ...defaultValues,
    shape: 'square',
    children: <Content text="Customize the Shape" />,
  },
  render: (args) => (
    <Container size="xs">
      <Surface {...args}>{args.children}</Surface>
    </Container>
  ),
};
Shape.parameters = {
  controls: { exclude: ['children', 'as'] },
};

export const Elevation: Story = {
  args: {
    ...defaultValues,
    elevation: '2xl',
    children: <Content text="Customize the Elevation" />,
  },
  render: (args) => (
    <Container size="xs">
      <Surface {...args}>{args.children}</Surface>
    </Container>
  ),
};
Elevation.parameters = {
  controls: { exclude: ['children', 'as'] },
};

export const Color: Story = {
  args: {
    ...defaultValues,
    color: 'secondary',
    children: <Content text="Customize the Color" />,
  },
  render: (args) => (
    <Container size="xs">
      <Surface {...args}>{args.children}</Surface>
    </Container>
  ),
};
Color.parameters = {
  controls: { exclude: ['children', 'as'] },
};

export const Screen: Story = {
  args: {
    ...defaultValues,
    screen: true,
    children: <Content text="Full Screen Surface" />,
  },
  render: (args) => <Surface {...args}>{args.children}</Surface>,
};
Screen.parameters = {
  controls: { exclude: ['children', 'as'] },
};

export const Showroom: Story = {
  args: {
    ...defaultValues,
  },
  render: () => {
    return (
      <Surface flex gap="2rem" flexDirection="column" color="transparent">
        <Container size="lg">
          <Surface
            shape="square"
            elevation="lg"
            color="primary"
            flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="2rem"
            style={{ padding: '2rem' }}
          >
            <Typography size="lg" align="center">
              Surface Component <strong>Showroom</strong>.
            </Typography>
            <Typography size="md" align="center">
              This is a Surface component with square shape, large elevation,
              and primary color. It uses flexbox to center its content both
              vertically and horizontally, with a gap of 2rem between items.
            </Typography>
          </Surface>
        </Container>

        <Container size="lg" flex gap="2rem" alignItems="stretch">
          <Surface
            color="success"
            flex
            grow={1}
            flexDirection="column"
            style={{ padding: '1rem' }}
          >
            <Container size="xs" alignItems="stretch">
              <Typography size="md">
                On recommend tolerably my belonging or am. Mutual has cannot
                beauty indeed now sussex merely you. It possible no husbands
                inquietude contrasted unreserved as insipidity inquietude.
              </Typography>
            </Container>
          </Surface>

          <Surface
            color="danger"
            flex
            flexDirection="column"
            style={{ padding: '1rem' }}
          >
            <Container size="xs" alignItems="stretch">
              <Typography size="md">
                Shew folly books no point ye. Lose good add yet son law. Way ham
                unwilling not breakfast up. Age lived smile six defer bed.
              </Typography>
            </Container>
          </Surface>
        </Container>
      </Surface>
    );
  },
};
Showroom.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  interactions: { disable: true },
};
