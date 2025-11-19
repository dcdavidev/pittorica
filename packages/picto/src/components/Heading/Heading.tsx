import React from 'react';

import clsx from 'clsx';

import { TextAlignToken, typography, vars } from '../../style/index.js';
import { TextColor } from '../../types/colors.js';

type HeadingVariant = 'display' | 'headline' | 'title';
type HeadingSize = 'lg' | 'md' | 'sm';

interface HeadingProps {
  variant: HeadingVariant;
  size: HeadingSize;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  color?: TextColor;
  align?: TextAlignToken;
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
  const token = `${variant}-${size}` as const;
  const typographyClass = typography[token];

  let spaceStyle: React.CSSProperties = {};
  if (space) {
    if (space === 'lg' || space === 'md' || space === 'sm') {
      // For semantic spacing, use vars.space
      const spaceValue = vars.space[space];
      spaceStyle = {
        paddingTop: spaceValue,
        paddingBottom: `calc(${spaceValue} / 2)`,
      };
    } else {
      spaceStyle = { paddingTop: space, paddingBottom: `calc(${space} / 2)` };
    }
  }

  const combinedClassName = clsx(typographyClass, additionalClassName);

  let Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
      default: {
        Tag = 'h1';
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
      default: {
        Tag = 'h4';
        break;
      }
    }
  }

  const colorStyle: React.CSSProperties = color
    ? {
        color:
          color === 'transparent'
            ? 'transparent'
            : vars.color[color as keyof typeof vars.color],
      }
    : {};

  return React.createElement(
    Tag,
    {
      className: combinedClassName,
      style: {
        textAlign: align,
        ...spaceStyle,
        ...style,
        ...colorStyle,
      },
    },
    children
  );
};

export default Heading;
