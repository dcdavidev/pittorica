import Color from 'color';

import { PALETTE } from '../palette';

const getOnColor = (hexColor: string, black: string, white: string): string => {
  const color = Color(hexColor);
  return color.luminosity() > 0.45 ? black : white;
};

const getScaleValue = (
  baseColorHex: string,
  white: string,
  black: string,
  index: number,
  isDark: boolean
) => {
  const color = Color(baseColorHex);
  const amount = index / 1000;
  let finalColorHex: string;

  if (index === 0) {
    finalColorHex = color.hex();
  } else if (isDark) {
    finalColorHex = color.lighten(amount).hex();
  } else {
    finalColorHex = color.darken(amount).hex();
  }

  return {
    color: finalColorHex,
    onColor: getOnColor(finalColorHex, black, white),
  };
};

const createColorScale = (
  baseColorHex: string,
  white: string,
  black: string,
  isDark: boolean
) => ({
  0: getScaleValue(baseColorHex, white, black, 0, isDark),
  100: getScaleValue(baseColorHex, white, black, 100, isDark),
  200: getScaleValue(baseColorHex, white, black, 200, isDark),
  300: getScaleValue(baseColorHex, white, black, 300, isDark),
  400: getScaleValue(baseColorHex, white, black, 400, isDark),
  500: getScaleValue(baseColorHex, white, black, 500, isDark),
  600: getScaleValue(baseColorHex, white, black, 600, isDark),
  700: getScaleValue(baseColorHex, white, black, 700, isDark),
  800: getScaleValue(baseColorHex, white, black, 800, isDark),
  900: getScaleValue(baseColorHex, white, black, 900, isDark),
});

const colorScaleTheme = (
  baseColorHex: string,
  white: string,
  black: string
) => {
  const isDark = Color(baseColorHex).luminosity() < 0.5;

  return createColorScale(baseColorHex, white, black, isDark);
};

export const colorTheme = {
  transparent: PALETTE.transparent,
  black: colorScaleTheme(PALETTE.black, PALETTE.white, PALETTE.black),
  white: colorScaleTheme(PALETTE.white, PALETTE.white, PALETTE.black),
  gray: colorScaleTheme(PALETTE.gray, PALETTE.white, PALETTE.black),
  brand: colorScaleTheme(PALETTE.brand, PALETTE.white, PALETTE.black),
  info: colorScaleTheme(PALETTE.info, PALETTE.white, PALETTE.black),
  success: colorScaleTheme(PALETTE.success, PALETTE.white, PALETTE.black),
  warning: colorScaleTheme(PALETTE.warning, PALETTE.white, PALETTE.black),
  error: colorScaleTheme(PALETTE.error, PALETTE.white, PALETTE.black),
};
