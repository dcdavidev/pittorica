import React from 'react';

import { Atoms } from '../../styles/sprinkles.css.js';
import { Box, BoxProps } from '../Box/Box.js';

/**
 * Props for the Stack component.
 */
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
   * The direction of the stack (vertical or horizontal).
   * Maps to CSS `flexDirection`.
   * @default 'column'
   */
  direction?: Atoms['flexDirection'];

  /**
   * Alignment of items along the cross axis.
   * Maps to CSS `alignItems`.
   * @default 'stretch'
   */
  align?: Atoms['alignItems'];

  /**
   * Alignment of items along the main axis.
   * Maps to CSS `justifyContent`.
   * @default 'flex-start'
   */
  justify?: Atoms['justifyContent'];

  /**
   * Whether to wrap items onto multiple lines.
   * Maps to CSS `flexWrap`.
   * @default 'nowrap'
   */
  wrap?: Atoms['flexWrap'];

  /**
   * The spacing between stack items.
   * Maps to CSS `gap`.
   */
  gap?: Atoms['gap'];
}

/**
 * A flexbox-based layout primitive for stacking elements vertically or horizontally.
 * Provides a simplified API for common flex layouts with configurable spacing and alignment.
 *
 * @param props - Component props.
 * @returns The rendered stack container.
 * @example
 * <Stack gap="medium">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * @example
 * <Stack direction="row" gap="small" align="center">
 *   <Button>Cancel</Button>
 *   <Button>Submit</Button>
 * </Stack>
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
