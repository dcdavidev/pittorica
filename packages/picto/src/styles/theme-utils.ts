import { vars } from './theme.css.js';

type ThemeOverrideValues<T> = {
  [P in keyof T]?: T[P] extends Record<string, unknown>
    ? ThemeOverrideValues<T[P]>
    : string;
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
 * Generates a flat mapping of CSS variable overrides from a partial theme object.
 * Useful for passing to vanilla-extract's style({ vars }) or for debugging theme overrides.
 * @param {ThemeOverrideValues<ThemeContract>} overrides The partial theme override object.
 * @returns {Record<string, string>} A flat mapping of CSS variable names to override values.
 * @example
 * const vars = getThemeVars({ color: { brand: { 500: '#123456' } } });
 * // vars: { 'var(--brand-500)': '#123456' }
 */
export const getThemeVars = (
  overrides: ThemeOverrideValues<ThemeContract>
): Record<string, string> => {
  return flattenOverrides(
    vars as unknown as Record<string, unknown>,
    overrides as unknown as Record<string, unknown>
  );
};
