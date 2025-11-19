import React from 'react';

import clsx from 'clsx';

import { vars } from '../../style/index.js';
import { SurfaceColor } from '../../types/colors.js';
import * as styles from './Surface.css.js';
import { shape as shapeStyles } from '../../style/index.js';

export type SurfaceElevation = keyof typeof vars.elevation;

export type SurfaceShape = keyof typeof vars.shape;

export interface SurfaceProps {
  color?: SurfaceColor;
  elevation?: SurfaceElevation;
  shape?: SurfaceShape;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  flex?: boolean;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexDirection?: React.CSSProperties['flexDirection'];
  gap?: string | number;
  grow?: number;
  screen?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
}

const Surface: React.FC<SurfaceProps> = ({
  color = 'surface',
  elevation = 'none',
  shape = 'none',
  children,
  className,
  as: Component = 'div',
  flex: isFlex = false,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  grow,
  screen = false,
  textAlign,
  style = {},
  ...rest
}) => {
  const flexStyles: React.CSSProperties = isFlex
    ? {
        display: 'flex',
        justifyContent,
        alignItems,
        flexDirection,
        gap,
        flexGrow: grow,
      }
    : {};

  const otherStyles: React.CSSProperties = {
    width: screen ? '100vw' : undefined,
    height: screen ? '100vh' : undefined,
    textAlign,
  };

  const classes = clsx(
    styles.base,
    color !== 'surface' && styles[color],
    elevation !== 'none' && styles.elevation[elevation],
    shape !== 'none' && shapeStyles[shape],
    isFlex && styles.flex,
    className
  );

  return (
    <Component
      className={classes}
      style={{ ...flexStyles, ...otherStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Surface;
