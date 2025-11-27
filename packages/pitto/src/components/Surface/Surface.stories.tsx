import type { Meta, StoryObj } from '@storybook/react';

import { SCALABLE_COLOR_TOKENS } from '../../styles/contracts/color.css.js';
import { SPACING_TOKENS } from '../../styles/contracts/spacing.css.js';
import { Container } from '../Container/Container.js';
import { Surface, type SurfaceProps } from './Surface.js';

const ELEVATION_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const meta: Meta<SurfaceProps> = {
  title: 'Components/Surface',
  component: Surface,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container
        size="medium"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Story />{' '}
      </Container>
    ),
  ],
  argTypes: {
    children: { control: false },
    padding: {
      control: 'select',
      options: SPACING_TOKENS,
    },
    color: {
      control: 'select',
      options: SCALABLE_COLOR_TOKENS,
    },
    elevation: {
      control: 'select',
      options: ELEVATION_OPTIONS,
    },
  },
};

const Content = () => (
  <>
    <h3>Surface Component</h3>{' '}
    <p>
      Do play they miss give so up. Words to up style of since world. We leaf to
      snug on no need. Way own uncommonly travelling now acceptance bed
      compliment solicitude. Dissimilar admiration so terminated no in
      contrasted it. Advantages entreaties mr he apartments do. Limits far yet
      turned highly repair parish talked six. Draw fond rank form nor the day
      eat.
    </p>
  </>
);

export default meta;
type Story = StoryObj<SurfaceProps>;

export const Playground: Story = {
  args: {
    children: <Content />,
    padding: 'large',
    color: 'brand',
    elevation: 1,
  },
};
