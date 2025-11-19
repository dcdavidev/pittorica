import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css.js';

/**
 * Recursive type definition for the token object.
 * Leaves are CSS variable strings, branches are nested objects.
 */
type TokenTree = {
  [key: string]: string | TokenTree;
};

/**
 * Flattens a nested object into a single-level object with hyphenated keys.
 * This is necessary because Sprinkles requires a flat map of tokens for defining properties.
 * @param {TokenTree} obj The nested object to flatten (e.g., vars.colors).
 * @param {string} [prefix] The current prefix to use for recursion (internal use).
 * @returns {Record<string, string>} A flat object where keys are hyphenated paths (e.g., 'brand-500').
 * @example
 * const input = { brand: { 500: 'var(--brand-500)' } };
 * flattenVars(input); // Returns { 'brand-500': 'var(--brand-500)' }
 */
const flattenVars = (
  obj: TokenTree,
  prefix: string = ''
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'object' && value !== null) {
        Object.assign(result, flattenVars(value, newKey));
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
};

/**
 * Defines the responsive properties and shorthands for spacing.
 * This maps CSS properties (margin, padding) to our space tokens.
 */
const spaceProperties = defineProperties({
  properties: {
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

/**
 * Defines the color properties.
 * We flatten vars.colors so we can use keys like 'brand-500', 'neutrals-light'.
 */
const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: flattenVars(vars.colors),
    backgroundColor: flattenVars(vars.colors),
    borderColor: flattenVars(vars.colors),
  },
});

/**
 * Defines the typography properties.
 * Usually typography doesn't need responsive conditions as aggressively as layout,
 * but you can add them if needed.
 */
const typographyProperties = defineProperties({
  properties: {
    fontFamily: vars.typography.fonts,
    fontSize: vars.typography.fontSizes,
    fontWeight: vars.typography.fontWeights,
    lineHeight: vars.typography.lineHeights,
    textAlign: ['left', 'center', 'right', 'justify'],
  },
});

/**
 * The `atoms` function is the primary way to access utility classes.
 * It combines all defined properties (space, color, etc.) into a single function.
 * @example
 * // Usage in a component:
 * // Note the hyphenated syntax due to flattening
 * const className = atoms({ padding: 'medium', backgroundColor: 'brand-500' });
 */
export const atoms = createSprinkles(
  spaceProperties,
  colorProperties,
  typographyProperties
);

/**
 * Type definition for the atoms function arguments.
 * Useful for defining props in React components.
 */
export type Atoms = Parameters<typeof atoms>[0];
