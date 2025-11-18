import { Typography } from './Typography.js';

export default {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'display-lg',
        'display-md',
        'display-sm',
        'headline-lg',
        'headline-md',
        'headline-sm',
        'title-lg',
        'title-md',
        'title-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'label-lg',
        'label-md',
        'label-sm',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'light',
        'dark',
        'primary',
        'secondary',
        'tertiary',
        'error',
        'success',
        'info',
        'warning',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export const DisplayLargePrimary = {
  args: {
    variant: 'display-lg',
    color: 'primary',
    children: 'Display Large - Primary',
  },
};

export const DisplayLargeSecondary = {
  args: {
    variant: 'display-lg',
    color: 'secondary',
    children: 'Display Large - Secondary',
  },
};

export const DisplayLargeTertiary = {
  args: {
    variant: 'display-lg',
    color: 'tertiary',
    children: 'Display Large - Tertiary',
  },
};

export const DisplayLargeError = {
  args: {
    variant: 'display-lg',
    color: 'error',
    children: 'Display Large - Error',
  },
};

export const DisplayLargeSuccess = {
  args: {
    variant: 'display-lg',
    color: 'success',
    children: 'Display Large - Success',
  },
};

export const DisplayLargeInfo = {
  args: {
    variant: 'display-lg',
    color: 'info',
    children: 'Display Large - Info',
  },
};

export const DisplayLargeWarning = {
  args: {
    variant: 'display-lg',
    color: 'warning',
    children: 'Display Large - Warning',
  },
};

export const DisplayLargeLight = {
  args: {
    variant: 'display-lg',
    color: 'light',
    children: 'Display Large - Light (White)',
  },
};

export const DisplayLargeDark = {
  args: {
    variant: 'display-lg',
    color: 'dark',
    children: 'Display Large - Dark (Black)',
  },
};

export const DisplayLargeDefault = {
  args: {
    variant: 'display-lg',
    children: 'Display Large - Default',
  },
};

export const HeadlineMedium = {
  args: {
    variant: 'headline-md',
    children: 'Headline Medium - Responsive typography scales with viewport',
  },
};

export const TitleLarge = {
  args: {
    variant: 'title-lg',
    children: 'Title Large - Material Design 3 inspired',
  },
};

export const BodyMedium = {
  args: {
    variant: 'body-md',
    children:
      'Body Medium - The quick brown fox jumps over the lazy dog. This text demonstrates the responsive typography system using clamp() functions for fluid scaling.',
  },
};

export const LabelSmall = {
  args: {
    variant: 'label-sm',
    children: 'Label Small - UI element text',
  },
};

export const CenterAligned = {
  args: {
    variant: 'body-lg',
    align: 'center',
    children:
      'This text is center aligned. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const RightAligned = {
  args: {
    variant: 'body-lg',
    align: 'right',
    children:
      'This text is right aligned. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Justified = {
  args: {
    variant: 'body-lg',
    align: 'justify',
    children:
      'This text is justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="display-lg">Display Large</Typography>
      <Typography variant="display-md">Display Medium</Typography>
      <Typography variant="display-sm">Display Small</Typography>
      <Typography variant="headline-lg">Headline Large</Typography>
      <Typography variant="headline-md">Headline Medium</Typography>
      <Typography variant="headline-sm">Headline Small</Typography>
      <Typography variant="title-lg">Title Large</Typography>
      <Typography variant="title-md">Title Medium</Typography>
      <Typography variant="title-sm">Title Small</Typography>
      <Typography variant="body-lg">Body Large</Typography>
      <Typography variant="body-md">Body Medium</Typography>
      <Typography variant="body-sm">Body Small</Typography>
      <Typography variant="label-lg">Label Large</Typography>
      <Typography variant="label-md">Label Medium</Typography>
      <Typography variant="label-sm">Label Small</Typography>
    </div>
  ),
};
