import { createThemeContract } from '@vanilla-extract/css';

const colorScaleContract = () => ({
  0: { color: '', onColor: '' },
  100: { color: '', onColor: '' },
  200: { color: '', onColor: '' },
  300: { color: '', onColor: '' },
  400: { color: '', onColor: '' },
  500: { color: '', onColor: '' },
  600: { color: '', onColor: '' },
  700: { color: '', onColor: '' },
  800: { color: '', onColor: '' },
  900: { color: '', onColor: '' },
});

export const colorContract = createThemeContract({
  transparent: '',
  black: colorScaleContract(),
  white: colorScaleContract(),
  gray: colorScaleContract(),
  brand: colorScaleContract(),
  info: colorScaleContract(),
  success: colorScaleContract(),
  warning: colorScaleContract(),
  error: colorScaleContract(),
});
