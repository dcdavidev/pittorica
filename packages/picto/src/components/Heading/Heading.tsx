import React from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { SprinkleKey } from '../../styles/sprinkles.css.js';
import { headingRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

// Extract variants from the recipe
type HeadingVariants = RecipeVariants<typeof headingRecipe>;

/**
 * Props for the Heading component.
 * We use PropsWithChildren to automatically include 'children'.
 */
export type HeadingProps = React.PropsWithChildren<
  Omit<BoxProps, 'as'> & {
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

    /**
     * Optional color override using Sprinkles tokens.
     */
    color?: SprinkleKey;
  }
>;

/**
 * A semantic heading component (h1-h6) with Material Design 3 styles.
 *
 * @param {HeadingProps} props Component props.
 * @returns {React.JSX.Element} The rendered heading.
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
}: HeadingProps): React.JSX.Element => {
  const Tag = `h${level}` as React.ElementType;
  const recipeClass = headingRecipe({ variant, size });

  return (
    <Box
      as={Tag}
      className={`${recipeClass} ${className || ''}`}
      {...props}
      children={children}
    />
  );
};
