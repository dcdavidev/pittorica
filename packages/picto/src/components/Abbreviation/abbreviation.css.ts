import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const abbreviationRecipe = recipe({
  base: {
    textDecoration: 'underline dotted',
    cursor: 'help',
    textUnderlineOffset: '3px',
    color: vars.colors.text,
  },
  variants: {
    variant: {
      default: {},
      noUnderline: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
