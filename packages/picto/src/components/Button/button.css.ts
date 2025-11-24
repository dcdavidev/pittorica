import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

/**
 * Base button styles shared across all variants.
 */
const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.medium,
  fontFamily: vars.typography.fonts.sans,
  fontWeight: vars.typography.fontWeights.bold,
  fontSize: '1rem',
  textDecoration: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  border: 'none',
  outline: 'none',
  transition:
    'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease',
  position: 'relative',
  overflow: 'hidden',

  // Remove default button styles
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',

  // Focus-visible state (keyboard navigation)
  ':focus-visible': {
    outline: `3px solid ${vars.colors.brand['500']}`,
    outlineOffset: '3px',
  },

  // Active state
  ':active': {
    transform: 'scale(0.98)',
  },

  // Disabled state
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 1, // Remove opacity to use direct gray colors
    backgroundColor: '#e0e0e0',
    color: '#9e9e9e',
    borderColor: '#e0e0e0',
    boxShadow: 'none',
    pointerEvents: 'none',
  },
});

/**
 * CSS Recipe for Button component.
 * Supports multiple variants: filled, tonal, outlined, elevated, text.
 */
export const buttonRecipe = recipe({
  base: buttonBase,

  variants: {
    variant: {
      filled: {
        backgroundColor: vars.colors.brand['500'],
        color: vars.colors.white,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.brand['600'],
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.brand['700'],
          },
        },
      },
      tonal: {
        backgroundColor: vars.colors.brand['100'],
        color: vars.colors.brand['700'],
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.brand['200'],
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.brand['300'],
          },
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: vars.colors.brand['500'],
        border: `1px solid ${vars.colors.brand['500']}`,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.brand['100'],
            borderColor: vars.colors.brand['600'],
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.brand['200'],
          },
        },
      },
      elevated: {
        backgroundColor: vars.colors.white,
        color: vars.colors.brand['500'],
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.brand['100'],
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
          },
          '&:active:not(:disabled)': {
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: vars.colors.brand['500'],
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.brand['100'],
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.brand['200'],
          },
        },
      },
    },

    /**
     * Button Sizes (MD3 compliant).
     */
    size: {
      xs: {
        height: '24px',
        paddingLeft: vars.space.medium,
        paddingRight: vars.space.medium,
        fontSize: vars.typography.fontSizes.bodySmall,
      },
      small: {
        height: '32px',
        paddingLeft: vars.space.large, // 16dp as per MD3 recommendation
        paddingRight: vars.space.large,
        fontSize: vars.typography.fontSizes.bodySmall,
      },
      medium: {
        height: '40px',
        paddingLeft: vars.space.xlarge,
        paddingRight: vars.space.xlarge,
        fontSize: vars.typography.fontSizes.bodyMedium,
      },
      large: {
        height: '48px',
        paddingLeft: vars.space.xlarge,
        paddingRight: vars.space.xlarge,
        fontSize: vars.typography.fontSizes.bodyLarge,
      },
      xl: {
        height: '56px',
        paddingLeft: vars.space.xxlarge,
        paddingRight: vars.space.xxlarge,
        fontSize: vars.typography.fontSizes.bodyLarge,
      },
    },

    /**
     * Button Shapes (MD3).
     */
    shape: {
      round: {
        borderRadius: vars.border.radius.full,
        selectors: {
          '&:active:not(:disabled)': {
            borderRadius: vars.border.radius.medium,
          },
        },
      },
      square: {
        borderRadius: vars.border.radius.medium,
        selectors: {
          '&:active:not(:disabled)': {
            borderRadius: vars.border.radius.small,
          },
        },
      },
    },

    /**
     * Full width option.
     */
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },

    /**
     * Toggle/Selection state.
     */
    selected: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    // Selected state for filled variant
    {
      variants: { variant: 'filled', selected: true },
      style: {
        backgroundColor: vars.colors.brand['700'],
      },
    },
    // Selected state for tonal variant
    {
      variants: { variant: 'tonal', selected: true },
      style: {
        backgroundColor: vars.colors.brand['300'],
      },
    },
    // Selected state for outlined variant
    {
      variants: { variant: 'outlined', selected: true },
      style: {
        backgroundColor: vars.colors.brand['100'],
        borderColor: vars.colors.brand['700'],
      },
    },
  ],

  defaultVariants: {
    variant: 'filled',
    size: 'medium',
    shape: 'round',
    fullWidth: false,
    selected: false,
  },
});

/**
 * Icon wrapper styles for start/end icons.
 */
export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '1.25em', // 125% del font size del bottone
});
