export const ELEVATION_SCALE = [1, 2, 3, 4, 5] as const;

export type ElevationScale = (typeof ELEVATION_SCALE)[number];

export const ELEVATION_SEMANTIC = [
  'none',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
] as const;

export type ElevationSemantic = (typeof ELEVATION_SEMANTIC)[number];
