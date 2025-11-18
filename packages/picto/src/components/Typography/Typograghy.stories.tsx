import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors.js';
import {
  FONT_WEIGHT_TOKEN,
  LETTER_SPACING_TOKEN,
  LINE_HEIGHT_TOKEN,
  TYPOGRAPHY_ALIGN_TOKEN,
  TYPOGRAPHY_SIZE_TOKEN,
} from '../../types/typography.js';
import { Container } from '../Container/Container.js';
import { Divider } from '../Divider/Divider.js';
import { Typography } from './Typography.js';

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [undefined, ...TYPOGRAPHY_SIZE_TOKEN],
    },
    weight: {
      control: { type: 'select' },
      options: [undefined, ...FONT_WEIGHT_TOKEN],
    },
    lineHeight: {
      control: { type: 'select' },
      options: [undefined, ...LINE_HEIGHT_TOKEN],
    },
    letterSpacing: {
      control: { type: 'select' },
      options: [undefined, ...LETTER_SPACING_TOKEN],
    },
    align: {
      control: { type: 'select' },
      options: [undefined, ...TYPOGRAPHY_ALIGN_TOKEN],
    },
    color: {
      control: { type: 'select' },
      options: [undefined, ...COLOR_TOKEN],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: undefined,
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Document: Story = {
  args: {
    children: '',
  },
  render: () => (
    <Container>
      <Typography size="display-lg" color="primary">
        Typography Component <Typography weight="bold">Stories</Typography>.
      </Typography>
      <Typography size="label-lg">
        The heading above uses size: "display-lg", while I use "label-lg".
      </Typography>

      <Divider variant="wave" />

      <Typography size="headline-lg" color="secondary">
        Following a Paragraph with the 'paragraph' prop.
      </Typography>
      <Typography size="label-md" color="tertiary">
        The heading above uses size headline-lg, color secondary. I use size
        label-md, color tertiary.
      </Typography>

      <Typography paragraph>
        Respect forming clothes do in he. Course so piqued no an by appear.
        Themselves reasonable pianoforte so motionless he as difficulty be.
        Abode way begin ham there power whole. Do unpleasing indulgence
        impossible to conviction. Suppose neither evident welcome it at do
        civilly uncivil. Sing tall much you get nor.
      </Typography>
      <Typography italic>
        Italic. Default size is span which means this is an inline block
        actually.
      </Typography>

      <Divider />

      <Typography size="headline-md">
        Following a Paragraph with 'paragraph', size 'body-sm' props.
      </Typography>
      <Typography size="label-sm" color="tertiary">
        The heading above uses size headline-md. I use size label-sm, color
        tertiary.
      </Typography>

      <Typography paragraph size="body-sm">
        Sussex result matter any end see. It speedily me addition weddings
        vicinity in pleasure. Happiness commanded an conveying breakfast in.
        Regard her say warmly elinor. Him these are visit front end for seven
        walls. Money eat scale now ask law learn. Side its they just any upon
        see last. He prepared no shutters perceive do greatest. Ye at unpleasant
        solicitude in companions interested.
      </Typography>

      <Divider variant="double" />
    </Container>
  ),
};

Document.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  interactions: { disable: true },
};
