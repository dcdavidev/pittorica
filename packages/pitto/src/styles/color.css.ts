import { defineProperties } from '@vanilla-extract/sprinkles';

import { pitto } from './contract.css.js';

const semanticColors = {
  ...pitto.color,

  surface0: pitto.surface['0'].color,
  surface100: pitto.surface['100'].color,
  surface200: pitto.surface['200'].color,
  surface300: pitto.surface['300'].color,
  surface400: pitto.surface['400'].color,
  surface500: pitto.surface['500'].color,
  surface600: pitto.surface['600'].color,
  surface700: pitto.surface['700'].color,
  surface800: pitto.surface['800'].color,
  surface900: pitto.surface['900'].color,

  onSurface0: pitto.surface['0'].onColor,
  onSurface100: pitto.surface['100'].onColor,
  onSurface200: pitto.surface['200'].onColor,
  onSurface300: pitto.surface['300'].onColor,
  onSurface400: pitto.surface['400'].onColor,
  onSurface500: pitto.surface['500'].onColor,
  onSurface600: pitto.surface['600'].onColor,
  onSurface700: pitto.surface['700'].onColor,
  onSurface800: pitto.surface['800'].onColor,
  onSurface900: pitto.surface['900'].onColor,
};

export const colorProperties = defineProperties({
  properties: {
    backgroundColor: semanticColors,
    color: semanticColors,
    borderColor: semanticColors,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
});
