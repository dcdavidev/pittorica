import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';

/**
 * CSS Recipe for Heading components (Display, Headline).
 * Defines combinations of variants and sizes.
 */
export const headingRecipe = recipe({
  base: {
    fontFamily: vars.typography.fonts.sans,
    margin: 0, // Reset default browser margins
  },
  variants: {
    variant: {
      display: { fontWeight: vars.typography.fontWeights.regular },
      headline: { fontWeight: vars.typography.fontWeights.bold },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundVariants: [
    // Display Combinations
    {
      variants: { variant: 'display', size: 'large' },
      style: {
        fontSize: vars.typography.fontSizes.displayLarge,
        lineHeight: vars.typography.lineHeights.tight,
      },
    },
    {
      variants: { variant: 'display', size: 'medium' },
      style: {
        fontSize: vars.typography.fontSizes.displayMedium,
        lineHeight: vars.typography.lineHeights.tight,
      },
    },
    {
      variants: { variant: 'display', size: 'small' },
      style: {
        fontSize: vars.typography.fontSizes.displaySmall,
        lineHeight: vars.typography.lineHeights.tight,
      },
    },
    // Headline Combinations
    {
      variants: { variant: 'headline', size: 'large' },
      style: {
        fontSize: vars.typography.fontSizes.headlineLarge,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'headline', size: 'medium' },
      style: {
        fontSize: vars.typography.fontSizes.headlineMedium,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'headline', size: 'small' },
      style: {
        fontSize: vars.typography.fontSizes.headlineSmall,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
  ],
  defaultVariants: {
    variant: 'headline',
    size: 'medium',
  },
});
