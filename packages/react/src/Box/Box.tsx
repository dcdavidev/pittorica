import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export type BoxColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'info'
  | 'warning'
  | 'surface'
  | 'background';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  color?: BoxColor;
  className?: string;
  styles?: React.CSSProperties;
  children: ReactNode;
}

/**
 * Pittorica Box wrapper. Maps to .picto-box class.
 * A flexible container with optional background color and automatic text contrast.
 * @example
 * <Box>
 *   <Typography variant="body-lg">Transparent box</Typography>
 * </Box>
 * <Box color="primary">
 *   <Typography variant="body-lg">Box with primary background and light text</Typography>
 * </Box>
 */
export const Box: React.FC<BoxProps> = ({
  as = 'div',
  color,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const colorClass = color ? `picto-bg-${color}` : '';
  const textColorClass = color ? `picto-text-on-${color}` : '';
  return React.createElement(
    Tag,
    {
      className: clsx('picto-box', colorClass, textColorClass, className),
      style: styles,
      ...rest,
    },
    children
  );
};
