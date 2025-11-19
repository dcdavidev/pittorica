import React from 'react';

import clsx from 'clsx';

import {
  type Atoms,
  atoms,
  validSprinkleKeys as sprinkleProperties,
} from '../../styles/sprinkles.css.js';

/**
 * We define the BoxProps by combining Atoms and a permissive HTML type.
 * We use PropsWithChildren to automatically include the 'children' prop.
 */
export type BoxProps = React.PropsWithChildren<
  Atoms & {
    as?: React.ElementType;
    className?: string;
  } & Omit<React.ComponentPropsWithoutRef<'div'>, keyof Atoms | 'as'>
>;

/**
 * A fundamental layout primitive.
 */
export const Box: React.FC<BoxProps> = ({
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

  return (
    <Component className={clsx(atomClasses, className)} {...nativeProps}>
      {children}
    </Component>
  );
};
