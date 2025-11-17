export const RADIUS_SCALE = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full',
] as const;

export type RadiusScale = (typeof RADIUS_SCALE)[number];
