import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import { blockquoteRecipe } from './blockquote.css.js';

type BlockquoteVariants = RecipeVariants<typeof blockquoteRecipe>;

/**
 * Props for the Blockquote component.
 */
export type BlockquoteProps = Omit<BoxProps, 'as' | 'color'> & {
  /**
   * The visual style of the quote.
   * - `classic`: Traditional blockquote with left border.
   * - `solid`: Filled background style.
   * @default 'classic'
   */
  variant?: NonNullable<BlockquoteVariants>['variant'];

  /**
   * Name of the author of the quote.
   */
  author?: string;

  /**
   * Source of the quote (e.g., book title, article, website).
   */
  source?: string;

  /**
   * Accent color for the blockquote.
   * - In 'classic' variant: colors the left border.
   * - In 'solid' variant: colors the background.
   * @default 'brand'
   */
  color?: BoxProps['color'];
};

/**
 * A semantic component for block quotations with attribution support.
 * Automatically handles layout and styling for quotes, authors, and sources.
 *
 * @param props - Component props.
 * @returns The rendered blockquote element.
 * @example
 * <Blockquote author="Albert Einstein">
 *   Imagination is more important than knowledge.
 * </Blockquote>
 * @example
 * <Blockquote
 *   variant="solid"
 *   author="Maya Angelou"
 *   source="I Know Why the Caged Bird Sings"
 *   color="accent"
 * >
 *   There is no greater agony than bearing an untold story inside you.
 * </Blockquote>
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
