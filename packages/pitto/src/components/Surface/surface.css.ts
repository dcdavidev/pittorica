import { recipe } from '@vanilla-extract/recipes';

import { pitto } from '../../styles/contract.css.js';
import { ELEVATION_PINS } from '../../styles/elevation.css.js';

export const surfaceRecipe = recipe({
  base: {
    width: '100%',
  },

  variants: {
    elevation: {
      ...Object.fromEntries(
        ELEVATION_PINS.map((pin) => [
          pin,
          {
            backgroundColor: pitto.surface[pin].color,
            color: pitto.surface[pin].onColor,
          },
        ])
      ),
    },

    shape: {
      none: {
        borderRadius: pitto.border.radius.none,
      },
      square: {
        borderRadius: pitto.border.radius.small,
      },
      rounded: {
        borderRadius: pitto.border.radius.medium,
      },
      arch: {
        borderTopLeftRadius: pitto.border.radius.full,
        borderTopRightRadius: pitto.border.radius.full,
        borderBottomLeftRadius: pitto.border.radius.medium,
        borderBottomRightRadius: pitto.border.radius.medium,
      },
      pill: {
        borderRadius: pitto.border.radius.full,
      },
    },
  },

  defaultVariants: {
    elevation: '100',
    shape: 'rounded',
  },
});

export type SurfaceVariants = Parameters<typeof surfaceRecipe>[0];
