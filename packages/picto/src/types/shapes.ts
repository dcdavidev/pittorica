// Shape tokens
export const SHAPE_TOKEN = ['none', 'square', 'round', 'circle'] as const;

export type ShapeToken = (typeof SHAPE_TOKEN)[number];
