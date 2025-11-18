export const FONT_STACK_TOKEN = ['sans', 'serif', 'mono'] as const;
export type FontStackToken = (typeof FONT_STACK_TOKEN)[number];

export const TYPOGRAPHY_SIZE_TOKEN = [
  'display-lg',
  'display-md',
  'display-sm',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'title-lg',
  'title-md',
  'title-sm',
  'body-lg',
  'body-md',
  'body-sm',
  'label-lg',
  'label-md',
  'label-sm',
] as const;
export type TypographySize = (typeof TYPOGRAPHY_SIZE_TOKEN)[number];

export const TYPOGRAPHY_ALIGN_TOKEN = [
  'left',
  'center',
  'right',
  'justify',
] as const;
export type TypographyAlign = (typeof TYPOGRAPHY_ALIGN_TOKEN)[number];

export const FONT_WEIGHT_TOKEN = [
  'regular',
  'medium',
  'semibold',
  'bold',
] as const;
export type FontWeight = (typeof FONT_WEIGHT_TOKEN)[number];

export const LETTER_SPACING_TOKEN = ['normal', 'wide', 'wider'] as const;
export type LetterSpacing = (typeof LETTER_SPACING_TOKEN)[number];

export const LINE_HEIGHT_TOKEN = ['normal', 'tight', 'loose'] as const;
export type LineHeight = (typeof LINE_HEIGHT_TOKEN)[number];
