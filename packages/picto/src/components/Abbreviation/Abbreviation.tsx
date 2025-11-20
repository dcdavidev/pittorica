import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { abbreviationRecipe } from './abbreviation.css.js';

type AbbreviationVariants = RecipeVariants<typeof abbreviationRecipe>;

/**
 * Props for the Abbreviation component.
 */
export interface AbbreviationProps extends Omit<BoxProps, 'as'> {
  /**
   * The full explanation of the abbreviation (displayed on hover).
   * Required for accessibility.
   */
  title: string;

  /**
   * The visual variant of the abbreviation.
   * @default 'default'
   */
  variant?: NonNullable<AbbreviationVariants>['variant'];
}

/**
 * A semantic component for abbreviations and acronyms.
 * Renders an `<abbr>` element with proper accessibility attributes.
 * The full form is displayed on hover via the title attribute.
 *
 * @param props - Component props.
 * @returns The rendered abbreviation element.
 * @example
 * <Abbreviation title="HyperText Markup Language">HTML</Abbreviation>
 * @example
 * <Abbreviation title="Cascading Style Sheets" variant="noUnderline">CSS</Abbreviation>
 */
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
