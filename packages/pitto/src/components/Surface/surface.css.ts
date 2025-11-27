import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../styles/sprinkles.css.js';
import {
  type BGColorToken,
  COLOR_TOKEN_KEYS,
  type ColorTokenFull,
} from '../../styles/sprinkles/color.css.js';

// --- COLOR RECIPE GENERATION ---
const colorRecipe = {} as Record<BGColorToken, string>;

const BG_TOKEN_KEYS = COLOR_TOKEN_KEYS.filter((key) => !key.startsWith('on'));

for (const colorKey of BG_TOKEN_KEYS) {
  if (colorKey === 'transparent') {
    continue;
  }

  const onColorKey = `on${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}`;

  colorRecipe[colorKey as BGColorToken] = sprinkles({
    backgroundColor: colorKey as BGColorToken,
    color: onColorKey as ColorTokenFull,
  });
}

export const surfaceRecipe = recipe({
  base: {},
  variants: {
    color: {
      transpartent: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'inherit',
      },
      ...colorRecipe,
    },
  },
  defaultVariants: {
    color: 'brand800',
  },
});
