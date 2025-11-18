import React from 'react';

export interface GridItemProps {
  span?: number;
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

/**
 * GridItem component for grid children.
 * Controls how many columns an item spans within a Grid.
 *
 * @example
 * <GridItem span={6}>Spans 6 columns</GridItem>
 * <GridItem span={4}>Spans 4 columns</GridItem>
 */
export const GridItem: React.FC<GridItemProps> = ({
  span = 1,
  className = '',
  as: Component = 'div',
  children,
  ...rest
}) => {
  const itemStyles: React.CSSProperties = {
    gridColumn: `span ${span}`,
  };

  return (
    <Component className={className} style={itemStyles} {...rest}>
      {children}
    </Component>
  );
};
