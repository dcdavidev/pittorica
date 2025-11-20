import { createTheme, createThemeContract } from '@vanilla-extract/css';

import { palette } from './tokens.js';

/**
 * Helper to create the contract structure for color scales (100-900).
 * Used to avoid typing '100': '', '200': ''... manually in the contract.
 */
const colorScaleContract = {
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: '',
};

/**
 * 1. THEME CONTRACT
 * Defines the shape of our theme variables without assigning values yet.
 * This creates the stable CSS variables (e.g. --colors-brand-500) that can be overridden.
 */
export const vars = createThemeContract({
  colors: {
    brand: colorScaleContract,
    secondary: colorScaleContract,
    tertiary: colorScaleContract,
    info: colorScaleContract,
    success: colorScaleContract,
    warning: colorScaleContract,
    error: colorScaleContract,

    background: '',
    text: '',

    light: '',
    dark: '',
    white: '',
    black: '',
  },
  space: {
    none: '',
    small: '',
    medium: '',
    large: '',
    xlarge: '',
    xxlarge: '',
  },
  border: {
    radius: {
      small: '',
      medium: '',
      full: '',
    },
  },
  typography: {
    fonts: {
      sans: '',
      serif: '',
      mono: '',
    },
    fontSizes: {
      displayLarge: '',
      displayMedium: '',
      displaySmall: '',

      headlineLarge: '',
      headlineMedium: '',
      headlineSmall: '',

      titleLarge: '',
      titleMedium: '',
      titleSmall: '',

      bodyLarge: '',
      bodyMedium: '',
      bodySmall: '',

      labelLarge: '',
      labelMedium: '',
      labelSmall: '',
    },
    fontWeights: {
      regular: '',
      medium: '',
      bold: '',
    },
    lineHeights: {
      tight: '',
      normal: '',
      loose: '',
    },
  },
});

/**
 * 2. DEFAULT THEME IMPLEMENTATION
 * Applies the actual values from tokens.ts to the contract variables.
 */
export const themeClass = createTheme(vars, {
  colors: {
    brand: palette.brand,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    info: palette.info,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,

    background: palette.light,
    text: palette.dark,

    light: palette.light,
    dark: palette.dark,
    white: '#ffffff',
    black: '#000000',
  },
  space: {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    xlarge: '2rem',
    xxlarge: '4rem',
  },
  border: {
    radius: {
      small: '0.25rem',
      medium: '0.5rem',
      full: '9999px',
    },
  },
  typography: {
    fonts: {
      sans: '"Roboto", "Helvetica", "Arial", sans-serif',
      serif: '"Georgia", serif',
      mono: '"Roboto Mono", monospace',
    },
    fontSizes: {
      displayLarge: '3.56rem',
      displayMedium: '2.81rem',
      displaySmall: '2.25rem',

      headlineLarge: '2rem',
      headlineMedium: '1.75rem',
      headlineSmall: '1.5rem',

      titleLarge: '1.375rem',
      titleMedium: '1rem',
      titleSmall: '0.875rem',

      bodyLarge: '1rem',
      bodyMedium: '0.875rem',
      bodySmall: '0.75rem',

      labelLarge: '0.875rem',
      labelMedium: '0.75rem',
      labelSmall: '0.68rem',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      loose: '1.75',
    },
  },
});
