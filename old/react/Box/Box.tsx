import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import clsx from 'clsx';

import type { BoxColor } from '../types/box';
import type { PictoShape } from '../types/shapes';
import { shapeClassMap } from '../types/shapes';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  color?: BoxColor;
  shape?: PictoShape;
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
  shape,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const colorClass = color ? `picto-bg-${color}` : '';
  const textColorClass = color ? `picto-text-on-${color}` : '';
  const shapeClass = shape ? shapeClassMap[shape] : '';
  return React.createElement(
    Tag,
    {
      className: clsx(
        'picto-box',
        colorClass,
        textColorClass,
        shapeClass,
        className
      ),
      style: styles,
      ...rest,
    },
    children
  );
};
