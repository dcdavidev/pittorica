import React from 'react';

import clsx from 'clsx';

export interface GridProps {
  columns?: number;
  gap?: string | number;
  responsive?: boolean;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * Grid component with CSS Grid layout.
 * Provides a responsive 12-column grid system with customizable columns and gap.
 *
 * @example
 * <Grid>
 *   <GridItem span={6}>Half width</GridItem>
 *   <GridItem span={6}>Half width</GridItem>
 * </Grid>
 *
 * <Grid columns={4} gap="1rem">
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 * </Grid>
 */
export const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap,
  responsive = true,
  className = '',
  as: Component = 'div',
  children,
  ...rest
}) => {
  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap,
  };

  const classes = clsx(
    'picto-grid',
    { 'picto-grid-responsive': responsive },
    className
  );

  return (
    <Component className={classes} style={gridStyles} {...rest}>
      {children}
    </Component>
  );
};
