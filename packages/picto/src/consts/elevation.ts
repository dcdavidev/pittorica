export const ELEVATION_TOKEN = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
] as const;
export type ElevationToken = (typeof ELEVATION_TOKEN)[number];

/**
 * Gets the box-shadow value for a given elevation token.
 * @param token The elevation level token (e.g., 'none', 'xs', 'md').
 * @returns The corresponding box-shadow CSS value.
 * @example
 * ```typescript
 * getElevationShadow('md'); // '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'
 * ```
 */
function getElevationShadow(token: ElevationToken): string {
  switch (token) {
    case 'none': {
      return 'none';
    }
    case 'xs': {
      return '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)';
    }
    case 'sm': {
      return '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)';
    }
    case 'md': {
      return '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)';
    }
    case 'lg': {
      return '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)';
    }
    case 'xl': {
      return '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)';
    }
    case '2xl': {
      return '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)';
    }
    default: {
      return 'none';
    }
  }
}

/**
 * Elevation scale based on Material Design 3 elevation tokens.
 * Generated dynamically from ELEVATION_TOKEN.
 */
export const ELEVATION_SCALE: Record<ElevationToken, string> = (() => {
  const scale: Record<string, string> = {};
  for (const token of ELEVATION_TOKEN) {
    scale[token] = getElevationShadow(token);
  }
  return scale as Record<ElevationToken, string>;
})();
