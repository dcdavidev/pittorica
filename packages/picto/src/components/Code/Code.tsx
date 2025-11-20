import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { codeRecipe } from './code.css.js';

type CodeVariants = RecipeVariants<typeof codeRecipe>;

export type CodeProps = Omit<BoxProps, 'as' | 'variant'> & {
  /**
   * The semantic variant of the code element.
   * - `code`: Generic code snippet.
   * - `kbd`: Keyboard input (e.g., Ctrl+C).
   * - `samp`: Sample output from a program.
   * - `var`: Variable name.
   * @default 'code'
   */
  variant?: NonNullable<CodeVariants>['variant'];
};

const TAG_MAP = {
  code: 'code',
  kbd: 'kbd',
  samp: 'samp',
  var: 'var',
} as const;

export const Code = ({
  variant = 'code',
  className,
  children,
  ...props
}: CodeProps): React.JSX.Element => {
  const recipeClass = codeRecipe({ variant });
  const Tag = TAG_MAP[variant];

  return (
    <Box as={Tag} className={clsx(recipeClass, className)} {...props}>
      {children}
    </Box>
  );
};
