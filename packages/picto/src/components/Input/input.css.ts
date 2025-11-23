import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../styles/sprinkles.css.js';
import { vars } from '../../styles/theme.css.js';

export const inputRecipe = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }),
    {
      position: 'relative',
      transition: 'all 0.2s ease-in-out',
      cursor: 'text',

      fontFamily: vars.typography.fonts.sans,
      fontSize: vars.typography.fontSizes.bodyLarge,

      selectors: {
        '&:focus-within': {
          outline: `2px solid ${vars.colors.brand[500]}`,
          outlineOffset: '-1px',
        },
      },
    },
  ]),

  variants: {
    variant: {
      filled: style([
        atoms({
          backgroundColor: 'gray-100',
          borderColor: 'gray-400',
        }),
        {
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderTopLeftRadius: vars.border.radius.medium,
          borderTopRightRadius: vars.border.radius.medium,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,

          ':hover': {
            backgroundColor: vars.colors.gray[200],
          },
          selectors: {
            '&:focus-within': {
              backgroundColor: vars.colors.gray[100],
              borderBottomColor: vars.colors.brand[500],
            },
          },
        },
      ]),

      outlined: style([
        atoms({
          borderColor: 'gray-400',
          borderRadius: 'medium',
        }),
        {
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'solid',

          ':hover': {
            borderColor: vars.colors.gray[700],
          },
          selectors: {
            '&:focus-within': {
              borderColor: vars.colors.brand[500],
            },
          },
        },
      ]),
    },

    size: {
      small: style([
        atoms({
          paddingX: 'medium',
          fontSize: 'bodySmall',
        }),
        { height: '2.5rem' },
      ]),
      medium: style([
        atoms({
          paddingX: 'medium',
          fontSize: 'bodyMedium',
        }),
        { height: '3rem' },
      ]),
      large: style([
        atoms({
          paddingX: 'large',
          fontSize: 'bodyLarge',
        }),
        { height: '3.5rem' },
      ]),
    },

    error: {
      true: style({
        borderColor: vars.colors.error[500],
        selectors: {
          '&:focus-within': {
            outlineColor: vars.colors.error[500],
            borderColor: vars.colors.error[500],
          },
        },
      }),
    },

    disabled: {
      true: style({
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: vars.colors.gray[100],
        pointerEvents: 'none',
      }),
    },

    fullWidth: {
      true: atoms({ width: '100%' }),
      false: style({ width: 'auto', display: 'inline-flex' }),
    },
  },

  defaultVariants: {
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
  },
});

// NATIVE INPUT
export const nativeInput = style({
  border: 'none',
  background: 'transparent',
  outline: 'none',
  width: '100%',
  height: '100%',
  color: vars.colors.text,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  padding: 0,
  margin: 0,

  '::placeholder': {
    color: vars.colors.gray[500],
    opacity: 1,
  },

  ':disabled': {
    cursor: 'not-allowed',
  },
});

// DECORATORS
export const decorator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.gray[600],
  flexShrink: 0,
});

export const startDecoratorStyle = style([
  decorator,
  { marginRight: vars.space.medium },
]);

export const endDecoratorStyle = style([
  decorator,
  { marginLeft: vars.space.medium },
]);
