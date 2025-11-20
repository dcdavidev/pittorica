import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const preRecipe = recipe({
  base: {
    fontFamily: vars.typography.fonts.mono,
    fontSize: vars.typography.fontSizes.bodySmall,
    lineHeight: vars.typography.lineHeights.normal,
    overflowX: 'auto',
    whiteSpace: 'pre',
    margin: 0,
    maxWidth: '100%',
  },
  variants: {
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        padding: 0,
        border: 'none',
      },
      block: {
        backgroundColor: vars.colors.neutrals.light,
        padding: vars.space.medium,
        borderRadius: vars.border.radius.medium,
        border: `1px solid ${vars.colors.neutrals.dark}`,
        color: vars.colors.text,
      },
    },
  },
  defaultVariants: {
    variant: 'block',
  },
});
