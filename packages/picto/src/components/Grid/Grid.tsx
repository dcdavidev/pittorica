import React from 'react';

import { Atoms } from '../../styles/sprinkles.css.js';
import { Box, BoxProps } from '../Box/Box.js';

export interface GridProps
  extends Omit<
    BoxProps,
    | 'display'
    | 'gridTemplateColumns'
    | 'gap'
    | 'gridAutoFlow'
    | 'alignItems'
    | 'justifyContent'
  > {
  /**
   * Number of columns.
   * Maps to `gridTemplateColumns`.
   */
  columns?: Atoms['gridTemplateColumns'];
  /**
   * The spacing between items.
   * Maps to `gap`.
   */
  gap?: Atoms['gap'];
  /**
   * The flow of the grid items.
   * Maps to `gridAutoFlow`.
   */
  flow?: Atoms['gridAutoFlow'];
  /**
   * Alignment of items along the cross axis.
   * Maps to `alignItems`.
   */
  align?: Atoms['alignItems'];
  /**
   * Alignment of items along the main axis.
   * Maps to `justifyContent`.
   */
  justify?: Atoms['justifyContent'];
}

/**
 * A layout primitive that manages the layout of its immediate children
 * using CSS Grid.
 */
export const Grid = ({
  columns,
  gap,
  flow,
  align,
  justify,
  children,
  ...props
}: GridProps): React.JSX.Element => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={columns}
      gap={gap}
      gridAutoFlow={flow}
      alignItems={align}
      justifyContent={justify}
      {...props}
    >
      {children}
    </Box>
  );
};
