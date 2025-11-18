import React from 'react';

import clsx from 'clsx';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';

export interface ContainerProps {
  size?: ContainerSize;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container component with responsive max-width constraints and horizontal padding.
 * Provides consistent content width and spacing across different screen sizes.
 *
 * @example
 * <Container>
 *   <Typography>Content in default medium container</Typography>
 * </Container>
 *
 * <Container size="lg">
 *   <Typography>Content in large container</Typography>
 * </Container>
 *
 * <Container size="fluid">
 *   <Typography>Full width content</Typography>
 * </Container>
 */
export const Container: React.FC<ContainerProps> = ({
  size = 'md',
  children,
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  const sizeClass = size === 'md' ? '' : `picto-container-${size}`;
  const classes = clsx('picto-container', sizeClass, className);

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
