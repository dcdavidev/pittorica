import { generateTones } from './generate-tones';

/**
 * Generates a complete theme object from a color palette using Material Design tonal system.
 * @param palette An object with color names as keys and hex color values as values.
 * @returns A theme object with base colors, on-colors, containers, and on-containers for each palette color.
 * @example
 * ```typescript
 * const palette = {
 *   primary: '#08a4bd',
 *   secondary: '#d87cac'
 * };
 *
 * const theme = generateThemeObject(palette);
 * // Returns:
 * // {
 * //   primary: '#08a4bd',           // base color
 * //   onPrimary: '#ffffff',         // text on primary
 * //   primaryContainer: '#b8e4ed',  // container background
 * //   onPrimaryContainer: '#001f26', // text on container
 * //   secondary: '#d87cac',         // base color
 * //   onSecondary: '#ffffff',       // text on secondary
 * //   // ... and so on
 * // }
 * ```
 */
export const generateThemeObject = (palette: Record<string, string>) => {
  const themeObj: Record<string, string> = {};

  for (const [key, value] of Object.entries(palette)) {
    const tones = generateTones(value);

    themeObj[key] = tones.base;

    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    themeObj[`on${capitalizedKey}`] = tones.onBase;

    themeObj[`${key}Container`] = tones.container;

    themeObj[`on${capitalizedKey}Container`] = tones.onContainer;
  }

  return themeObj;
};
