import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@material/material-color-utilities';

/**
 * Generates a set of tonal colors from a base hex color using Material Design's tonal palette system.
 * @param hexColor The base color in hexadecimal format (e.g., '#08a4bd').
 * @returns An object containing various tonal variations of the input color.
 * @example
 * ```typescript
 * const tones = generateTones('#08a4bd');
 * console.log(tones.base); // '#08a4bd'
 * console.log(tones.onBase); // Light color for text on base
 * ```
 */
export const generateTones = (hexColor: string) => {
  const argb = argbFromHex(hexColor);
  const palette = TonalPalette.fromInt(argb);

  return {
    /** The base color tone (40). */
    base: hexFromArgb(palette.tone(40)),
    /** Text color that contrasts with the base color (100). */
    onBase: hexFromArgb(palette.tone(100)),
    /** Container background color (90). */
    container: hexFromArgb(palette.tone(90)),
    /** Text color for container backgrounds (10). */
    onContainer: hexFromArgb(palette.tone(10)),
  };
};
