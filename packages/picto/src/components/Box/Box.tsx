import React from 'react';

import {
  type Atoms,
  atoms,
  sprinkleProperties,
} from '../../styles/sprinkles.css.js';

/**
 * We define the BoxProps by combining Atoms and a permissive HTML type.
 * Using 'any' for the HTML props base prevents the "Type is not assignable to never"
 * error caused by complex intersection conflicts between strict HTML types and Atoms.
 */
export type BoxProps = Atoms & {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'div'>, keyof Atoms | 'as'>;

/**
 * A fundamental layout primitive.
 */
export const Box = ({
  as: Component = 'div',
  className,
  children,
  ...props
}: BoxProps): React.JSX.Element => {
  const atomProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  // Runtime filtration
  for (const key in props) {
    if (sprinkleProperties.has(key)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  const atomClasses = atoms(atomProps as Atoms);

  const combinedClasses = className
    ? `${atomClasses} ${className}`
    : atomClasses;

  return (
    <Component className={combinedClasses} {...nativeProps}>
      {children}
    </Component>
  );
};
