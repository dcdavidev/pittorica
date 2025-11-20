import React from 'react';

import clsx from 'clsx';

import { type Atoms, atoms } from '../../styles/sprinkles.css.js';

/**
 * UTILITY TYPE: Removes the index signature from a type.
 * This is necessary to avoid conflicts between the permissive Sprinkles index signature
 * and the specific 'as' prop, allowing them to coexist safely.
 */
type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : K]: T[K];
};

/**
 * Defines the props for the Box component.
 * It combines the clean atomic styles (without index signature)
 * with standard HTML attributes and the polymorphic 'as' prop.
 */
export type BoxProps = RemoveIndex<Atoms> &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Atoms | 'as'> & {
    as?: React.ElementType;
    className?: string;
    children?: React.ReactNode;
  };

/**
 * A fundamental layout primitive that handles atomic styles and polymorphism.
 * It separates style props (handled by Vanilla Extract) from native DOM attributes.
 *
 * @param {BoxProps} props - The component properties.
 * @returns {React.JSX.Element} The rendered polymorphic element.
 */
export const Box = ({
  as: Component = 'div',
  className,
  children,
  ...props
}: BoxProps): React.JSX.Element => {
  const atomProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  // Runtime filtration: Separate style props from native HTML props
  for (const key in props) {
    /**
     * Check if the current prop key exists in the atoms definition.
     * We cast 'key' to string because 'atoms.properties' is a Set<string>,
     * and we need to check if the property name matches a known atom.
     */
    if (atoms.properties.has(key as keyof Atoms)) {
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
