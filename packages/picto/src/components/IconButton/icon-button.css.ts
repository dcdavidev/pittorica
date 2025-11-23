import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

const activeColorVar = '--dynamic-btn-color';
const activeColor = `var(${activeColorVar}, ${vars.colors.brand['500']})`;

const iconButtonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease',
  flexShrink: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',

  // Focus ring usa la variabile
  ':focus-visible': {
    outline: `3px solid ${activeColor}`,
    outlineOffset: '2px',
  },

  ':active': { transform: 'scale(0.92)' },

  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: vars.colors.gray ? vars.colors.gray['200'] : '#e0e0e0',
    color: vars.colors.gray ? vars.colors.gray['400'] : '#9e9e9e',
    borderColor: 'transparent',
    boxShadow: 'none',
    pointerEvents: 'none',
  },
});

export const iconButtonRecipe = recipe({
  base: iconButtonBase,

  variants: {
    variant: {
      filled: {
        backgroundColor: activeColor,
        color: vars.colors.white,
        selectors: {
          '&:hover:not(:disabled)': {
            filter: 'brightness(0.9)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          },
          '&:active:not(:disabled)': { filter: 'brightness(0.8)' },
        },
      },
      tonal: {
        backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 85%)`,
        color: activeColor,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 75%)`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 65%)`,
          },
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: activeColor,
        border: `1px solid ${activeColor}`,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 90%)`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 80%)`,
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: activeColor,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 90%)`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${activeColor}, transparent 80%)`,
          },
        },
      },
    },
    size: {
      small: { width: '32px', height: '32px', fontSize: '1.25rem' },
      medium: { width: '40px', height: '40px', fontSize: '1.5rem' },
      large: { width: '48px', height: '48px', fontSize: '1.75rem' },
      xl: { width: '56px', height: '56px', fontSize: '2rem' },
    },
    shape: {
      circle: { borderRadius: '50%' },
      square: { borderRadius: vars.border.radius.medium },
    },
  },
  defaultVariants: {
    variant: 'text',
    size: 'medium',
    shape: 'circle',
  },
});
