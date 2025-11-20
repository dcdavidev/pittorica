import React from 'react';

import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box.js';
import { inlineRecipe } from './inline.css.js';

/**
 * Props for the Inline component.
 */
export type InlineProps = Omit<BoxProps, 'as'> & {
  /**
   * Render as bold text using `<strong>`.
   * @default false
   */
  bold?: boolean;

  /**
   * Render as italic text using `<em>`.
   * @default false
   */
  italic?: boolean;

  /**
   * Render as highlighted text using `<mark>`.
   * @default false
   */
  highlight?: boolean;

  /**
   * Render as deleted text with strikethrough using `<del>`.
   * @default false
   */
  deleted?: boolean;

  /**
   * Render as inserted text with underline using `<ins>`.
   * @default false
   */
  inserted?: boolean;

  /**
   * Render as small text using `<small>`.
   * @default false
   */
  small?: boolean;

  /**
   * Render as subscript using `<sub>`.
   * @default false
   */
  sub?: boolean;

  /**
   * Render as superscript using `<sup>`.
   * @default false
   */
  sup?: boolean;
};

/**
 * A versatile inline text component supporting multiple semantic HTML elements.
 * Automatically selects the appropriate HTML tag based on the provided boolean props.
 * Priority order: sub > sup > deleted > inserted > highlight > bold > italic > small > span.
 *
 * @param props - Component props.
 * @returns The rendered inline element.
 * @example
 * <Inline bold>Important text</Inline>
 * @example
 * <Inline italic highlight>Highlighted italic text</Inline>
 * @example
 * <Inline sup>2</Inline>
 */
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
