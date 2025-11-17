export const SHAPE_SCALE = ['none', 'squared', 'rounded', 'circle'] as const;

export type ShapeScale = (typeof SHAPE_SCALE)[number];
