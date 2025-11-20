import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { codeRecipe } from './code.css.js';

type CodeVariants = RecipeVariants<typeof codeRecipe>;

/**
 * Props for the Code component.
 */
export type CodeProps = Omit<BoxProps, 'as' | 'variant'> & {
  /**
   * The semantic variant of the code element.
   * - `code`: Generic inline code snippet.
   * - `kbd`: Keyboard input (e.g., Ctrl+C, Enter).
   * - `samp`: Sample output from a program or script.
   * - `var`: Variable name in mathematical or programming context.
   * @default 'code'
   */
  variant?: NonNullable<CodeVariants>['variant'];
};

/**
 * Mapping of variants to their corresponding HTML tags.
 */
const TAG_MAP = {
  code: 'code',
  kbd: 'kbd',
  samp: 'samp',
  var: 'var',
} as const;

/**
 * An inline code component supporting multiple semantic variants.
 * Renders the appropriate HTML tag based on the variant prop.
 *
 * @param props - Component props.
 * @returns The rendered code element.
 * @example
 * <Code>const greeting = "Hello";</Code>
 * @example
 * <Code variant="kbd">Ctrl+S</Code>
 * @example
 * <Code variant="var">x</Code>
 */
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
