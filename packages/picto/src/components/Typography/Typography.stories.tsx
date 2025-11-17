import { COLOR } from '../../types/colors';
import {
  FONT_NAMES,
  FONT_WEIGHTS,
  TYPOGRAPHY_VARIANT,
} from '../../types/typography';
import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [...TYPOGRAPHY_VARIANT],
    },
    color: {
      control: { type: 'select' },
      options: [...COLOR],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: [...FONT_WEIGHTS],
    },
    font: {
      control: { type: 'select' },
      options: [...FONT_NAMES],
    },
  },
};

export const Default = {
  args: {
    variant: 'body-md',
    color: 'dark',
    align: 'left',
    fontWeight: 'regular',
    font: 'sans',
    children: 'This is a sample Typography component',
  },
};

export const HeadingXL = {
  args: {
    ...Default.args,
    variant: 'heading-xl',
    children: 'Extra Large Heading Example',
  },
};

export const SubtitleSmItalic = {
  args: {
    ...Default.args,
    variant: 'subtitle-sm',
    fontWeight: 'italic',
    children: 'Small Subtitle in Italic',
  },
};

export const BodyLgCenterPrimary = {
  args: {
    ...Default.args,
    variant: 'body-lg',
    color: 'primary',
    align: 'center',
    children: 'Large body text centered and in primary color.',
  },
};

export const BodySmWarningBold = {
  args: {
    ...Default.args,
    variant: 'body-sm',
    color: 'warning',
    fontWeight: 'bold',
    children: 'Small, bold text in Warning (e.g., error) color.',
  },
};
