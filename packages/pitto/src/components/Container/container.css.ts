import { recipe } from '@vanilla-extract/recipes';

export const containerRecipe = recipe({
  base: {
    width: '100%',
    maxWidth: '100%',
  },

  variants: {
    size: {
      none: {
        marginLeft: 0,
        marginRight: 0,
      },
      fixed: {
        marginLeft: '1rem',
        marginRight: '1rem',
      },
      xxlarge: {
        maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      xlarge: {
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      large: {
        maxWidth: '992px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      medium: {
        maxWidth: '768px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      small: {
        maxWidth: '576px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      xsmall: {
        maxWidth: '360px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type ContainerVariants = Parameters<typeof containerRecipe>[0];
