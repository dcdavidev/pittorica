import { createSprinkles } from '@vanilla-extract/sprinkles';

import { borderProperties } from './borders.css.js';
import { colorProperties } from './color.css.js';
import { spacingProperties } from './spacing.css.js';
import { typographyProperties } from './typography.css.js';

export const sprinkles = createSprinkles(
  spacingProperties,
  colorProperties,
  typographyProperties,
  borderProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
