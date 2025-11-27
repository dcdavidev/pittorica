import Color from 'color';

import { type ScalableColorToken } from '../contracts/color.css.js';
import { PALETTE } from '../palette.js';

const getContrastTextColor = (
  hexColor: string,
  black: string = PALETTE.black,
  white: string = PALETTE.white
): string => {
  let bg;
  try {
    bg = Color(hexColor);
  } catch {
    return white;
  }

  const blackColor = Color(black);
  const whiteColor = Color(white);

  const contrastWithBlack = bg.contrast(blackColor);
  const contrastWithWhite = bg.contrast(whiteColor);

  return contrastWithWhite > contrastWithBlack ? white : black;
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
    onColor: getContrastTextColor(finalColorHex, black, white),
  };
};

const createColorScale = <C extends ScalableColorToken>(
  colorName: C,
  baseColorHex: string,
  white: string,
  black: string,
  isDark: boolean
) =>
  ({
    [colorName]: getScaleValue(baseColorHex, white, black, 0, isDark),
    100: getScaleValue(baseColorHex, white, black, 100, isDark),
    200: getScaleValue(baseColorHex, white, black, 200, isDark),
    300: getScaleValue(baseColorHex, white, black, 300, isDark),
    400: getScaleValue(baseColorHex, white, black, 400, isDark),
    500: getScaleValue(baseColorHex, white, black, 500, isDark),
    600: getScaleValue(baseColorHex, white, black, 600, isDark),
    700: getScaleValue(baseColorHex, white, black, 700, isDark),
    800: getScaleValue(baseColorHex, white, black, 800, isDark),
    900: getScaleValue(baseColorHex, white, black, 900, isDark),
  }) as const;

const colorScaleTheme = (
  colorName: ScalableColorToken,
  baseColorHex: string,
  white: string,
  black: string
) => {
  const isDark = Color(baseColorHex).luminosity() < 0.5;

  return createColorScale(colorName, baseColorHex, white, black, isDark);
};

export const colorTheme = {
  transparent: PALETTE.transparent,
  black: colorScaleTheme('black', PALETTE.black, PALETTE.white, PALETTE.black),
  white: colorScaleTheme('white', PALETTE.white, PALETTE.white, PALETTE.black),
  gray: colorScaleTheme('gray', PALETTE.gray, PALETTE.white, PALETTE.black),
  brand: colorScaleTheme('brand', PALETTE.brand, PALETTE.white, PALETTE.black),
  info: colorScaleTheme('info', PALETTE.info, PALETTE.white, PALETTE.black),
  success: colorScaleTheme(
    'success',
    PALETTE.success,
    PALETTE.white,
    PALETTE.black
  ),
  warning: colorScaleTheme(
    'warning',
    PALETTE.warning,
    PALETTE.white,
    PALETTE.black
  ),
  error: colorScaleTheme('error', PALETTE.error, PALETTE.white, PALETTE.black),
};
