import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../style/index.js';

export const base = style({
  display: 'block',
  backgroundColor: vars.color.surface,
  color: vars.color.onSurface,
});

export const primary = style({
  backgroundColor: vars.color.primary,
  color: vars.color.onPrimary,
});

export const secondary = style({
  backgroundColor: vars.color.secondary,
  color: vars.color.onSecondary,
});

export const tertiary = style({
  backgroundColor: vars.color.tertiary,
  color: vars.color.onTertiary,
});

export const error = style({
  backgroundColor: vars.color.error,
  color: vars.color.onError,
});

export const success = style({
  backgroundColor: vars.color.success,
  color: vars.color.onSuccess,
});

export const info = style({
  backgroundColor: vars.color.info,
  color: vars.color.onInfo,
});

export const danger = style({
  backgroundColor: vars.color.danger,
  color: vars.color.onDanger,
});

export const transparent = style({
  backgroundColor: 'transparent',
  color: 'inherit',
});

export const elevation = styleVariants(vars.elevation, (shadow) => ({
  boxShadow: shadow,
}));

export const flex = style({
  display: 'flex',
});
