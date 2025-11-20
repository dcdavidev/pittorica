import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

export const blockquoteRecipe = recipe({
  base: {
    margin: 0,
    fontFamily: vars.typography.fonts.serif,
    fontStyle: 'italic',
  },
  variants: {
    variant: {
      classic: {
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        maxWidth: '30rem',
        margin: '1rem auto',
        paddingLeft: vars.space.large,
      },
      solid: {
        margin: '1rem auto',
        maxWidth: '30rem',
        borderRadius: vars.border.radius.medium,
        padding: vars.space.xlarge,
      },
      minimal: {
        margin: '1rem auto',
        maxWidth: '30rem',
        borderLeft: 'none',
        paddingLeft: vars.space.large,
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    variant: 'classic',
  },
});
