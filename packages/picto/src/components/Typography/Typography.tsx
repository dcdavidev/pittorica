import type { JSX } from 'react';
import React, { type ElementType } from 'react';

import clsx from 'clsx';

import {
  FontWeight,
  LetterSpacing,
  LineHeight,
  TypographyAlign,
  TypographySize,
} from '../../types/typography.js';
import {
  getColorClass,
  getLetterSpacingClass,
  getLineHeightClass,
  getWeightClass,
} from './helpers.js';

export interface TypographyProps {
  as?: ElementType;
  size?: TypographySize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  color?: string;
  align?: TypographyAlign;
  italic?: boolean;
  paragraph?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  as,
  size,
  weight,
  lineHeight,
  letterSpacing,
  color,
  align,
  italic,
  paragraph,
  children,
  className,
  style,
  ...rest
}) => {
  // Mapping TypographySize to default HTML elements
  const sizeToElement: Record<TypographySize, keyof JSX.IntrinsicElements> = {
    'display-lg': 'h1',
    'display-md': 'h2',
    'display-sm': 'h3',
    'headline-lg': 'h2',
    'headline-md': 'h3',
    'headline-sm': 'h4',
    'title-lg': 'h3',
    'title-md': 'h4',
    'title-sm': 'h5',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'label-lg': 'p',
    'label-md': 'p',
    'label-sm': 'p',
  };
  let Tag: ElementType = 'span';
  if (as) {
    Tag = as;
  } else if (paragraph) {
    Tag = 'p';
  } else if (size) {
    Tag = sizeToElement[size] as ElementType;
  }

  const variantClass = size ? `picto-text-${size}` : '';
  const weightClass = getWeightClass(weight);
  const lineHeightClass = getLineHeightClass(lineHeight);
  const letterSpacingClass = getLetterSpacingClass(letterSpacing);
  const colorClass = getColorClass(color);
  const alignClass = align ? `picto-text-${align}` : '';

  const classes = clsx(
    variantClass,
    weightClass,
    lineHeightClass,
    letterSpacingClass,
    colorClass,
    alignClass,
    italic && 'picto-text-italic',
    className
  );

  return React.createElement(
    Tag,
    {
      className: classes,
      style,
      ...rest,
    },
    children
  );
};
