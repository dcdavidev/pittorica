import { COLOR } from '../../types/colors';
import { TYPOGRAPHY_VARIANT } from '../../types/typography';
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
  },
};

export const Default = {
  args: {
    variant: 'body-md',
    color: 'dark',
    align: 'left',
    children: 'This is a sample Typography component',
  },
};
