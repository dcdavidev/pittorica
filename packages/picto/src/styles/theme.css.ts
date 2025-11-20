import { createTheme } from '@vanilla-extract/css';

import { palette } from './tokens.js';

/**
 * Creates the base theme (Light Mode) and generates CSS variables.
 * @description
 * This theme maps the raw palette tokens to semantic CSS variables.
 * - `colors`: Contains the full tonal palettes and semantic mappings (background, text).
 * - `space`: Defines the spacing scale for margins and paddings using rem units (assuming 16px base).
 *
 * @returns {Array} A tuple containing the className and the vars object.
 */
export const [themeClass, vars] = createTheme({
  colors: {
    // Full tonal palettes (100-900)
    brand: palette.brand,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    info: palette.info,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,

    // Semantic colors (mapped to our custom neutrals)
    background: palette.light, // #e9f1f7
    text: palette.dark, // #131b23

    // neutrals
    light: palette.light,
    dark: palette.dark,
    white: '#ffffff',
    black: '#000000',
  },
  space: {
    none: '0',
    small: '0.25rem', // 4px
    medium: '0.5rem', // 8px
    large: '1rem', // 16px
    xlarge: '2rem', // 32px
    xxlarge: '4rem', // 64px
  },
  border: {
    radius: {
      small: '0.25rem', // 4px
      medium: '0.5rem', // 8px
      full: '9999px',
    },
  },
  typography: {
    fonts: {
      sans: '"Roboto", "Helvetica", "Arial", sans-serif', // MD3 standard
      serif: '"Georgia", serif',
      mono: '"Roboto Mono", monospace',
    },
    fontSizes: {
      displayLarge: '3.56rem', // 57px
      displayMedium: '2.81rem', // 45px
      displaySmall: '2.25rem', // 36px

      headlineLarge: '2rem', // 32px
      headlineMedium: '1.75rem', // 28px
      headlineSmall: '1.5rem', // 24px

      titleLarge: '1.375rem', // 22px
      titleMedium: '1rem', // 16px
      titleSmall: '0.875rem', // 14px

      bodyLarge: '1rem', // 16px
      bodyMedium: '0.875rem', // 14px
      bodySmall: '0.75rem', // 12px

      labelLarge: '0.875rem', // 14px
      labelMedium: '0.75rem', // 12px
      labelSmall: '0.68rem', // 11px
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
