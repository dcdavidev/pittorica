import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

/**
 * Vanilla Extract recipe for the Abbreviation component.
 * Provides styling for abbreviations with dotted underline and help cursor.
 */
export const abbreviationRecipe = recipe({
  base: {
    textDecoration: 'underline dotted',
    cursor: 'help',
    textUnderlineOffset: '3px',
    color: vars.colors.text,
  },
  variants: {
    variant: {
      /**
       * Default variant with dotted underline.
       */
      default: {},

      /**
       * Variant without underline decoration.
       */
      noUnderline: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
