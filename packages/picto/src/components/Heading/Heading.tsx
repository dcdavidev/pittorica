import React from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { headingRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

type HeadingVariants = RecipeVariants<typeof headingRecipe>;

/**
 * Props for the Heading component.
 */
export interface HeadingProps extends Omit<BoxProps, 'as'> {
  /** The semantic HTML level (h1-h6). Defaults to h2. */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The visual style variant. */
  variant?: NonNullable<HeadingVariants>['variant'];
  /** The size of the heading. */
  size?: NonNullable<HeadingVariants>['size'];
  /** The content of the heading. */
  children: React.ReactNode;
}

/**
 * A semantic heading component (h1-h6) with Material Design 3 styles.
 * * @param {HeadingProps} props Component props.
 * @returns {React.ReactElement} The rendered heading.
 * @example
 * <Heading level={1} variant="display" size="large">Main Title</Heading>
 */
export const Heading = ({
  level = 2,
  variant = 'headline',
  size = 'medium',
  className,
  children,
  ...props
}: HeadingProps): React.ReactElement => {
  const Tag = `h${level}` as React.ElementType;
  const recipeClass = headingRecipe({ variant, size });

  return (
    <Box as={Tag} className={`${recipeClass} ${className || ''}`} {...props}>
      {children}
    </Box>
  );
};
