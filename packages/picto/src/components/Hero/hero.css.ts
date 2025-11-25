import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../styles/sprinkles.css.js';

const minHeights = {
  small: '20rem', // ~320px
  medium: '30rem', // ~480px
  large: '40rem', // ~640px
  xlarge: '50rem', // ~800px
  xxlarge: '60rem', // ~960px
  screen: '100vh', // Full viewport height
};

export const heroRecipe = recipe({
  base: style([
    atoms({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingY: 'xlarge',
      paddingX: {
        mobile: 'medium',
        tablet: 'large',
        desktop: 'xlarge',
      },
    }),
    {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    },
  ]),

  variants: {
    size: {
      none: style({ minHeight: 'auto' }),
      small: style({ minHeight: minHeights.small }),
      medium: style({ minHeight: minHeights.medium }),
      large: style({ minHeight: minHeights.large }),
      xlarge: style({ minHeight: minHeights.xlarge }),
      xxlarge: style({ minHeight: minHeights.xxlarge }),
      screen: style({ minHeight: minHeights.screen }),
    },
    shape: {
      none: style({ borderRadius: 0 }),
      squared: style({ borderRadius: 0 }),
      rounded: atoms({ borderRadius: 'medium' }),
      circle: atoms({ borderRadius: 'full' }),
    },
  },

  defaultVariants: {
    size: 'medium',
    shape: 'none',
  },
});

export const backgroundLayer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  objectFit: 'cover',
});

export const overlayLayer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
});

export const overlayVariants = recipe({
  variants: {
    style: {
      none: {},
      glass: style({
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }),
      blured: style({
        backdropFilter: 'blur(8px)',
      }),
      darken: style({
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }),
      beams: {},
      bubbles: {},
    },
  },
});

export const contentLayer = style({
  position: 'relative',
  zIndex: 10,
  width: '100%',
  display: 'flex',
  flexDirection: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
});
