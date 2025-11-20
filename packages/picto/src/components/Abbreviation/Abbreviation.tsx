import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { abbreviationRecipe } from './abbreviation.css.js';

type AbbreviationVariants = RecipeVariants<typeof abbreviationRecipe>;

export interface AbbreviationProps extends Omit<BoxProps, 'as'> {
  /**
   * The full explanation of the abbreviation (displayed on hover).
   * Required for accessibility.
   */
  title: string;

  variant?: NonNullable<AbbreviationVariants>['variant'];
}

export const Abbreviation = ({
  title,
  variant = 'default',
  className,
  children,
  ...props
}: AbbreviationProps): React.JSX.Element => {
  const recipeClass = abbreviationRecipe({ variant });

  return (
    <Box
      as="abbr"
      title={title}
      className={clsx(recipeClass, className)}
      {...props}
    >
      {children}
    </Box>
  );
};
