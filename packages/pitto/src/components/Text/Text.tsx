import React from 'react';

import clsx from 'clsx';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { Box, type BoxProps } from '../Box/Box.js';
import { textStyle } from './text.css.js';

// Extract variants from the recipe
type TextVariants = RecipeVariants<typeof textStyle>;

/**
 * Props for the Text component.
 * We extend BoxProps to inherit all spacing/layout atoms.
 */
export interface TextProps extends Omit<BoxProps, 'as' | 'htmlFor'> {
  /**
   * The semantic HTML tag. Defaults to 'p'.
   */
  as?:
    | 'p'
    | 'span'
    | 'label'
    | 'div'
    | 'figcaption'
    | 'strong'
    | 'em'
    | 'blockquote'
    | 'cite'
    | 'small';

  /**
   * The visual style variant.
   */
  variant?: NonNullable<TextVariants>['variant'];

  /**
   * The size of the text.
   */
  size?: NonNullable<TextVariants>['size'];

  htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'body',
  size = 'large',
  color = 'inherit',
  className,
  children,
  htmlFor,
  ...props
}) => {
  const recipeClass = textStyle({ variant, size });

  return (
    <Box
      as={as}
      className={clsx(recipeClass, className)}
      color={color}
      {...(as === 'label' && htmlFor ? { htmlFor } : {})}
      {...props}
    >
      {children}
    </Box>
  );
};
