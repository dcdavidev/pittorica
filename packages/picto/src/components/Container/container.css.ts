import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../styles/sprinkles.css.js';

const maxWidths = {
  small: '40rem', // ~640px
  medium: '48rem', // ~768px
  large: '64rem', // ~1024px
  xlarge: '80rem', // ~1280px
  xxlarge: '96rem', // ~1536px
};

export const containerRecipe = recipe({
  base: atoms({
    width: '100%',
    marginX: 'auto',
    paddingX: {
      mobile: 'medium',
      tablet: 'large',
      desktop: 'xlarge',
    },
  }),

  variants: {
    size: {
      none: atoms({
        maxWidth: '100%',
        paddingX: 'none',
      }),
      small: style({ maxWidth: maxWidths.small }),
      medium: style({ maxWidth: maxWidths.medium }),
      large: style({ maxWidth: maxWidths.large }),
      xlarge: style({ maxWidth: maxWidths.xlarge }),
      xxlarge: style({ maxWidth: maxWidths.xxlarge }),
    },
  },

  defaultVariants: {
    size: 'large',
  },
});
