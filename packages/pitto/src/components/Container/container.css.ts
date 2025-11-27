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
        maxWidth: '87.5rem', // 1400px
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      xlarge: {
        maxWidth: '75rem', // 1200px
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      large: {
        maxWidth: '62rem', // 992px
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      medium: {
        maxWidth: '48rem', // 768px
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      small: {
        maxWidth: '36rem', // 576px
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      xsmall: {
        maxWidth: '22.5rem', // 360px
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
