import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '../Box/Box.js';

/**
 * Props for the LineBreak component.
 * It accepts all Box props except 'children' (void element) and 'as' (locked to 'br').
 */
export type LineBreakProps = Omit<BoxProps, 'as' | 'children'>;

/**
 * A semantic component for inserting a single line break (<br>).
 * Useful for text formatting where a new line is significant (e.g., poems, addresses).
 *
 * @param {LineBreakProps} props Component props.
 * @returns {React.JSX.Element} The rendered line break.
 */
export const LineBreak = ({
  className,
  ...props
}: LineBreakProps): React.JSX.Element => {
  return (
    <Box as="br" className={clsx('picto-linebreak', className)} {...props} />
  );
};
