export const COLOR_TOKEN = [
  'dark',
  'light',
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'neutral-variant',
  'error',
  'success',
  'info',
  'danger',
] as const;

export type ColorToken = (typeof COLOR_TOKEN)[number];
