import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export type StackDirection = 'vertical' | 'horizontal';

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  direction?: StackDirection;
  gap?: string | number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  className?: string;
  styles?: React.CSSProperties;
  children: ReactNode;
}

/**
 * Pittorica Stack wrapper. Maps to .picto-stack class.
 * A flex container for vertical or horizontal layouts with consistent spacing.
 * @example
 * <Stack>
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 * </Stack>
 * <Stack direction="horizontal" gap="2rem" alignItems="center">
 *   <Box>Item 1</Box>
 *   <Box>Item 2</Box>
 * </Stack>
 */
export const Stack: React.FC<StackProps> = ({
  as = 'div',
  direction = 'vertical',
  gap,
  alignItems,
  justifyContent,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const directionClass =
    direction === 'horizontal' ? 'picto-stack-horizontal' : '';

  // Combine custom styles with flexbox properties
  const combinedStyles: React.CSSProperties = {
    gap,
    alignItems,
    justifyContent,
    ...styles,
  };

  return React.createElement(
    Tag,
    {
      className: clsx('picto-stack', directionClass, className),
      style: combinedStyles,
      ...rest,
    },
    children
  );
};
