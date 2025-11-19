import React from 'react';

import clsx from 'clsx';

import { vars } from '../../style/vars.css.js';

export type SurfaceColor = keyof typeof vars.color | 'default' | 'transparent';

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
  screen = false,
  textAlign,
  style = {},
  ...rest
}) => {
  const classes = clsx(className);

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

  // Handle background color
  const backgroundStyles: React.CSSProperties = {};
  let surfaceClass = 'picto-surface-bg'; // Always apply surface background class

  if (color === 'transparent') {
    backgroundStyles.background = 'inherit';
    surfaceClass = ''; // Don't apply surface class for transparent
  } else if (color === 'default') {
    // Use theme-appropriate surface background (already handled by class)
  } else if (color in vars.color) {
    // Use container color for better contrast if available
    const containerColorKey = `${color}Container` as keyof typeof vars.color;
    if (containerColorKey in vars.color) {
      backgroundStyles.backgroundColor = vars.color[containerColorKey];
      surfaceClass = ''; // Don't apply surface class when using specific color
    } else {
      backgroundStyles.backgroundColor =
        vars.color[color as keyof typeof vars.color];
      surfaceClass = ''; // Don't apply surface class when using specific color
    }
  }

  // Combine classes
  const finalClasses = clsx(classes, surfaceClass);

  // Handle elevation
  const elevationStyles: React.CSSProperties = {};
  if (elevation !== 'none') {
    elevationStyles.boxShadow = vars.elevation[elevation];
  }

  // Handle shape
  const shapeStyles: React.CSSProperties = {};
  if (shape !== 'none') {
    shapeStyles.borderRadius = vars.shape[shape];
  }

  // Handle screen size
  const screenStyles: React.CSSProperties = {};
  if (screen) {
    screenStyles.width = '100vw';
    screenStyles.height = '100vh';
  }

  // Handle text alignment
  const textAlignStyles: React.CSSProperties = {};
  if (textAlign) {
    textAlignStyles.textAlign = textAlign;
  }

  return (
    <Component
      className={finalClasses}
      style={{
        ...backgroundStyles,
        ...elevationStyles,
        ...shapeStyles,
        ...screenStyles,
        ...textAlignStyles,
        ...flexStyles,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
