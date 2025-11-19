import React from 'react';

import clsx from 'clsx';

import { vars } from '../../style/vars.css.js';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';

export interface ContainerProps {
  size?: ContainerSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  flex?: boolean;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexDirection?: React.CSSProperties['flexDirection'];
  gap?: string | number;
  grow?: number;
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
 *
 * <Container flex justifyContent="center" alignItems="center">
 *   <Typography>Centered content with flexbox</Typography>
 * </Container>
 */
export const Container: React.FC<ContainerProps> = ({
  size = 'md',
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
  const classes = clsx(className);

  // Define max-widths for different sizes
  const maxWidths: Record<ContainerSize, string> = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px',
    fluid: '100%',
  };

  // Container styles
  const containerStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: size === 'fluid' ? '100%' : maxWidths[size],
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.space.md,
    paddingRight: vars.space.md,
  };

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

  return (
    <Component
      className={classes}
      style={{ ...containerStyles, ...flexStyles, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
};
