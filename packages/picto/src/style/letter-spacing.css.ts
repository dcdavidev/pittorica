import { styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const LETTER_SPACING_TOKEN = [
  'tight',
  'normal',
  'wide',
  'wider',
] as const;

export type LetterSpacingToken = (typeof LETTER_SPACING_TOKEN)[number];

/**
 * Gets the letter-spacing value for a given token.
 * @param token The letter spacing token, e.g. 'wide'.
 * @returns The corresponding letter-spacing CSS value.
 * @example
 * ```typescript
 * getLetterSpacing('wide'); // '0.015em'
 * ```
 */
function getLetterSpacing(token: LetterSpacingToken): string {
  switch (token) {
    case 'tight': {
      return vars.letterSpace.tight;
    }
    case 'normal': {
      return vars.letterSpace.normal;
    }
    case 'wide': {
      return vars.letterSpace.wide;
    }
    case 'wider': {
      return vars.letterSpace.wider;
    }
    default: {
      return vars.letterSpace.normal;
    }
  }
}

/**
 * Letter spacing utility classes.
 * Generated dynamically from LETTER_SPACING_TOKEN.
 */
export const letterSpacing = styleVariants(
  (() => {
    const styles: Record<string, { letterSpacing: string }> = {};
    for (const token of LETTER_SPACING_TOKEN) {
      styles[token] = { letterSpacing: getLetterSpacing(token) };
    }
    return styles as Record<LetterSpacingToken, { letterSpacing: string }>;
  })()
);
