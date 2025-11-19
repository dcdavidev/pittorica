import React from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { textRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

type TextVariants = RecipeVariants<typeof textRecipe>;

/**
 * Props for the Text component.
 */
export interface TextProps extends Omit<BoxProps, 'as'> {
  /** The semantic HTML tag. Defaults to 'p'. */
  as?: 'p' | 'span' | 'label' | 'div' | 'figcaption';
  /** The visual style variant. */
  variant?: NonNullable<TextVariants>['variant'];
  /** The size of the text. */
  size?: NonNullable<TextVariants>['size'];
  /** The content of the text. */
  children: React.ReactNode;
}

/**
 * A versatile text component for body content and labels.
 * * @param {TextProps} props Component props.
 * @returns {React.ReactElement} The rendered text.
 * @example
 * <Text variant="body" size="large">This is a paragraph.</Text>
 * <Text as="label" variant="label" size="small">Username</Text>
 */
export const Text = ({
  as = 'p',
  variant = 'body',
  size = 'medium',
  className,
  children,
  ...props
}: TextProps): React.ReactElement => {
  const recipeClass = textRecipe({ variant, size });

  return (
    <Box as={as} className={`${recipeClass} ${className || ''}`} {...props}>
      {children}
    </Box>
  );
};
