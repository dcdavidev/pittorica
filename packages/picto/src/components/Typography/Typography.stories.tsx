import type { Meta, StoryObj } from '@storybook/react-vite';

import { COLOR_TOKEN } from '../../types/colors.js';
import {
  FONT_WEIGHT_TOKEN,
  LETTER_SPACING_TOKEN,
  LINE_HEIGHT_TOKEN,
  TYPOGRAPHY_ALIGN_TOKEN,
  TYPOGRAPHY_SIZE_TOKEN,
} from '../../types/typography.js';
import { Container } from '../Container/Container.jsx';
import { Divider } from '../Divider/Divider.jsx';
import { Typography, TypographyProps } from './Typography.jsx';

const defaultValues: TypographyProps = {
  size: 'body-lg',
  weight: 'regular',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  align: 'left',
  color: undefined,
  mark: false,
  pre: false,
  html: false,
  children: 'The quick brown fox jumps over the lazy dog.',
};

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', defaultValue: defaultValues.size },
      options: [undefined, ...TYPOGRAPHY_SIZE_TOKEN],
    },
    weight: {
      control: { type: 'select', defaultValue: defaultValues.weight },
      options: [undefined, ...FONT_WEIGHT_TOKEN],
    },
    lineHeight: {
      control: { type: 'select', defaultValue: defaultValues.lineHeight },
      options: [undefined, ...LINE_HEIGHT_TOKEN],
    },
    letterSpacing: {
      control: { type: 'select', defaultValue: defaultValues.letterSpacing },
      options: [undefined, ...LETTER_SPACING_TOKEN],
    },
    align: {
      control: { type: 'select', defaultValue: defaultValues.align },
      options: [undefined, ...TYPOGRAPHY_ALIGN_TOKEN],
    },
    color: {
      control: { type: 'select', defaultValue: defaultValues.color },
      options: [undefined, ...COLOR_TOKEN],
    },
    mark: {
      control: { type: 'boolean' },
    },
    small: {
      control: { type: 'boolean' },
    },
    del: {
      control: { type: 'boolean' },
    },
    ins: {
      control: { type: 'boolean' },
    },
    sub: {
      control: { type: 'boolean' },
    },
    sup: {
      control: { type: 'boolean' },
    },
    pre: {
      control: { type: 'boolean', defaultValue: defaultValues.pre },
    },
    html: {
      control: { type: 'boolean', defaultValue: defaultValues.html },
    },
    children: {
      control: { type: 'text', defaultValue: defaultValues.children },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    ...defaultValues,
  },
};

export const Preformatted: Story = {
  args: {
    ...defaultValues,
    pre: true,

    children: `function helloWorld() {
  console.log("Hello, World!");
  return "Preformatted text preserves whitespace and formatting";
}`,
  },
};
Preformatted.parameters = {
  controls: { exclude: ['as', 'children'] },
};

export const Showroom: Story = {
  args: {
    children: '',
  },
  render: () => (
    <Container>
      <Typography size="display-lg" color="primary">
        Typography Component <Typography weight="bold">Showroom</Typography>
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
      <Typography mark>
        This text is <Typography weight="bold">highlighted</Typography> using
        the mark element.
      </Typography>
      <Typography>
        Misc: <Typography small>small text</Typography>,{' '}
        <Typography del>deleted text</Typography>,{' '}
        <Typography ins>inserted text</Typography>, H
        <Typography sub>2</Typography>O, E = mc<Typography sup>2</Typography>.
      </Typography>

      <Divider variant="double" />
    </Container>
  ),
};

Showroom.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  interactions: { disable: true },
};
