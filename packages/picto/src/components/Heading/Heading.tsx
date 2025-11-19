import React from 'react';

import clsx from 'clsx';

import type { ColorToken } from '../../types/colors.js';
import type { TypographyAlign } from '../../types/typography.js';

type HeadingVariant = 'display' | 'headline' | 'title';
type HeadingSize = 'lg' | 'md' | 'sm';

interface HeadingProps {
  variant: HeadingVariant;
  size: HeadingSize;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  color?: ColorToken;
  align?: TypographyAlign;
  space?: string;
}

const Heading: React.FC<HeadingProps> = ({
  variant,
  size,
  children,
  style,
  className: additionalClassName,
  align,
  space,
  color,
}) => {
  const baseClassName = `picto-text-${variant}-${size}`;
  const colorClassName = color ? `picto-text-${color}` : undefined;
  const alignClassName = align ? `picto-text-${align}` : undefined;

  let spaceClassName;
  let spaceStyle = {};
  if (space) {
    if (space === 'lg' || space === 'md' || space === 'sm') {
      spaceClassName = `picto-space-${space}`;
    } else {
      spaceStyle = { paddingTop: space, paddingBottom: `calc(${space} / 2)` };
    }
  }

  const combinedClassName = clsx(
    baseClassName,
    colorClassName,
    alignClassName,
    spaceClassName,
    additionalClassName
  );

  let Tag;
  if (variant === 'display') {
    switch (size) {
      case 'lg': {
        Tag = 'h1';
        break;
      }
      case 'md': {
        Tag = 'h2';
        break;
      }
      case 'sm': {
        Tag = 'h3';
        break;
      }
    }
  } else {
    switch (size) {
      case 'lg': {
        Tag = 'h4';
        break;
      }
      case 'md': {
        Tag = 'h5';
        break;
      }
      case 'sm': {
        Tag = 'h6';
        break;
      }
    }
  }

  return React.createElement(
    Tag,
    {
      className: combinedClassName,
      style: { margin: 0, ...spaceStyle, ...style },
    },
    children
  );
};

export default Heading;
