import { generateScale } from './color-utils.js';

/**
 * The source colors used to generate the tonal palettes (100-900).
 * These are the base colors for semantic categories.
 */
const sourceColors = {
  brand: '#3182ce',
  secondary: '#805ad5',
  tertiary: '#d53f8c',
  info: '#4299e1',
  success: '#48bb78',
  warning: '#ecc94b',
  error: '#f56565',
};

/**
 * Static neutral tokens (custom black and white).
 * These are used for backgrounds, text, or surfaces where pure black/white is too harsh.
 */
const neutrals = {
  light: '#e9f1f7',
  dark: '#131b23',
};

/**
 * Type definition for the source color keys.
 */
type SourceColorKey = keyof typeof sourceColors;

/**
 * Generates the semantic color scales using a loop to avoid Array.reduce.
 * @returns {Record<SourceColorKey, Record<number, string>>} The generated scales.
 * @example
 * const scales = generateScales();
 * // Access the brand color at step 500
 * scales.brand[500]; // '#3182ce'
 */
const generateScales = (): Record<SourceColorKey, Record<number, string>> => {
  const scales = {} as Record<SourceColorKey, Record<number, string>>;
  const keys = Object.keys(sourceColors) as SourceColorKey[];

  for (const key of keys) {
    scales[key] = generateScale(sourceColors[key]);
  }

  return scales;
};

/**
 * The final palette object containing both generated scales and static neutrals.
 * @example
 * // scales
 * palette.brand[500]; // #3182ce
 * // neutrals
 * palette.light; // #e9f1f7
 */
export const palette = {
  ...generateScales(),
  ...neutrals,
};
