import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { textRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

// Extract variants from the recipe
type TextVariants = RecipeVariants<typeof textRecipe>;

/**
 * Props for the Text component.
 * We extend BoxProps to inherit all spacing/layout atoms.
 */
export type TextProps = Omit<BoxProps, 'as'> & {
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
    | 'blockquote';

  /**
   * The visual style variant.
   */
  variant?: NonNullable<TextVariants>['variant'];

  /**
   * The size of the text.
   */
  size?: NonNullable<TextVariants>['size'];
};

/**
 * A versatile text component for body content, labels, and descriptions.
 *
 * @param {TextProps} props Component props.
 * @returns {React.JSX.Element} The rendered text.
 * @example
 * <Text variant="body" size="large">This is a paragraph.</Text>
 * <Text as="label" variant="label" color="error">Username *</Text>
 */
export const Text = ({
  as = 'p',
  variant = 'body',
  size = 'large',
  color = 'text', // Set default color to ensure visibility
  className,
  children,
  ...props
}: TextProps): React.JSX.Element => {
  const recipeClass = textRecipe({ variant, size });

  return (
    <Box
      as={as}
      className={clsx(recipeClass, className)}
      color={color}
      {...props}
    >
      {children}
    </Box>
  );
};
