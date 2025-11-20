import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const codeRecipe = recipe({
  base: {
    fontFamily: vars.typography.fonts.mono,
    fontSize: '0.85em',
    borderRadius: vars.border.radius.small,
    padding: '0.1em 0.3em',
  },
  variants: {
    variant: {
      code: {
        color: vars.colors.brand['600'],
        backgroundColor: vars.colors.light,
      },
      kbd: {
        backgroundColor: vars.colors.dark,
        color: vars.colors.light,
        border: `1px solid ${vars.colors.dark}`,
        borderBottomWidth: '2px',
        fontSize: '0.75em',
        fontWeight: vars.typography.fontWeights.medium,
      },
      samp: {
        color: vars.colors.dark,
        backgroundColor: vars.colors.light,
      },
      var: {
        fontStyle: 'italic',
        fontWeight: vars.typography.fontWeights.bold,
        padding: 0,
      },
    },
  },
  defaultVariants: {
    variant: 'code',
  },
});
