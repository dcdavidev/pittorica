import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors';
import { ELEVATION_TOKEN } from '../../types/elevation';
import { SHAPE_TOKEN } from '../../types/shapes';
import { TYPOGRAPHY_ALIGN_TOKEN } from '../../types/typography';
import { Container } from '../Container/Container.js';
import { Typography } from '../Typography/Typography';
import { Surface, SurfaceProps } from './Surface.js';

const Content = function ({ text = 'Surface' }: { text?: string }) {
  return (
    <Typography size="headline-sm" noMargins>
      {text}
    </Typography>
  );
};

const defaultValues: SurfaceProps = {
  as: 'div',
  shape: 'round',
  elevation: 'none',
  color: 'primary',
  flex: true,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '',
  grow: 0,
  screen: false,
  textAlign: 'center',
  className: '',
  style: { padding: '1rem' },
  children: <Content />,
};

const meta = {
  title: 'Components/Surface',
  component: Surface,
  argTypes: {
    as: {
      control: { type: 'text', defaultValue: defaultValues.as },
      description:
        'The HTML element or React component to render as the root element.',
    },
    shape: {
      control: { type: 'select', defaultValue: defaultValues.shape },
      options: [...SHAPE_TOKEN],
    },
    elevation: {
      control: { type: 'select', defaultValue: defaultValues.elevation },
      options: [...ELEVATION_TOKEN],
    },
    color: {
      control: { type: 'select', defaultValue: defaultValues.color },
      options: ['transparent', 'default', ...COLOR_TOKEN],
    },
    flex: {
      control: { type: 'boolean', defaultValue: defaultValues.flex },
    },
    flexDirection: {
      control: { type: 'select', defaultValue: defaultValues.flexDirection },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    alignItems: {
      control: { type: 'select', defaultValue: defaultValues.alignItems },
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    },
    justifyContent: {
      control: { type: 'select', defaultValue: defaultValues.justifyContent },
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
      control: { type: 'text', defaultValue: defaultValues.gap },
    },
    grow: {
      control: { type: 'number', defaultValue: defaultValues.grow },
    },
    screen: {
      control: { type: 'boolean', defaultValue: defaultValues.screen },
    },
    textAlign: {
      control: { type: 'select', defaultValue: defaultValues.textAlign },
      options: [...TYPOGRAPHY_ALIGN_TOKEN],
    },
    className: {
      control: { type: 'text', defaultValue: defaultValues.className },
    },
    style: {
      control: { type: 'object', defaultValue: defaultValues.style },
    },
    children: {
      control: {
        type: 'object',
        defaultValue: defaultValues.children,
      },
    },
  },
} satisfies Meta<typeof Surface>;

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
            <Typography size="display-sm" color="on-primary" align="center">
              Surface Component <Typography weight="bold">Showroom</Typography>.
            </Typography>
            <Typography
              size="body-lg"
              color="on-primary"
              align="center"
              paragraph
            >
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
              <Typography size="body-md">
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
              <Typography size="body-md">
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
