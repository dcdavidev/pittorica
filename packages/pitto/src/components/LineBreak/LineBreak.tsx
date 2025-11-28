import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '../Box';

/**
 * Props for the LineBreak component.
 * It accepts all Box props except 'children' (void element) and 'as' (locked to 'br').
 */
export interface LineBreakProps extends Omit<BoxProps, 'children' | 'as'> {
  style?: React.CSSProperties;
  className?: string;
}

/**
 * A semantic component for inserting a single line break (<br>).
 * Useful for text formatting where a new line is significant (e.g., poems, addresses).
 *
 * @param {LineBreakProps} props Component props.
 * @returns {React.JSX.Element} The rendered line break.
 */
export const LineBreak: React.FC<LineBreakProps> = ({ className, style }) => {
  return <Box as="br" className={clsx(className)} style={{ ...style }} />;
};
