import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  columns?: number;
  gap?: string | number;
  responsive?: boolean;
  className?: string;
  styles?: React.CSSProperties;
  children: ReactNode;
}

/**
 * Pittorica Grid wrapper. Maps to .picto-grid class.
 * A responsive CSS Grid container with 12-column system.
 * @example
 * <Grid>
 *   <GridItem span={6}>Half width</GridItem>
 *   <GridItem span={6}>Half width</GridItem>
 * </Grid>
 * <Grid columns={4} gap="1rem">
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 * </Grid>
 */
export const Grid: React.FC<GridProps> = ({
  as = 'div',
  columns = 12,
  gap,
  responsive = true,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;

  // Combine custom styles with grid properties
  const combinedStyles: React.CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap,
    ...styles,
  };

  return React.createElement(
    Tag,
    {
      className: clsx(
        'picto-grid',
        { 'picto-grid-responsive': responsive },
        className
      ),
      style: combinedStyles,
      ...rest,
    },
    children
  );
};
