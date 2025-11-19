import { globalStyle, styleVariants } from '@vanilla-extract/css';

import { vars } from './vars.css.js';

export const TYPESCALE_TOKEN = [
  'display-lg',
  'display-md',
  'display-sm',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'title-lg',
  'title-md',
  'title-sm',
  'label-lg',
  'label-md',
  'label-sm',
  'body-lg',
  'body-md',
  'body-sm',
] as const;

export type TypescaleToken = (typeof TYPESCALE_TOKEN)[number];

const commonRules = {
  display: 'block',
  margin: 0,
};

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
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '3.5625rem', // 57px
        lineHeight: vars.space['3xl'], // 64px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'display-md': {
      return {
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '2.8125rem', // 45px
        lineHeight: '3.25rem', // 52px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'display-sm': {
      return {
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '2.25rem', // 36px
        lineHeight: '2.75rem', // 44px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'headline-lg': {
      return {
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '2rem', // 32px
        lineHeight: '2.5rem', // 40px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'headline-md': {
      return {
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '1.75rem', // 28px
        lineHeight: '2.25rem', // 36px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'headline-sm': {
      return {
        ...commonRules,
        fontFamily: vars.font.display,
        fontSize: '1.5rem', // 24px
        lineHeight: vars.space.xl, // 32px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
      };
    }
    case 'title-lg': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '1.375rem', // 22px
        lineHeight: '1.75rem', // 28px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'title-md': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '1rem', // 16px
        lineHeight: vars.space.lg, // 24px
        fontWeight: vars.fontWeight.medium,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'title-sm': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: vars.fontWeight.medium,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'body-lg': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '1rem', // 16px
        lineHeight: vars.space.lg, // 24px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'body-md': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'body-sm': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.75rem', // 12px
        lineHeight: vars.space.md, // 16px
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.wide,
      };
    }
    case 'label-lg': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        fontWeight: vars.fontWeight.medium,
        letterSpacing: vars.letterSpace.wider,
      };
    }
    case 'label-md': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.75rem', // 12px
        lineHeight: vars.space.md, // 16px
        fontWeight: vars.fontWeight.medium,
        letterSpacing: vars.letterSpace.wider,
      };
    }
    case 'label-sm': {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '0.6875rem', // 11px
        lineHeight: vars.space.sm, // 12px
        fontWeight: vars.fontWeight.medium,
        letterSpacing: vars.letterSpace.wider,
      };
    }
    default: {
      return {
        ...commonRules,
        fontFamily: vars.font.sans,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: vars.fontWeight.regular,
        letterSpacing: vars.letterSpace.normal,
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

// Global styles for semantic HTML elements
globalStyle('h1', getTypographyStyles('display-lg'));
globalStyle('h2', getTypographyStyles('display-md'));
globalStyle('h3', getTypographyStyles('display-sm'));
globalStyle('h4', getTypographyStyles('headline-lg'));
globalStyle('h5', getTypographyStyles('headline-md'));
globalStyle('h6', getTypographyStyles('headline-sm'));
globalStyle('p', getTypographyStyles('body-lg'));
