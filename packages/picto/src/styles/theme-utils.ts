import { style } from '@vanilla-extract/css';

import { vars } from './theme.css.js';

// Recursive partial type to allow deep overrides
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// The type of our theme contract
type ThemeContract = typeof vars;

/**
 * Recursively flattens an override object to match CSS variable keys.
 * @param {Record<string, unknown>} contract The theme contract object node.
 * @param {Record<string, unknown>} overrides The overrides object node.
 * @param {Record<string, string>} [result] The accumulator for flattened overrides.
 * @returns {Record<string, string>} The flattened override mapping.
 * @example
 * // Example contract and overrides:
 * const contract = { color: { brand: { 500: 'var(--brand-500)' } } };
 * const overrides = { color: { brand: { 500: '#123456' } } };
 * const result = flattenOverrides(contract, overrides);
 * // result: { 'var(--brand-500)': '#123456' }
 */
const flattenOverrides = (
  contract: Record<string, unknown>,
  overrides: Record<string, unknown>,
  result: Record<string, string> = {}
) => {
  for (const key in overrides) {
    const contractValue = contract[key];
    const overrideValue = overrides[key];

    // If both are objects (branches), recurse
    if (
      typeof overrideValue === 'object' &&
      overrideValue !== null &&
      contractValue !== null &&
      typeof contractValue === 'object'
    ) {
      flattenOverrides(
        contractValue as Record<string, unknown>,
        overrideValue as Record<string, unknown>,
        result
      );
    } else if (typeof contractValue === 'string') {
      // If it's a leaf node, assign the override value to the contract variable.
      // contractValue is the CSS var string (e.g., "var(--brand-500)").
      // We convert overrideValue to string to ensure safety (e.g. numbers to "100").
      result[contractValue] = String(overrideValue);
    }
  }
  return result;
};

/**
 * Creates a CSS class that overrides specific theme variables.
 * The consumer can pass a partial theme object.
 * @param {DeepPartial<ThemeContract>} overrides The partial theme object.
 * @returns {string} The CSS class name for the override.
 * @example
 * const myFont = createThemeOverride({
 * typography: { fonts: { sans: 'Inter, sans-serif' } }
 * });
 */
export const createThemeOverride = (
  overrides: DeepPartial<ThemeContract>
): string => {
  const cssVars = flattenOverrides(
    vars as unknown as Record<string, unknown>,
    overrides as unknown as Record<string, unknown>
  );

  return style({
    vars: cssVars,
  });
};
