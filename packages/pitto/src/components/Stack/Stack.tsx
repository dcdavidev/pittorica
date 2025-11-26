import React from 'react';

import clsx from 'clsx';

import { stackRecipe } from './stack.css';

import { pitto } from '../../styles';
import { Box, BoxProps } from '../Box';

export const STACK_DIRECTIONS = [
  'horizontal',
  'horizontal-reverse',
  'vertical',
  'vertical-reverse',
] as const;
export type StackDirection = (typeof STACK_DIRECTIONS)[number];

export const STACK_GAPS = Object.keys(pitto.spacing) as Array<
  keyof typeof pitto.spacing
>;
export type StackGap = (typeof STACK_GAPS)[number];

export interface StackProps
  extends Omit<BoxProps, 'flexDirection' | 'display' | 'gap'> {
  children?: React.ReactNode;
  direction?: StackDirection;
  gap?: StackGap;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  gap,
  className,
  ...props
}) => {
  const stackClass = stackRecipe({ direction, gap });

  return (
    <Box as="div" className={clsx(stackClass, className)} {...props}>
      {children}
    </Box>
  );
};
