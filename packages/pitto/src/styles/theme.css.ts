import { createGlobalTheme } from '@vanilla-extract/css';

import { pitto } from './contract.css';

import { getDynamicSurfaceScale } from '../helpers/get-surface-colors.js';
import { PALETTE } from './default-palette.js';

export const theme = createGlobalTheme(':root', pitto, {
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
        '"Momo Trust Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      sans: '"Inter Variable", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", "Fira Code Variable", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
      serif:
        '"Roboto Serif Variable", "Roboto Serif", Georgia, Cambria, "Times New Roman", Times, serif',
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
  surface: getDynamicSurfaceScale(PALETTE.brand, PALETTE.white, PALETTE.black),
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
