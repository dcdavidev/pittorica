import React from 'react';

import clsx from 'clsx';

import { ColorToken } from '../../types/colors.js';
import { ElevationToken } from '../../types/elevation.js';
import { AlignItems, FlexDirection, JustifyContent } from '../../types/flex.js';
import { ShapeToken } from '../../types/shapes.js';

export type SurfaceColor = ColorToken | 'default' | 'transparent';

export type SurfaceElevation = ElevationToken;

export type SurfaceShape = ShapeToken;

export interface SurfaceProps {
  color?: SurfaceColor;
  elevation?: SurfaceElevation;
  shape?: SurfaceShape;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  flex?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexDirection?: FlexDirection;
  gap?: string | number;
  grow?: number;
}

export const Surface: React.FC<SurfaceProps> = ({
  color = 'transparent',
  elevation = 'none',
  shape = 'none',
  children,
  className = '',
  as: Component = 'div',
  flex = false,
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
  gap,
  grow,
  style = {},
  ...rest
}) => {
  let colorClass = '';
  if (color === 'default') {
    colorClass = 'picto-surface';
  } else if (color === 'transparent') {
    colorClass = '';
  } else {
    colorClass = `picto-surface-${color}`;
  }
  const elevationClass =
    elevation === 'none' ? '' : `picto-elevation-${elevation}`;
  const shapeClass = shape === 'none' ? '' : `picto-shape-${shape}`;

  // Determine if flexbox should be enabled
  const shouldEnableFlex = flex || grow !== undefined;

  // Build inline styles for flexbox properties
  const flexStyles: React.CSSProperties = {};
  if (shouldEnableFlex) {
    flexStyles.display = 'flex';
    flexStyles.justifyContent = justifyContent;
    flexStyles.alignItems = alignItems;
    flexStyles.flexDirection = flexDirection;
    if (gap !== undefined) flexStyles.gap = gap;
    if (grow !== undefined) flexStyles.flexGrow = grow;
  }

  // Handle transparent background
  const backgroundStyles: React.CSSProperties = {};
  if (color === 'transparent') {
    backgroundStyles.background = 'inherit';
  }

  const classes = clsx(colorClass, elevationClass, shapeClass, className);

  return (
    <Component
      className={classes}
      style={{ ...backgroundStyles, ...flexStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
};
