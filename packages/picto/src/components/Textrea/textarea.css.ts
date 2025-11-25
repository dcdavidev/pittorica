import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '../../styles/sprinkles.css.js';
import { vars } from '../../styles/theme.css.js';

const baseStyle = style([
  atoms({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  }),
  {
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    fontFamily: vars.typography.fonts.sans,
    fontSize: vars.typography.fontSizes.bodyLarge,
    color: vars.colors.text,
    background: 'transparent',
    border: '1px solid',
    borderColor: vars.colors.uiBorder,
    borderRadius: vars.border.radius.medium,
    resize: 'vertical',
    minHeight: '3rem',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    overflow: 'hidden',
    padding: vars.space.medium,
    selectors: {
      '&:focus-within': {
        outline: `2px solid ${vars.colors.brand[500]}`,
        outlineOffset: '-1px',
      },
    },
  },
]);

export const textareaRecipe = recipe({
  base: baseStyle,
  variants: {
    variant: {
      outlined: style({
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: vars.colors.uiBorder,
        ':hover': { borderColor: vars.colors.gray[700] },
        selectors: {
          '&:focus-within': {
            borderColor: vars.colors.brand[500],
          },
        },
      }),
      filled: style([
        atoms({
          backgroundColor: 'gray-100',
        }),
        {
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderColor: vars.colors.gray[400],
          borderTopLeftRadius: vars.border.radius.medium,
          borderTopRightRadius: vars.border.radius.medium,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          color: vars.colors.gray[900],
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
    },
    size: {
      small: style([
        atoms({
          padding: 'small',
          fontSize: 'bodySmall',
        }),
        { minHeight: '2.5rem' },
      ]),
      medium: style([
        atoms({
          padding: 'medium',
          fontSize: 'bodyMedium',
        }),
        { minHeight: '3rem' },
      ]),
      large: style([
        atoms({
          padding: 'large',
          fontSize: 'bodyLarge',
        }),
        { minHeight: '3.5rem' },
      ]),
    },
    error: {
      true: style({
        borderColor: vars.colors.error[500],
        boxShadow: `0 0 0 1px ${vars.colors.error[500]}`,
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
        opacity: 0.6,
        cursor: 'not-allowed',
        backgroundColor: vars.colors.gray[100],
        pointerEvents: 'none',
      }),
    },
  },
  defaultVariants: {
    variant: 'outlined',
    size: 'medium',
  },
});
