import React from 'react';

import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box.js';
import { inlineRecipe } from './inline.css.js';

export type InlineProps = Omit<BoxProps, 'as'> & {
  // Boolean modifiers
  bold?: boolean;
  italic?: boolean;
  highlight?: boolean; // <mark>
  deleted?: boolean; // <del> (strikethrough)
  inserted?: boolean; // <ins> (underline)
  small?: boolean; // <small>
  sub?: boolean; // <sub>
  sup?: boolean; // <sup>
};

export const Inline = ({
  bold,
  italic,
  highlight,
  deleted,
  inserted,
  small,
  sub,
  sup,
  className,
  children,
  ...props
}: InlineProps): React.JSX.Element => {
  let as: React.ElementType = 'span';
  if (sub) as = 'sub';
  else if (sup) as = 'sup';
  else if (deleted) as = 'del';
  else if (inserted) as = 'ins';
  else if (highlight) as = 'mark';
  else if (bold) as = 'strong';
  else if (italic) as = 'em';
  else if (small) as = 'small';

  const recipeClass = inlineRecipe({ highlight });

  const boxProps: Partial<BoxProps> = {};

  if (bold) {
    boxProps.fontWeight = 'bold';
  }
  if (italic) {
    boxProps.fontStyle = 'italic';
  }
  if (small) {
    boxProps.fontSize = 'labelSmall';
  }
  if (deleted) {
    boxProps.textDecoration = 'line-through';
  } else if (inserted) {
    boxProps.textDecoration = 'underline';
  }
  if (sub) {
    boxProps.style = { verticalAlign: 'sub', fontSize: 'smaller' };
  } else if (sup) {
    boxProps.style = { verticalAlign: 'super', fontSize: 'smaller' };
  }

  return (
    <Box
      as={as}
      className={clsx(recipeClass, className)}
      {...boxProps}
      {...props}
    >
      {children}
    </Box>
  );
};
