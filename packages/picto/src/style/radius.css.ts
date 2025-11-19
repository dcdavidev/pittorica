import { styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const RADIUS_TOKEN = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full',
] as const;

export type RadiusToken = (typeof RADIUS_TOKEN)[number];

/**
 * Gets the border-radius value for a given radius token.
 * @param token The radius token, e.g. 'none'.
 * @returns The corresponding border-radius CSS value.
 * @example
 * ```typescript
 * getRadius('md'); // '0.75rem'
 * ```
 */
function getRadius(token: RadiusToken): string {
  switch (token) {
    case 'none': {
      return vars.radius.none;
    }
    case 'xs': {
      return vars.radius.xs;
    }
    case 'sm': {
      return vars.radius.sm;
    }
    case 'md': {
      return vars.radius.md;
    }
    case 'lg': {
      return vars.radius.lg;
    }
    case 'xl': {
      return vars.radius.xl;
    }
    case '2xl': {
      return vars.radius['2xl'];
    }
    case 'full': {
      return vars.radius.full;
    }
    default: {
      return vars.radius.none;
    }
  }
}

/**
 * Border radius utility classes.
 * Generated dynamically from RADIUS_TOKEN.
 */
export const radius = styleVariants(
  (() => {
    const styles: Record<string, { borderRadius: string }> = {};
    for (const token of RADIUS_TOKEN) {
      styles[token] = { borderRadius: getRadius(token) };
    }
    return styles as Record<RadiusToken, { borderRadius: string }>;
  })()
);
