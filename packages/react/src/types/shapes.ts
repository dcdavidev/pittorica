// Shape types mapped from pittorica
export type PictoShape = 'none' | 'squared' | 'rounded' | 'circle';

export const PICTO_SHAPES: PictoShape[] = [
  'none',
  'squared',
  'rounded',
  'circle',
];

export const shapeClassMap: Record<PictoShape, string> = {
  none: '',
  squared: 'picto-shape-squared',
  rounded: 'picto-shape-rounded',
  circle: 'picto-shape-circle',
};
