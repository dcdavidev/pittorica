import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css.js';

// --- UTILS & FLATTENING ---

type TokenTree = { [key: string]: string | TokenTree };

/**
 * Recursively flattens a nested token object into a single-level object with hyphenated keys.
 * It also implements specific logic to create aliases for the '500' tonal value.
 * @param {TokenTree} obj The nested token object to flatten.
 * @param {string} [prefix] The prefix to append to keys during recursion.
 * @returns {Record<string, string>} A flattened object suitable for Sprinkles properties.
 *
 * @example
 * // Input: { brand: { 500: 'var(--brand-500)' } }
 * // Output: { 'brand-500': 'var(--brand-500)', 'brand': 'var(--brand-500)' }
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
        // 1. Standard assignment (e.g., brand-500, neutrals-light)
        result[newKey] = value;

        // 2. Alias Creation:
        // If the key is '500' (our base tone), we creates a shortcut alias using the prefix.
        // This allows usage like color="brand" instead of strictly color="brand-500".
        if (key === '500' && prefix) {
          result[prefix] = value;
        }
      }
    }
  }
  return result;
};

// --- CONFIG OBJECTS ---

/**
 * A flattened map of all color tokens, including generated aliases.
 */
export const colorsMap = flattenVars(vars.colors);

// --- DEFINE PROPERTIES ---

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
    ],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: { ...vars.space, auto: 'auto' },
    marginBottom: { ...vars.space, auto: 'auto' },
    marginLeft: { ...vars.space, auto: 'auto' },
    marginRight: { ...vars.space, auto: 'auto' },
    width: ['100%', 'auto'],
    maxWidth: {
      none: 'none',
      '100%': '100%',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    height: ['100%', 'auto'],
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
    placeItems: ['alignItems', 'justifyContent'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colorsMap,
    backgroundColor: colorsMap,
    borderColor: colorsMap,
  },
});

const typographyProperties = defineProperties({
  properties: {
    fontFamily: vars.typography.fonts,
    fontSize: vars.typography.fontSizes,
    fontWeight: vars.typography.fontWeights,
    lineHeight: vars.typography.lineHeights,
    textAlign: ['left', 'center', 'right', 'justify'],
    fontStyle: ['normal', 'italic'],
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'],
    textDecoration: ['none', 'underline', 'line-through'],
    verticalAlign: ['baseline', 'top', 'middle', 'bottom', 'sub', 'super'],
  },
});

const borderProperties = defineProperties({
  properties: {
    borderRadius: vars.border.radius,
    borderStyle: ['none', 'solid', 'dashed'],
    borderWidth: {
      none: '0px',
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },
});

// --- EXPORTS ---

/**
 * The main atomic CSS function generated by Sprinkles.
 * It combines properties for space, color, and typography.
 */
export const atoms = createSprinkles(
  responsiveProperties,
  colorProperties,
  typographyProperties,
  borderProperties
);

export type Atoms = Parameters<typeof atoms>[0];
