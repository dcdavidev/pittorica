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
 * A flexible container with optional background color.
 * @example
 * <Box>
 *   <Typography variant="body-lg">Transparent box</Typography>
 * </Box>
 * <Box color="primary" styles={{ padding: '1rem' }}>
 *   <Typography variant="body-lg">Box with primary background</Typography>
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
  return React.createElement(
    Tag,
    {
      className: clsx('picto-box', colorClass, className),
      style: styles,
      ...rest,
    },
    children
  );
};
