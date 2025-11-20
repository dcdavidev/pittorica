import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { headingRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

// Extract variants from the recipe
type HeadingVariants = RecipeVariants<typeof headingRecipe>;

/**
 * Props for the Heading component.
 * Extends BoxProps (minus 'as') to inherit all atomic styles like color, margin, etc.
 */
export type HeadingProps = Omit<BoxProps, 'as'> & {
  /**
   * The semantic HTML level (h1-h6). Defaults to h2.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The visual style variant.
   */
  variant?: NonNullable<HeadingVariants>['variant'];

  /**
   * The size of the heading.
   */
  size?: NonNullable<HeadingVariants>['size'];
};

/**
 * A semantic heading component (h1-h6) with Material Design 3 styles.
 *
 * @param {HeadingProps} props Component props.
 * @returns {React.JSX.Element} The rendered heading.
 * @example
 * <Heading level={1} variant="display" size="large" color="brand">Main Title</Heading>
 */
export const Heading = ({
  level = 2,
  variant = 'headline',
  size = 'medium',
  color = 'text',
  className,
  children,
  ...props
}: HeadingProps): React.JSX.Element => {
  const Tag = `h${level}` as React.ElementType;

  const recipeClass = headingRecipe({ variant, size });

  return (
    <Box
      as={Tag}
      className={clsx(recipeClass, className)}
      color={color}
      {...props}
    >
      {children}
    </Box>
  );
};
