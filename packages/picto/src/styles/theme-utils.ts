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
 */
const flattenOverrides = (
  contract: any,
  overrides: any,
  result: Record<string, string> = {}
) => {
  for (const key in overrides) {
    const contractValue = contract[key];
    const overrideValue = overrides[key];

    // If both are objects, recurse
    if (
      typeof overrideValue === 'object' &&
      overrideValue !== null &&
      contractValue !== null &&
      typeof contractValue === 'object'
    ) {
      flattenOverrides(contractValue, overrideValue, result);
    } else {
      // If it's a leaf node, assign the override value to the contract variable
      // contractValue here is the CSS var string (e.g., "var(--brand-500)")
      result[contractValue] = overrideValue;
    }
  }
  return result;
};

/**
 * Creates a CSS class that overrides specific theme variables.
 * The consumer can pass a partial theme object.
 *
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
  const cssVars = flattenOverrides(vars, overrides);
  return style({
    vars: cssVars,
  });
};
