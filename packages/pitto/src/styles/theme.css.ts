import Color from 'color';
import { createTheme } from '@vanilla-extract/css';

import { pitto } from './contract.css';

import { getContrastTextColor } from '../helpers/get-contrast-text-color.js';
import { lightenSurfaceColors } from '../helpers/get-surface-colors.js';
import { PALETTE } from './default-palette.js';

export const theme = createTheme(pitto, {
  color: {
    transparent: 'transparent',

    // neutrals
    black: PALETTE.black,
    white: PALETTE.white,
    gray: PALETTE.gray,

    // semantic
    brand: PALETTE.brand,
    info: PALETTE.info,
    success: PALETTE.success,
    warning: PALETTE.warning,
    error: PALETTE.error,
  },
  font: {
    family: {
      brand:
        '"Momo Trust Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    },
    weight: {
      light: '200',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    size: {
      root: '16px',
      body: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        xxlarge: '1.5rem',
      },
      label: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        xxlarge: '1.5rem',
      },
      title: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        xxlarge: '1.5rem',
      },
      headline: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        xxlarge: '1.5rem',
      },
      display: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        xxlarge: '1.5rem',
      },
    },
  },
  surface: {
    0: lightenSurfaceColors(0.9, PALETTE.brand, PALETTE.white, PALETTE.black),
    100: lightenSurfaceColors(0.8, PALETTE.brand, PALETTE.white, PALETTE.black),
    200: lightenSurfaceColors(0.7, PALETTE.brand, PALETTE.white, PALETTE.black),
    300: lightenSurfaceColors(0.6, PALETTE.brand, PALETTE.white, PALETTE.black),
    400: lightenSurfaceColors(0.5, PALETTE.brand, PALETTE.white, PALETTE.black),
    500: lightenSurfaceColors(0.4, PALETTE.brand, PALETTE.white, PALETTE.black),
    600: lightenSurfaceColors(0.3, PALETTE.brand, PALETTE.white, PALETTE.black),
    700: lightenSurfaceColors(0.2, PALETTE.brand, PALETTE.white, PALETTE.black),
    800: lightenSurfaceColors(0.1, PALETTE.brand, PALETTE.white, PALETTE.black),
    900: {
      color: Color(PALETTE.brand).hex(),
      onColor: getContrastTextColor(
        Color(PALETTE.brand).hex(),
        PALETTE.white,
        PALETTE.black
      ),
    },
  },
  border: {
    radius: {
      none: '0rem',
      xsmall: '0.25rem',
      small: '0.5rem',
      medium: '0.75rem',
      large: '1rem',
      xlarge: '1.75rem',
      xxlarge: '3rem',
      full: '50%',
    },
  },
  spacing: {
    none: '0rem',
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xlarge: '1.25rem',
    xxlarge: '1.75rem',
    xxxlarge: '2rem',
    xxxxlarge: '3rem',
  },
});
