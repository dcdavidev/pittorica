import { createGlobalTheme } from '@vanilla-extract/css';

import { pitto } from './contract.css';

import { borderTheme } from './theme/border.js';
import { colorTheme } from './theme/color';
import { fontTheme } from './theme/font.js';
import { spacingTheme } from './theme/spacing.js';

export const theme = createGlobalTheme(':root', pitto, {
  border: borderTheme,
  font: fontTheme,
  spacing: spacingTheme,
  color: colorTheme,
});
