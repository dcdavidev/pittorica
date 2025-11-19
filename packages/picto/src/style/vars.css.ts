import '@fontsource/momo-trust-display';
import '@fontsource/momo-trust-sans';

import {
  createGlobalTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';

import { ELEVATION_SCALE } from './elevation.css.js';
import { createPictoTheme, defaultPalette } from './theme.js';

// Define themeContract here
const themeContract = {
  primary: '',
  onPrimary: '',
  primaryContainer: '',
  onPrimaryContainer: '',
  secondary: '',
  onSecondary: '',
  secondaryContainer: '',
  onSecondaryContainer: '',
  tertiary: '',
  onTertiary: '',
  tertiaryContainer: '',
  onTertiaryContainer: '',
  error: '',
  onError: '',
  errorContainer: '',
  onErrorContainer: '',
  success: '',
  onSuccess: '',
  successContainer: '',
  onSuccessContainer: '',
  info: '',
  onInfo: '',
  infoContainer: '',
  onInfoContainer: '',
  danger: '',
  onDanger: '',
  dangerContainer: '',
  onDangerContainer: '',
  background: '',
  onBackground: '',
  surface: '',
  onSurface: '',
  surfaceVariant: '',
  onSurfaceVariant: '',
  outline: '',
  shadow: '',
  inverseSurface: '',
  inverseOnSurface: '',
  inversePrimary: '',
};

export const colorPalette = createThemeContract(themeContract);

const { lightTheme, darkTheme } = createPictoTheme(defaultPalette);

export const vars = createGlobalTheme(':root', {
  color: colorPalette,
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

// --- Base body styles ---
globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.sans,
  backgroundColor: vars.color.background,
  color: vars.color.onBackground,
});

// --- Theme application ---

// Apply light theme by default
globalStyle('body', {
  vars: lightTheme,
});

// Explicitly apply light theme
globalStyle('.picto-theme-light', {
  vars: lightTheme,
});

// Apply dark theme when class is present
globalStyle('.picto-theme-dark', {
  vars: darkTheme,
});
