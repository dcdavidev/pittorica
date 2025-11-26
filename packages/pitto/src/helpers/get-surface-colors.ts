import Color from 'color';

import { getContrastTextColor } from './get-contrast-text-color.js';

/**
 * Generates surface color and appropriate contrast text color based on the brand color and scale.
 * @param scale The amount to lighten the brand color.
 * @param brand The base color to be lightened.
 * @param white The color to use for white text.
 * @param black The color to use for black text.
 * @returns An object containing the surface color and the appropriate text color for contrast.
 * @example
 * getSurfaceColors(0.2, '#ff0000', '#ffffff', '#000000');
 */
export function lightenSurfaceColors(
  scale: number,
  brand: string,
  white: string,
  black: string
) {
  return {
    color: Color(brand).lighten(scale).hex(),
    onColor: getContrastTextColor(
      Color(brand).lighten(scale).hex(),
      white,
      black
    ),
  };
}

/**
 * Generates a surface color by darkening the brand color and determines the appropriate contrast text color.
 * @param scale The amount to darken the brand color.
 * @param brand The base color to be darkened.
 * @param white The color to use for white text.
 * @param black The color to use for black text.
 * @returns An object containing the darkened surface color and the appropriate text color for contrast.
 * @example
 * darkenSurfaceColors(0.2, '#ff0000', '#ffffff', '#000000');
 */
export function darkenSurfaceColors(
  scale: number,
  brand: string,
  white: string,
  black: string
) {
  return {
    color: Color(brand).darken(scale).hex(),
    onColor: getContrastTextColor(
      Color(brand).darken(scale).hex(),
      white,
      black
    ),
  };
}
