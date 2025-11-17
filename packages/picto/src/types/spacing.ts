export const SPACING_SCALE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24,
] as const;

export type SpacingScale = (typeof SPACING_SCALE)[number];

export const SPACING_SEMANTIC = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;

export type SpacingSemantic = (typeof SPACING_SEMANTIC)[number];
