import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { headingRecipe } from './heading.css.js';

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
 * A semantic heading component (h1-h6) with modern typography styles.
 * Separates semantic level from visual appearance for better accessibility.
 *
 * @param props - Component props.
 * @returns The rendered heading element.
 * @example
 * <Heading level={1} variant="display" size="large">Main Title</Heading>
 * @example
 * <Heading level={2} variant="headline" color="brand">Section Title</Heading>
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
