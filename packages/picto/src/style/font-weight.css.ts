import { styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const FONT_WEIGHT_TOKENS = [
  'regular',
  'medium',
  'semibold',
  'bold',
] as const;

export type FontWeightToken = (typeof FONT_WEIGHT_TOKENS)[number];

/**
 * Gets the font-weight value for a given token.
 * @param token The font weight token, e.g. 'medium'.
 * @returns The corresponding font-weight CSS value.
 * @example
 * ```typescript
 * getFontWeight('medium'); // '500'
 * ```
 */
function getFontWeight(token: FontWeightToken): string {
  switch (token) {
    case 'regular': {
      return vars.fontWeight.regular;
    }
    case 'medium': {
      return vars.fontWeight.medium;
    }
    case 'semibold': {
      return vars.fontWeight.semibold;
    }
    case 'bold': {
      return vars.fontWeight.bold;
    }
    default: {
      return vars.fontWeight.regular;
    }
  }
}

/**
 * Font weight utility classes.
 * Generated dynamically from FONT_WEIGHT_TOKENS.
 */
export const fontWeight = styleVariants(
  (() => {
    const styles: Record<string, { fontWeight: string }> = {};
    for (const token of FONT_WEIGHT_TOKENS) {
      styles[token] = { fontWeight: getFontWeight(token) };
    }
    return styles as Record<FontWeightToken, { fontWeight: string }>;
  })()
);
