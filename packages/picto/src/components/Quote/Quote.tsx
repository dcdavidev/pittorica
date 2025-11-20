import React from 'react';

import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box.js';
import { quoteRecipe } from './quote.css.js';

/**
 * Props for the Quote component.
 */
export type QuoteProps = Omit<BoxProps, 'as'>;

/**
 * A semantic component for inline quotations.
 * Renders a `<q>` element with automatic quotation marks added by the browser.
 * For block-level quotes, use the Blockquote component instead.
 *
 * @param props - Component props.
 * @returns The rendered quote element.
 * @example
 * <Quote>To be or not to be</Quote>
 */
export const Quote = ({
  className,
  children,
  ...props
}: QuoteProps): React.JSX.Element => {
  const recipeClass = quoteRecipe();

  return (
    <Box as="q" className={clsx(recipeClass, className)} {...props}>
      {children}
    </Box>
  );
};
