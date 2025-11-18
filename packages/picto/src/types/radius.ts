export const RADIUS_TOKEN = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full',
] as const;

export type RadiusToken = (typeof RADIUS_TOKEN)[number];
