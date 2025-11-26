import { recipe } from '@vanilla-extract/recipes';

export const stackRecipe = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      'horizontal-reverse': {
        flexDirection: 'row-reverse',
      },
      vertical: {
        flexDirection: 'column',
      },
      'vertical-reverse': {
        flexDirection: 'column-reverse',
      },
    },
    gap: {
      none: {
        gap: '0px',
      },
      xsmall: {
        gap: '4px',
      },
      small: {
        gap: '8px',
      },
      medium: {
        gap: '16px',
      },
      large: {
        gap: '24px',
      },
      xlarge: {
        gap: '32px',
      },
      xxlarge: {
        gap: '40px',
      },
      xxxlarge: {
        gap: '48px',
      },
      xxxxlarge: {
        gap: '64px',
      },
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'medium',
  },
});
