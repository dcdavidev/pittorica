/**
 * Converts a hexadecimal color string to an RGB object.
 * @param {string} hex The hexadecimal color string (e.g., "#ffffff").
 * @returns {{ r: number, g: number, b: number } | null} The RGB representation or null if the input is invalid.
 * @example
 * hexToRgb("#ffffff"); // { r: 255, g: 255, b: 255 }
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null;
};

/**
 * Converts RGB components to a hexadecimal color string.
 * @param {number} r The red component (0-255).
 * @param {number} g The green component (0-255).
 * @param {number} b The blue component (0-255).
 * @returns {string} The hexadecimal color string.
 * @example
 * rgbToHex(255, 255, 255); // "#ffffff"
 */
const rgbToHex = (r: number, g: number, b: number): string =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

/**
 * Mixes two colors together by a specific weight.
 * @param {string} color1 The first color in hexadecimal format.
 * @param {string} color2 The second color in hexadecimal format.
 * @param {number} weight The weight of the first color (0-100).
 * @returns {string} The resulting mixed color in hexadecimal format.
 * @example
 * mix("#ff0000", "#0000ff", 50); // Mixes red and blue equally
 */
const mix = (color1: string, color2: string, weight: number): string => {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  if (!c1 || !c2) return color1;

  const w = weight / 100;
  const w2 = 1 - w;

  return rgbToHex(
    Math.round(c1.r * w + c2.r * w2),
    Math.round(c1.g * w + c2.g * w2),
    Math.round(c1.b * w + c2.b * w2)
  );
};

/**
 * Generates a tonal palette scale from 100 to 900 based on a source color.
 * - 500 is the base source color.
 * - 100-400 are tints (mixed with white).
 * - 600-900 are shades (mixed with black).
 * @param {string} hex The source color in hexadecimal format.
 * @returns {Record<number, string>} An object containing the color scale.
 * @example
 * generateScale("#ff0000"); // Returns a scale of red tints and shades
 */
export const generateScale = (hex: string): Record<number, string> => {
  return {
    100: mix(hex, '#ffffff', 20),
    200: mix(hex, '#ffffff', 40),
    300: mix(hex, '#ffffff', 60),
    400: mix(hex, '#ffffff', 80),
    500: hex,
    600: mix(hex, '#000000', 80),
    700: mix(hex, '#000000', 60),
    800: mix(hex, '#000000', 40),
    900: mix(hex, '#000000', 20),
  };
};
