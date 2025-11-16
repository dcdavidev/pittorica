import 'pittorica/css';

import React from 'react';

import { Typography } from './Typography';

export default {
  title: 'Pittorica/Typography',
  component: Typography,
};

export const Variants = () => (
  <div style={{ display: 'grid', gap: '1.5rem' }}>
    <Typography variant="display-large" as="h1">
      Display Large
    </Typography>
    <Typography variant="display-medium" as="h2">
      Display Medium
    </Typography>
    <Typography variant="display-small" as="h3">
      Display Small
    </Typography>
    <Typography variant="headline-large" as="h4">
      Headline Large
    </Typography>
    <Typography variant="headline-medium" as="h5">
      Headline Medium
    </Typography>
    <Typography variant="headline-small" as="h6">
      Headline Small
    </Typography>
    <Typography variant="title-large">Title Large</Typography>
    <Typography variant="title-medium">Title Medium</Typography>
    <Typography variant="title-small">Title Small</Typography>
    <Typography variant="body-large">Body Large</Typography>
    <Typography variant="body-medium">Body Medium</Typography>
    <Typography variant="body-small">Body Small</Typography>
    <Typography variant="label-large">Label Large</Typography>
    <Typography variant="label-medium">Label Medium</Typography>
    <Typography variant="label-small">Label Small</Typography>
  </div>
);
