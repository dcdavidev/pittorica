import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export interface GridItemProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  span?: number;
  className?: string;
  styles?: React.CSSProperties;
  children: ReactNode;
}

/**
 * Pittorica GridItem wrapper for grid children.
 * Controls how many columns an item spans.
 * @example
 * <GridItem span={6}>Spans 6 columns</GridItem>
 * <GridItem span={4}>Spans 4 columns</GridItem>
 */
export const GridItem: React.FC<GridItemProps> = ({
  as = 'div',
  span = 1,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;

  // Combine custom styles with grid column span
  const combinedStyles: React.CSSProperties = {
    gridColumn: `span ${span}`,
    ...styles,
  };

  return React.createElement(
    Tag,
    {
      className: clsx(className),
      style: combinedStyles,
      ...rest,
    },
    children
  );
};
