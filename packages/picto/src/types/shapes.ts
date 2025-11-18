// Shape tokens
export const SHAPE = ['square', 'rounded', 'circle'] as const;

export type Shape = (typeof SHAPE)[number];
