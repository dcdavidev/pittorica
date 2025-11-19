import React from 'react';

import clsx from 'clsx';

import { TextAlignToken } from '../../style/text-align.css.js';
import { typography } from '../../style/typography.css.js';
import { vars } from '../../style/vars.css.js';

type ColorToken = keyof typeof vars.color;
type HeadingVariant = 'display' | 'headline' | 'title';
type HeadingSize = 'lg' | 'md' | 'sm';

interface HeadingProps {
  variant: HeadingVariant;
  size: HeadingSize;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  color?: ColorToken;
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

  let spaceStyle = {};
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
      style: {
        color: color ? vars.color[color] : undefined,
        textAlign: align,
        ...spaceStyle,
        ...style,
      },
    },
    children
  );
};

export default Heading;
