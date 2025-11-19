import React from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { SprinkleKey } from '../../styles/sprinkles.css.js';
import { textRecipe } from '../../styles/typography.css.js';
import { Box, BoxProps } from '../Box/Box.js';

type TextVariants = RecipeVariants<typeof textRecipe>;

/**
 * Props for the Text component.
 * We extend BoxProps to inherit all spacing/layout atoms.
 * We explicitly define 'children' to avoid conflicts with the Sprinkles index signature.
 */
export interface TextProps extends Omit<BoxProps, 'as'> {
  /**
   * The semantic HTML tag. Defaults to 'p'.
   */
  as?: 'p' | 'span' | 'label' | 'div' | 'figcaption' | 'strong' | 'em';

  /**
   * The visual style variant.
   */
  variant?: NonNullable<TextVariants>['variant'];

  /**
   * The size of the text.
   */
  size?: NonNullable<TextVariants>['size'];

  /**
   * Explicit definition of children to override atomic index signature inference.
   */
  children?: React.ReactNode;

  /**
   * Optional color override (using Sprinkles tokens).
   */
  color?: SprinkleKey;
}

/**
 * A versatile text component for body content and labels.
 *
 * @param {TextProps} props Component props.
 * @returns {React.JSX.Element} The rendered text.
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
}: TextProps): React.JSX.Element => {
  const recipeClass = textRecipe({ variant, size });

  return (
    <Box as={as} className={`${recipeClass} ${className || ''}`} {...props}>
      {children}
    </Box>
  );
};
