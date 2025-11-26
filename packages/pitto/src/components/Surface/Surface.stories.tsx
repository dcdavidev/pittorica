import type { Meta, StoryObj } from '@storybook/react-vite';

import { ELEVATION_PINS } from '../../styles/elevation.css.js';
import { Container } from '../Container/Container.js';
import { Surface, SURFACE_SHAPES } from './Surface.js';

const meta: Meta<typeof Surface> = {
  component: Surface,
  title: 'Layouts/Surface',
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 900, step: 100 },
    },
    padding: {
      control: 'select',
      options: ELEVATION_PINS,
    },
    shape: {
      control: 'select',
      options: SURFACE_SHAPES,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => (
      <Container
        size="small"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Story />
      </Container>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Surface>;

const Content = (
  <>
    <h1>Surface Playground</h1>
    <p>
      Conveying or northward offending admitting perfectly my. Colonel gravity
      get thought fat smiling add but. Wonder twenty hunted and put income set
      desire expect. Am cottage calling my is mistake cousins talking up.
      Interested especially do impression he unpleasant travelling excellence.
      All few our knew time done draw ask.
    </p>
  </>
);

export const Playground: Story = {
  args: {
    elevation: 100,
    padding: 'xxlarge',
    shape: 'rounded',
    children: Content,
  },
};
