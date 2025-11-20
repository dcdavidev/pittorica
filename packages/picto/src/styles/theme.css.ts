import { createTheme, createThemeContract } from '@vanilla-extract/css';

import { palette } from './tokens.js';

/**
 * Helper to create the contract structure for color scales (100-900).
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
 * Type definitions to satisfy TypeScript when mapping tokens to contract.
 * This tells TS that our dynamic palette strictly matches the contract shape.
 */
type ColorScale = typeof colorScaleContract;

/**
 * THEME CONTRACT
 * Defines the shape of our theme variables.
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
      display: '',
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
 * DEFAULT THEME IMPLEMENTATION.
 */
export const themeClass = createTheme(vars, {
  colors: {
    brand: palette.brand as ColorScale,
    secondary: palette.secondary as ColorScale,
    tertiary: palette.tertiary as ColorScale,
    info: palette.info as ColorScale,
    success: palette.success as ColorScale,
    warning: palette.warning as ColorScale,
    error: palette.error as ColorScale,

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
      display: '"Impact", "Arial Black", sans-serif',
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
