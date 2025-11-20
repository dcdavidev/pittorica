import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const quoteRecipe = recipe({
  base: {
    fontStyle: 'italic',
    color: vars.colors.text,
    quotes: '"“" "”" "‘" "’"',
    selectors: {
      '&::before': {
        content: 'open-quote',
        color: vars.colors.dark,
      },
      '&::after': {
        content: 'close-quote',
        color: vars.colors.dark,
      },
    },
  },
});
