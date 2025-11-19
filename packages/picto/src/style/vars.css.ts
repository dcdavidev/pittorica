import '@fontsource/momo-trust-display';
import '@fontsource/momo-trust-sans';

import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

import { generateThemeObject } from '../helpers/generate-theme-object.js';
import { generateTones } from '../helpers/generate-tones.js';
import { ELEVATION_SCALE } from './elevation.css.js';

// Generate tonal colors for primary
const primaryTones = generateTones('#08a4bd');
const neutralTones = generateTones('#08a4bd'); // Use primary for theme backgrounds

export const vars = createGlobalTheme(':root', {
  color: generateThemeObject({
    dark: '#131b23',
    light: '#e9f1f7',
    primary: '#08a4bd',
    secondary: '#d87cac',
    tertiary: '#67597a',
    neutral: '#787579',
    'neutral-variant': '#6a6670',
    error: '#9b2915',
    success: '#004f2d',
    info: '#08a4bd',
    danger: '#e9b44c',
    // Container colors (lighter variants)
    primaryContainer: '#e0f4f7',
    secondaryContainer: '#fcebf2',
    tertiaryContainer: '#f0ecf2',
    neutralContainer: '#f5f4f5',
    'neutral-variantContainer': '#f0eff2',
    errorContainer: '#fceaea',
    successContainer: '#e0f2e8',
    infoContainer: '#e0f4f7',
    dangerContainer: '#fef9e7',
    // Tonal colors
    primaryBase: primaryTones.base,
    primaryOnBase: primaryTones.onBase,
    primaryContainerTone: primaryTones.container,
    primaryOnContainer: primaryTones.onContainer,
  }),
  elevation: ELEVATION_SCALE,
  font: {
    display: 'Momo Trust Display, serif',
    sans: 'Momo Trust Sans, sans-serif',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpace: {
    tight: '-0.015em',
    normal: '0',
    wide: '0.015em',
    wider: '0.025em',
  },
  lineHeight: {
    tight: '0.75rem',
    normal: '1rem',
    relaxed: '1.25rem',
  },
  radius: {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.75rem',
    full: '9999px',
  },
  shape: {
    none: '0',
    square: '0.5rem',
    round: '1rem',
    circle: '50%',
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
});

// Global styles for themes and body backgrounds
globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.sans,
  backgroundColor: neutralTones.tone99, // Very light tone from primary
  color: neutralTones.tone10, // Dark text for contrast
});

// Light theme
globalStyle('body.picto-theme-light', {
  backgroundColor: neutralTones.tone99, // Very light tone (99) from primary
  color: neutralTones.tone10, // Dark text
});

// Dark theme
globalStyle('body.picto-theme-dark', {
  backgroundColor: neutralTones.tone10, // Very dark tone (10) from primary
  color: neutralTones.tone99, // Light text
});

// Surface backgrounds - very light but slightly darker than body
globalStyle('.picto-surface-bg', {
  backgroundColor: neutralTones.tone98, // Slightly darker than body (98)
  color: neutralTones.tone10, // Dark text
});

// Dark theme overrides for surface
globalStyle('body.picto-theme-dark .picto-surface-bg', {
  backgroundColor: neutralTones.tone20, // Slightly lighter than dark body (20)
  color: neutralTones.tone99, // Light text
});

// Primary background class
globalStyle('.picto-primary-bg', {
  backgroundColor: vars.color.primaryContainerTone,
});
