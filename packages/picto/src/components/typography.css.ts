import { styleVariants } from '@vanilla-extract/css';

import { vars } from './root.css';

import { TYPESCALE_TOKEN, TypescaleToken } from '../consts/typescale.js';

/**
 * Gets the typography styles for a given typescale token.
 * @param token The typescale token.
 * @returns The corresponding CSS styles object.
 * @example
 * ```typescript
 * getTypographyStyles('body-md'); // { fontFamily: ..., fontSize: ..., ... }
 * ```
 */
function getTypographyStyles(token: TypescaleToken) {
  switch (token) {
    case 'display-lg': {
      return {
        fontFamily: vars.font.display,
        fontSize: '3.5625rem', // 57px
        lineHeight: '4rem', // 64px
        fontWeight: 400,
      };
    }
    case 'display-md': {
      return {
        fontFamily: vars.font.display,
        fontSize: '2.8125rem', // 45px
        lineHeight: '3.25rem', // 52px
        fontWeight: 400,
      };
    }
    case 'display-sm': {
      return {
        fontFamily: vars.font.display,
        fontSize: '2.25rem', // 36px
        lineHeight: '2.75rem', // 44px
        fontWeight: 400,
      };
    }
    case 'headline-lg': {
      return {
        fontFamily: vars.font.display,
        fontSize: '2rem', // 32px
        lineHeight: '2.5rem', // 40px
        fontWeight: 400,
      };
    }
    case 'headline-md': {
      return {
        fontFamily: vars.font.display,
        fontSize: '1.75rem', // 28px
        lineHeight: '2.25rem', // 36px
        fontWeight: 400,
      };
    }
    case 'headline-sm': {
      return {
        fontFamily: vars.font.display,
        fontSize: '1.5rem', // 24px
        lineHeight: '2rem', // 32px
        fontWeight: 400,
      };
    }
    case 'title-lg': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '1.375rem', // 22px
        lineHeight: '1.75rem', // 28px
        fontWeight: 400,
      };
    }
    case 'title-md': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '1rem', // 16px
        lineHeight: '1.5rem', // 24px
        fontWeight: 500,
      };
    }
    case 'title-sm': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: 500,
      };
    }
    case 'body-lg': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '1rem', // 16px
        lineHeight: '1.5rem', // 24px
        fontWeight: 400,
      };
    }
    case 'body-md': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: 400,
      };
    }
    case 'body-sm': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.75rem', // 12px
        lineHeight: '1rem', // 16px
        fontWeight: 400,
      };
    }
    case 'label-lg': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: 500,
      };
    }
    case 'label-md': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.75rem', // 12px
        lineHeight: '1rem', // 16px
        fontWeight: 500,
      };
    }
    case 'label-sm': {
      return {
        fontFamily: vars.font.sans,
        fontSize: '0.6875rem', // 11px
        lineHeight: '0.75rem', // 12px
        fontWeight: 500,
      };
    }
    default: {
      return {
        fontFamily: vars.font.sans,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: 400,
      };
    }
  }
}

/**
 * Typography scale based on Material Design 3 type scale tokens.
 * Generated dynamically from TYPESCALE_TOKEN.
 */
export const typography = styleVariants(
  (() => {
    const styles: Record<string, ReturnType<typeof getTypographyStyles>> = {};
    for (const token of TYPESCALE_TOKEN) {
      styles[token] = getTypographyStyles(token);
    }
    return styles as Record<
      TypescaleToken,
      ReturnType<typeof getTypographyStyles>
    >;
  })()
);
