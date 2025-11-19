export const PALETTE_TOKEN = [
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

export type PaletteToken = (typeof PALETTE_TOKEN)[number];
