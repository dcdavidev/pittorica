import React from 'react';

import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box.js';
import { quoteRecipe } from './quote.css.js';

export type QuoteProps = Omit<BoxProps, 'as'>;

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
