import { createThemeContract } from '@vanilla-extract/css';

export const pitto = createThemeContract({
  color: {
    transparent: '',

    // neutrals
    black: '',
    white: '',
    gray: '',

    // semantic
    brand: '',
    info: '',
    success: '',
    warning: '',
    error: '',
  },
  font: {
    family: {
      brand: '',
      sans: '',
      mono: '',
      serif: '',
    },
    weight: {
      light: '',
      regular: '',
      medium: '',
      semibold: '',
      bold: '',
      extrabold: '',
    },
    size: {
      root: '',
      body: {
        xsmall: '',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
        xxlarge: '',
      },
      label: {
        xsmall: '',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
        xxlarge: '',
      },
      title: {
        xsmall: '',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
        xxlarge: '',
      },
      headline: {
        xsmall: '',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
        xxlarge: '',
      },
      display: {
        xsmall: '',
        small: '',
        medium: '',
        large: '',
        xlarge: '',
        xxlarge: '',
      },
    },
  },
  surface: {
    0: {
      color: '',
      onColor: '',
    },
    100: {
      color: '',
      onColor: '',
    },
    200: {
      color: '',
      onColor: '',
    },
    300: {
      color: '',
      onColor: '',
    },
    400: {
      color: '',
      onColor: '',
    },
    500: {
      color: '',
      onColor: '',
    },
    600: {
      color: '',
      onColor: '',
    },
    700: {
      color: '',
      onColor: '',
    },
    800: {
      color: '',
      onColor: '',
    },
    900: {
      color: '',
      onColor: '',
    },
  },
  border: {
    radius: {
      none: '',
      xsmall: '',
      small: '',
      medium: '',
      large: '',
      xlarge: '',
      xxlarge: '',
      full: '',
    },
  },
  spacing: {
    none: '',
    xsmall: '',
    small: '',
    medium: '',
    large: '',
    xlarge: '',
    xxlarge: '',
    xxxlarge: '',
    xxxxlarge: '',
  },
});
