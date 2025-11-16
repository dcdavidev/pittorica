import 'pittorica/css';

import React from 'react';

import { Typography, TypographyVariant, TypographyColor } from './Typography';

export default {
  title: 'Pittorica/Typography',
  component: Typography,
};

const variants: TypographyVariant[] = [
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
];

const colors: TypographyColor[] = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'success',
  'info',
  'warning',
  'light',
  'dark',
];

export const AllVariantsAndColors = () => (
  <div style={{ display: 'grid', gap: '1.5rem' }}>
    {variants.map((variant) => (
      <div key={variant}>
        <Typography variant="headline-sm" as="h2">
          {variant}
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Typography key={color} variant={variant} color={color}>
              {color}
            </Typography>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Variants = () => (
  <div style={{ display: 'grid', gap: '1.5rem' }}>
    <Typography variant="display-lg" as="h1" color="primary">
      Display LG - Primary
    </Typography>
    <Typography variant="display-md" as="h2" color="secondary">
      Display MD - Secondary
    </Typography>
    <Typography variant="display-sm" as="h3" color="tertiary">
      Display SM - Tertiary
    </Typography>
    <Typography variant="headline-lg" as="h4" color="error">
      Headline LG - Error
    </Typography>
    <Typography variant="headline-md" as="h5" color="success">
      Headline MD - Success
    </Typography>
    <Typography variant="headline-sm" as="h6" color="info">
      Headline SM - Info
    </Typography>
    <Typography variant="title-lg" color="warning">
      Title LG - Warning
    </Typography>
    <Typography variant="title-md" color="light">
      Title MD - Light
    </Typography>
    <Typography variant="title-sm" color="dark">
      Title SM - Dark
    </Typography>
    <Typography variant="body-lg">Body LG - Default</Typography>
    <Typography variant="body-md" color="primary">
      Body MD - Primary
    </Typography>
    <Typography variant="body-sm" color="secondary">
      Body SM - Secondary
    </Typography>
    <Typography variant="label-lg" color="tertiary">
      Label LG - Tertiary
    </Typography>
    <Typography variant="label-md" color="error">
      Label MD - Error
    </Typography>
    <Typography variant="label-sm" color="success">
      Label SM - Success
    </Typography>
  </div>
);
