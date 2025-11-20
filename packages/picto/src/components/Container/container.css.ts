import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../styles/sprinkles.css.js';

export const containerRecipe = recipe({
  base: [
    atoms({
      width: '100%',
      marginX: 'auto',
      paddingX: {
        mobile: 'medium',
        tablet: 'large',
        desktop: 'xlarge',
      },
    }),
  ],
  variants: {
    size: {
      sm: atoms({ maxWidth: 'sm' }),
      md: atoms({ maxWidth: 'md' }),
      lg: atoms({ maxWidth: 'lg' }),
      xl: atoms({ maxWidth: 'xl' }),
      full: atoms({ maxWidth: '100%' }),
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});
