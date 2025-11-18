import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
  styles?: React.CSSProperties;
  children: ReactNode;
}

/**
 * Pittorica Container wrapper. Maps to .picto-container class.
 * A responsive container with max-width constraints and horizontal padding.
 * @example
 * <Container>
 *   <Typography variant="body-lg">Content in default container</Typography>
 * </Container>
 * <Container size="lg">
 *   <Typography variant="body-lg">Content in large container</Typography>
 * </Container>
 */
export const Container: React.FC<ContainerProps> = ({
  as = 'div',
  size,
  styles,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const sizeClass = size ? `picto-container-${size}` : '';
  return React.createElement(
    Tag,
    {
      className: clsx('picto-container', sizeClass, className),
      style: styles,
      ...rest,
    },
    children
  );
};
