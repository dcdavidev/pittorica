// Letter spacing tokens
export const LETTER_SPACING = {
  normal: '0',
  wide: '0.05em',
  wider: '0.1em',
};
export type LetterSpacing = keyof typeof LETTER_SPACING;

// Line height tokens
export const LINE_HEIGHT = {
  normal: 1.5,
  tight: 1.2,
  loose: 1.8,
};
export type LineHeight = keyof typeof LINE_HEIGHT;
