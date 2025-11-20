import { recipe } from '@vanilla-extract/recipes';

import { vars } from './theme.css.js';

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

/**
 * CSS Recipe for Text components (Body, Label).
 */
export const textRecipe = recipe({
  base: {
    fontFamily: vars.typography.fonts.sans,
    margin: 0,
  },
  variants: {
    variant: {
      body: { fontWeight: vars.typography.fontWeights.regular },
      label: {
        fontWeight: vars.typography.fontWeights.medium,
        letterSpacing: '0.5px',
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundVariants: [
    // Body Combinations
    {
      variants: { variant: 'body', size: 'large' },
      style: {
        fontSize: vars.typography.fontSizes.bodyLarge,
        lineHeight: vars.typography.lineHeights.loose,
      },
    },
    {
      variants: { variant: 'body', size: 'medium' },
      style: {
        fontSize: vars.typography.fontSizes.bodyMedium,
        lineHeight: vars.typography.lineHeights.loose,
      },
    },
    {
      variants: { variant: 'body', size: 'small' },
      style: {
        fontSize: vars.typography.fontSizes.bodySmall,
        lineHeight: vars.typography.lineHeights.loose,
      },
    },
    // Label Combinations
    {
      variants: { variant: 'label', size: 'large' },
      style: {
        fontSize: vars.typography.fontSizes.labelLarge,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'label', size: 'medium' },
      style: {
        fontSize: vars.typography.fontSizes.labelMedium,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
    {
      variants: { variant: 'label', size: 'small' },
      style: {
        fontSize: vars.typography.fontSizes.labelSmall,
        lineHeight: vars.typography.lineHeights.normal,
      },
    },
  ],
  defaultVariants: {
    variant: 'body',
    size: 'medium',
  },
});
