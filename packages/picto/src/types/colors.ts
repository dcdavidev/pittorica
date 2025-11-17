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
