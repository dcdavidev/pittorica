import React from 'react';

import { type Atoms, atoms } from '../../styles/sprinkles.css.js';

/**
 * We omit 'color' from the standard HTML attributes because it conflicts
 * with our Sprinkles 'color' prop.
 */
type HTMLProperties = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

/**
 * Interface for the Box component props.
 * It merges Sprinkles atoms (styles) with standard HTML div attributes (minus color).
 */
export interface BoxProps extends Atoms, HTMLProperties {
  /**
   * Optional polymorphic prop to render a different element (e.g., 'span', 'section').
   * Defaults to 'div'.
   */
  as?: React.ElementType;
}

/**
 * A fundamental layout primitive that accepts Sprinkles properties directly.
 *
 * @param {BoxProps} props The component properties.
 * @returns {React.ReactElement} The rendered element with atomic classes.
 * @example
 * <Box padding="medium" backgroundColor="brand-500">Hello World</Box>
 */
export const Box = ({
  as: Component = 'div',
  className,
  ...props
}: BoxProps): React.ReactElement => {
  // We generate the atomic class string based on the props
  // We cast props to Atoms because we know the atom props are present
  const atomClasses = atoms(props as unknown as Atoms);

  // We combine custom classNames (passed from parent) with generated atom classes
  const combinedClasses = className
    ? `${atomClasses} ${className}`
    : atomClasses;

  return <Component className={combinedClasses} {...props} />;
};
