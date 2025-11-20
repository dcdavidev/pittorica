import React from 'react';

import { Atoms } from '../../styles/sprinkles.css.js';
import { Box, BoxProps } from '../Box/Box.js';

/**
 * Props for the Grid component.
 */
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
   * Number of columns in the grid.
   * Maps to CSS `gridTemplateColumns`.
   */
  columns?: Atoms['gridTemplateColumns'];

  /**
   * The spacing between grid items.
   * Maps to CSS `gap`.
   */
  gap?: Atoms['gap'];

  /**
   * The flow direction of grid items.
   * Maps to CSS `gridAutoFlow`.
   */
  flow?: Atoms['gridAutoFlow'];

  /**
   * Alignment of items along the cross axis.
   * Maps to CSS `alignItems`.
   */
  align?: Atoms['alignItems'];

  /**
   * Alignment of items along the main axis.
   * Maps to CSS `justifyContent`.
   */
  justify?: Atoms['justifyContent'];
}

/**
 * A layout primitive for CSS Grid-based layouts.
 * Provides a simplified API for common grid patterns.
 *
 * @param props - Component props.
 * @returns The rendered grid container.
 * @example
 * <Grid columns={3} gap="medium">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
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
