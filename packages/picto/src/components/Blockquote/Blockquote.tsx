import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import { blockquoteRecipe } from './blockquote.css.js';

type BlockquoteVariants = RecipeVariants<typeof blockquoteRecipe>;

export type BlockquoteProps = Omit<BoxProps, 'as' | 'color'> & {
  /**
   * The visual style of the quote.
   * @default 'classic'
   */
  variant?: NonNullable<BlockquoteVariants>['variant'];

  /**
   * Name of the author.
   */
  author?: string;

  /**
   * Source of the quote (e.g., book title, article).
   */
  source?: string;

  /**
   * Accent color.
   * - In 'classic': colors the left border.
   * - In 'solid': colors the background.
   */
  color?: BoxProps['color'];
};

/**
 * A semantic component for block quotations.
 * Integrates logic for "Surface" styling and automatic layout.
 */
export const Blockquote = ({
  variant = 'classic',
  author,
  source,
  color = 'brand',
  className,
  children,
  ...props
}: BlockquoteProps): React.JSX.Element => {
  const recipeClass = blockquoteRecipe({ variant });

  const boxProps: Partial<BoxProps> = {};

  if (variant === 'solid') {
    boxProps.backgroundColor = color;
    boxProps.color = 'text';
  } else if (variant === 'classic') {
    boxProps.borderColor = color;
    boxProps.color = 'text';
  } else {
    boxProps.color = 'text';
  }

  return (
    <Box
      as="blockquote"
      className={clsx(recipeClass, className)}
      {...boxProps}
      {...props}
    >
      <Text
        as="p"
        size={variant === 'solid' ? 'large' : 'medium'}
        variant="body"
        style={{ whiteSpace: 'pre-line' }}
      >
        {children}
      </Text>

      {(author || source) && (
        <Box
          as="footer"
          marginTop="medium"
          style={{
            textAlign: variant === 'solid' ? 'center' : 'right',
            opacity: 0.8,
          }}
        >
          <Text
            as="cite"
            size="small"
            variant="label"
            style={{ fontStyle: 'normal' }}
          >
            — {author}
            {author && source && ', '}
            {source && (
              <Box as="span" style={{ fontStyle: 'italic' }}>
                {source}
              </Box>
            )}
          </Text>
        </Box>
      )}
    </Box>
  );
};
