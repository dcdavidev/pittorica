import React from 'react';

import { Atoms } from '../../styles/sprinkles.css.js';
import { Box, BoxProps } from '../Box/Box.js';

export interface StackProps
  extends Omit<
    BoxProps,
    | 'display'
    | 'flexDirection'
    | 'alignItems'
    | 'justifyContent'
    | 'flexWrap'
    | 'gap'
  > {
  /**
   * The direction of the stack.
   * @default 'column'
   */
  direction?: Atoms['flexDirection'];
  /**
   * Alignment of items along the cross axis.
   * Maps to `alignItems`.
   * @default 'stretch'
   */
  align?: Atoms['alignItems'];
  /**
   * Alignment of items along the main axis.
   * Maps to `justifyContent`.
   * @default 'flex-start'
   */
  justify?: Atoms['justifyContent'];
  /**
   * Whether to wrap items onto multiple lines.
   * Maps to `flexWrap`.
   * @default 'nowrap'
   */
  wrap?: Atoms['flexWrap'];
  /**
   * The spacing between items.
   * Maps to `gap`.
   */
  gap?: Atoms['gap'];
}

/**
 * A layout primitive that manages the layout of its immediate children
 * along the vertical or horizontal axis with configurable spacing.
 */
export const Stack = ({
  direction = 'column',
  align = 'stretch',
  justify = 'flex-start',
  wrap = 'nowrap',
  gap,
  children,
  ...props
}: StackProps): React.JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </Box>
  );
};
