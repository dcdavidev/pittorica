export const TYPOGRAPHY_VARIANT = [
  'display-lg',
  'display-md',
  'display-sm',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'title-lg',
  'title-md',
  'title-sm',
  'label-lg',
  'label-md',
  'label-sm',
  'body-lg',
  'body-md',
  'body-sm',
] as const;

export type TypographyVariant = (typeof TYPOGRAPHY_VARIANT)[number];

export const FONT_NAMES = ['serif', 'sans', 'mono', 'display'] as const;

export type FontName = (typeof FONT_NAMES)[number];

export const FONT_WEIGHTS = ['regular', 'medium', 'semibold', 'bold'] as const;

export type FontWeight = (typeof FONT_WEIGHTS)[number];

export const LETTER_SPACING = ['tight', 'normal', 'wide', 'wider'] as const;

export type LetterSpacing = (typeof LETTER_SPACING)[number];

export const LINE_HEIGHT = ['tight', 'normal', 'relaxed'] as const;

export type LineHeight = (typeof LINE_HEIGHT)[number];

export const SPACING_NAMES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
] as const;

export type SpacingName = (typeof SPACING_NAMES)[number];
