import Color from 'color';

/**
 * Returns the best contrast text color (either 'white' or 'black') for a given background color.
 * Uses WCAG 2.1 contrast ratio rules, preferring white for dark backgrounds and black for light backgrounds.
 * @param surface The background color to test against (any CSS color format supported by 'color').
 * @param white The color value to use for white (usually '#fff' or 'white').
 * @param black The color value to use for black (usually '#000' or 'black').
 * @returns The string 'white' or 'black', whichever provides better contrast.
 *
 * @example
 * getContrastTextColor('#222', '#fff', '#000'); // returns 'white'
 * getContrastTextColor('#eee', '#fff', '#000'); // returns 'black'
 */
export function getContrastTextColor(
  surface: string,
  white: string,
  black: string
): 'white' | 'black' {
  const bg = Color(surface);
  const whiteColor = Color(white);
  const blackColor = Color(black);

  const contrastWithWhite = bg.contrast(whiteColor);
  const contrastWithBlack = bg.contrast(blackColor);

  if (contrastWithWhite >= 4.5) {
    return 'white';
  } else if (contrastWithBlack >= 4.5) {
    return 'black';
  } else {
    // If neither contrast is sufficient, return the one with the highest contrast
    return contrastWithWhite > contrastWithBlack ? 'white' : 'black';
  }
}
