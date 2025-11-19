import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css.js';

// --- UTILS & FLATTENING ---
type TokenTree = { [key: string]: string | TokenTree };
const flattenVars = (obj: TokenTree, prefix = ''): Record<string, string> => {
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

// --- CONFIG OBJECTS ---
export const colorsMap = flattenVars(vars.colors);

const spaceProps = {
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginLeft: vars.space,
  marginRight: vars.space,
  gap: vars.space,
};

const spaceShorthands: Record<string, Array<keyof typeof spaceProps>> = {
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
};

// --- DEFINE PROPERTIES ---
const spaceProperties = defineProperties({
  properties: spaceProps,
  shorthands: spaceShorthands,
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
  },
});

// --- EXPORTS ---
export const atoms = createSprinkles(
  spaceProperties,
  colorProperties,
  typographyProperties
);

export type Atoms = Parameters<typeof atoms>[0];

export const validSprinkleKeys = [
  ...Object.keys(spaceProps),
  ...Object.keys(spaceShorthands),
  'color',
  'backgroundColor',
  'borderColor',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'textAlign',
] as const;

export type SprinkleKey = (typeof validSprinkleKeys)[number];
