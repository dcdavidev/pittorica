import { styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const SHAPE_TOKEN = ['none', 'square', 'round', 'circle'] as const;

export type ShapeToken = (typeof SHAPE_TOKEN)[number];

/**
 * Gets the border-radius value for a given shape token.
 * @param token The shape level token (e.g., 'square', 'circle').
 * @returns The corresponding border-radius CSS value.
 * @example
 * ```typescript
 * getShape('round'); // '1rem'
 * ```
 */
function getShape(token: ShapeToken): string {
  switch (token) {
    case 'none': {
      return vars.shape.none;
    }
    case 'square': {
      return vars.shape.square;
    }
    case 'round': {
      return vars.shape.round;
    }
    case 'circle': {
      return vars.shape.circle;
    }
    default: {
      return vars.shape.none;
    }
  }
}

/**
 * Shape utility classes.
 * Generated dynamically from SHAPE_TOKEN.
 */
export const shape = styleVariants(
  (() => {
    const styles: Record<string, { borderRadius: string }> = {};
    for (const token of SHAPE_TOKEN) {
      styles[token] = { borderRadius: getShape(token) };
    }
    return styles as Record<ShapeToken, { borderRadius: string }>;
  })()
);
