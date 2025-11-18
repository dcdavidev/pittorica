import React from 'react';

import clsx from 'clsx';

import { ColorToken } from '../../types/colors.js';
import { ElevationToken } from '../../types/elevation.js';
import { ShapeToken } from '../../types/shapes.js';

export type SurfaceColor = ColorToken | 'default';

export type SurfaceElevation = ElevationToken;

export type SurfaceShape = ShapeToken;

export interface SurfaceProps {
  color?: SurfaceColor;
  elevation?: SurfaceElevation;
  shape?: SurfaceShape;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Surface: React.FC<SurfaceProps> = ({
  color = 'default',
  elevation = 'none',
  shape = 'none',
  children,
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  const colorClass =
    color === 'default' ? 'picto-surface' : `picto-surface-${color}`;
  const elevationClass =
    elevation === 'none' ? '' : `picto-elevation-${elevation}`;
  const shapeClass = shape === 'none' ? '' : `picto-shape-${shape}`;

  const classes = clsx(colorClass, elevationClass, shapeClass, className);

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
