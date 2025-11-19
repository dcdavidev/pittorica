import '@fontsource/momo-trust-display';
import '@fontsource/momo-trust-sans';

import { createGlobalTheme } from '@vanilla-extract/css';

import { ELEVATION_SCALE, SOURCE_PALETTE } from '../consts';
import { generateThemeObject } from '../helpers';

export const vars = createGlobalTheme(':root', {
  color: generateThemeObject(SOURCE_PALETTE),
  elevation: ELEVATION_SCALE,
  font: {
    display: 'Momo Trust Display, serif',
    sans: 'Momo Trust Sans, sans-serif',
  },
});
