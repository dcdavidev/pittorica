export const COLOR = [
  'light',
  'dark',
  'primary',
  'secondary',
  'accent',
  'tonal',
  'error',
  'success',
  'warning',
  'info',
] as const;

export type Color = (typeof COLOR)[number];

export const COLOR_NAMES = [
  'primary',
  'accent',
  'tonal',
  'error',
  'success',
  'info',
  'warning',
  'neutral',
] as const;

export type ColorName = (typeof COLOR_NAMES)[number];

export const COLOR_STEPS = [
  100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const;

export type ColorStep = (typeof COLOR_STEPS)[number];
