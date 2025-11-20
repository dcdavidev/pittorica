import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const inlineRecipe = recipe({
  base: {
    // Base reset
  },
  variants: {
    highlight: {
      true: {
        backgroundColor: vars.colors.warning['200'],
        color: vars.colors.text,
        padding: '0 0.1em',
        borderRadius: vars.border.radius.small,
      },
    },
  },
});
