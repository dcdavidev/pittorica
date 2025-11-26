import Color from 'color';

import { pitto } from '../styles/contract.css.js';

type ConcreteSurfaceStructure = {
  [K in keyof typeof pitto.surface]: { color: string; onColor: string };
};

const getContrastTextColor = (
  bgColor: string,
  white: string,
  black: string
): string => {
  return Color(bgColor).isLight() ? black : white;
};

/**
 * Generates a dynamic surface color scale based on the provided brand color and contrast colors.
 * @param brandColorHEX The base brand color in HEX format to generate the surface scale from.
 * @param contrastWhite The HEX color to use for text/icons on light backgrounds.
 * @param contrastBlack The HEX color to use for text/icons on dark backgrounds.
 * @returns An object mapping surface levels to their corresponding color and onColor values.
 * @example
 * const surfaces = getDynamicSurfaceScale('#ff0000', '#ffffff', '#000000');
 * console.log(surfaces['100'].color); // Outputs a HEX color string for surface 100
 */
export function getDynamicSurfaceScale(
  brandColorHEX: string,
  contrastWhite: string,
  contrastBlack: string
): ConcreteSurfaceStructure {
  const brand = Color(brandColorHEX);
  const isBrandLight = brand.isLight();
  const result: Partial<ConcreteSurfaceStructure> = {};

  const levels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

  for (let i = 0; i < 9; i++) {
    const level = levels[i];
    const colorKey =
      level.toString() as unknown as keyof ConcreteSurfaceStructure;

    const step = (9 - i) * 0.1;

    const newColor = isBrandLight
      ? brand.darken(step * 0.5).hex()
      : brand.lighten(step).hex();

    result[colorKey] = {
      color: newColor,
      onColor: getContrastTextColor(newColor, contrastWhite, contrastBlack),
    };
  }

  const color900 = brand.hex();
  result['900' as unknown as keyof ConcreteSurfaceStructure] = {
    color: color900,
    onColor: getContrastTextColor(color900, contrastWhite, contrastBlack),
  };

  return result as ConcreteSurfaceStructure;
}
