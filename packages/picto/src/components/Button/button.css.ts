import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

/**
 * Interface representing the structure of a color palette scale.
 */
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  500: string;
  600: string;
  700: string;
};

/**
 * Specific keys from the theme.
 * Includes both scales (brand, error...) and flat colors (dark, light).
 */
type ButtonColor =
  | 'brand'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'gray'
  | 'dark'
  | 'light';

/**
 * Base button styles shared across all variants.
 */
const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.large,
  paddingRight: '16px',
  paddingLeft: '16px',
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

  // Focus-visible state
  ':focus-visible': {
    outlineWidth: '3px',
    outlineStyle: 'solid',
    outlineOffset: '3px',
  },

  // Active state
  ':active': {
    transform: 'scale(0.98)',
  },

  // Disabled state
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 1,
    backgroundColor: '#e0e0e0',
    color: '#9e9e9e',
    borderColor: '#e0e0e0',
    boxShadow: 'none',
    pointerEvents: 'none',
  },
});

/**
 * Helper to generate variants for COLOR SCALES (objects with 50-900).
 * Used for: brand, error, success, gray, etc.
 * @param {ButtonColor} colorName The key of the scale color.
 * @returns {Array} Compound variants.
 * @example
 * // Example usage:
 * // createColorVariants('brand')
 */
const createColorVariants = (colorName: ButtonColor) => {
  const palette = vars.colors[colorName] as unknown as ColorScale;

  return [
    // Filled
    {
      variants: { variant: 'filled', color: colorName },
      style: {
        backgroundColor: palette['500'],
        color: vars.colors.white,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: palette['600'],
            boxShadow: `0 4px 12px ${palette['500']}4D`,
          },
          '&:active:not(:disabled)': { backgroundColor: palette['700'] },
        },
      },
    },
    // Tonal
    {
      variants: { variant: 'tonal', color: colorName },
      style: {
        backgroundColor: palette['100'],
        color: palette['700'],
        selectors: {
          '&:hover:not(:disabled)': { backgroundColor: palette['200'] },
          '&:active:not(:disabled)': { backgroundColor: palette['300'] },
        },
      },
    },
    // Outlined
    {
      variants: { variant: 'outlined', color: colorName },
      style: {
        color: palette['500'],
        borderColor: palette['500'],
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: palette['50'],
            borderColor: palette['600'],
          },
          '&:active:not(:disabled)': { backgroundColor: palette['100'] },
        },
      },
    },
    // Elevated
    {
      variants: { variant: 'elevated', color: colorName },
      style: {
        color: palette['500'],
        selectors: {
          '&:hover:not(:disabled)': { backgroundColor: palette['50'] },
        },
      },
    },
    // Text
    {
      variants: { variant: 'text', color: colorName },
      style: {
        color: palette['500'],
        selectors: {
          '&:hover:not(:disabled)': { backgroundColor: palette['50'] },
          '&:active:not(:disabled)': { backgroundColor: palette['100'] },
        },
      },
    },
    // Selected States
    {
      variants: { variant: 'filled', selected: true, color: colorName },
      style: { backgroundColor: palette['700'] },
    },
    {
      variants: { variant: 'tonal', selected: true, color: colorName },
      style: { backgroundColor: palette['300'] },
    },
    {
      variants: { variant: 'outlined', selected: true, color: colorName },
      style: {
        backgroundColor: palette['100'],
        borderColor: palette['700'],
      },
    },
  ] as const;
};

/**
 * Helper to generate variants for FLAT COLORS (strings).
 * Used for: dark, light.
 * Uses color-mix() to create transparent shades without affecting text opacity.
 * @param {ButtonColor} colorName The theme key (e.g. 'dark').
 * @param {string} textColor The text color to use on filled variants.
 * @returns {Array} Compound variants.
 * @example
 * // Example usage:
 * // createFlatColorVariants('dark', '#fff')
 */
const createFlatColorVariants = (colorName: ButtonColor, textColor: string) => {
  // We force cast to string because we know these are flat colors
  const colorValue = vars.colors[colorName] as unknown as string;

  return [
    // Filled
    {
      variants: { variant: 'filled', color: colorName },
      style: {
        backgroundColor: colorValue,
        color: textColor,
        selectors: {
          '&:hover:not(:disabled)': {
            // Lighten significantly on hover for dark colors to show interaction
            // or darken for light colors.
            filter:
              colorName === 'dark' ? 'brightness(1.5)' : 'brightness(0.95)',
            boxShadow: `0 4px 12px ${colorValue}4D`,
          },
          '&:active:not(:disabled)': {
            filter:
              colorName === 'dark' ? 'brightness(1.8)' : 'brightness(0.9)',
          },
        },
      },
    },
    // Tonal (Simulated with color-mix)
    {
      variants: { variant: 'tonal', color: colorName },
      style: {
        // 10% opacity background
        backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 90%)`,
        color: colorValue,
        selectors: {
          '&:hover:not(:disabled)': {
            // 15% opacity background
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 85%)`,
          },
          '&:active:not(:disabled)': {
            // 20% opacity background
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 80%)`,
          },
        },
      },
    },
    // Outlined
    {
      variants: { variant: 'outlined', color: colorName },
      style: {
        color: colorValue,
        borderColor: colorValue,
        selectors: {
          '&:hover:not(:disabled)': {
            // 5% opacity background tint
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 95%)`,
          },
          '&:active:not(:disabled)': {
            // 10% opacity background tint
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 90%)`,
          },
        },
      },
    },
    // Text
    {
      variants: { variant: 'text', color: colorName },
      style: {
        color: colorValue,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 95%)`,
          },
          '&:active:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 90%)`,
          },
        },
      },
    },
    // Elevated
    {
      variants: { variant: 'elevated', color: colorName },
      style: {
        color: colorValue,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: `color-mix(in srgb, ${colorValue}, transparent 95%)`,
          },
        },
      },
    },
  ] as const;
};

/**
 * CSS Recipe for Button component.
 */
export const buttonRecipe = recipe({
  base: buttonBase,

  variants: {
    variant: {
      filled: {},
      tonal: {},
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
      elevated: {
        backgroundColor: vars.colors.white,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
        selectors: {
          '&:hover:not(:disabled)': {
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
          },
          '&:active:not(:disabled)': {
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
      },
    },

    color: {
      brand: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.brand['500'] },
        },
      },
      secondary: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.secondary['500'] },
        },
      },
      tertiary: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.tertiary['500'] },
        },
      },
      info: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.info['500'] },
        },
      },
      success: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.success['500'] },
        },
      },
      warning: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.warning['500'] },
        },
      },
      error: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.error['500'] },
        },
      },
      gray: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.gray['500'] },
        },
      },
      // Flat colors focus ring
      dark: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.dark },
        },
      },
      light: {
        selectors: {
          '&:focus-visible': { outlineColor: vars.colors.light },
        },
      },
    },

    size: {
      xs: {
        height: '24px',
        fontSize: vars.typography.fontSizes.bodySmall,
      },
      small: {
        height: '32px',
        fontSize: vars.typography.fontSizes.bodySmall,
      },
      medium: {
        height: '40px',
        fontSize: vars.typography.fontSizes.bodyMedium,
      },
      large: {
        height: '48px',
        fontSize: vars.typography.fontSizes.bodyLarge,
      },
      xl: {
        height: '56px',
        fontSize: vars.typography.fontSizes.bodyLarge,
      },
    },

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

    fullWidth: {
      true: { width: '100%' },
      false: { width: 'auto' },
    },

    selected: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    // --- Scale Colors (Objects) ---
    ...createColorVariants('brand'),
    ...createColorVariants('secondary'),
    ...createColorVariants('tertiary'),
    ...createColorVariants('info'),
    ...createColorVariants('success'),
    ...createColorVariants('warning'),
    ...createColorVariants('error'),
    ...createColorVariants('gray'),

    // --- Flat Colors (Strings) ---
    ...createFlatColorVariants('dark', vars.colors.white), // Dark bg, white text
    ...createFlatColorVariants('light', vars.colors.dark), // Light bg, dark text
  ],

  defaultVariants: {
    variant: 'filled',
    color: 'brand',
    size: 'medium',
    shape: 'round',
    fullWidth: false,
    selected: false,
  },
});

export const iconWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '1.25em',
});
