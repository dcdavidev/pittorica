import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { preRecipe } from './pre.css.js';

type PreVariants = RecipeVariants<typeof preRecipe>;

export type PreProps = Omit<BoxProps, 'as'> & {
  /**
   * The visual style of the preformatted block.
   * @default 'block'
   */
  variant?: NonNullable<PreVariants>['variant'];
};

/**
 * A semantic component for preformatted text (<pre>).
 * Ideal for code snippets, logs, or ASCII art.
 * It handles horizontal scrolling automatically.
 *
 * @param {PreProps} props Component props.
 * @returns {React.JSX.Element} The rendered pre block.
 */
export const Pre = ({
  variant = 'block',
  className,
  children,
  ...props
}: PreProps): React.JSX.Element => {
  const recipeClass = preRecipe({ variant });

  return (
    <Box as="pre" className={clsx(recipeClass, className)} {...props}>
      {children}
    </Box>
  );
};
