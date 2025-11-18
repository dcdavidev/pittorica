import type { JSX } from 'react';
import React, { type ElementType } from 'react';

import clsx from 'clsx';

import parse from 'html-react-parser';

import { ColorToken } from '../../types/colors.js';
import {
  FONT_WEIGHT_TOKEN,
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
  color?: string | ColorToken;
  align?: TypographyAlign;
  italic?: boolean;
  paragraph?: boolean;
  pre?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  noMargins?: boolean;
  html?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  as,
  size: sizeProp,
  weight,
  lineHeight,
  letterSpacing,
  color,
  align,
  italic,
  paragraph,
  pre,
  children,
  className,
  style,
  noMargins,
  html,
  ...rest
}) => {
  const size = sizeProp ?? 'body-lg';

  // Determine default lineHeight for display and headline sizes
  const defaultLineHeight =
    size?.startsWith('display') || size?.startsWith('headline')
      ? 'loose'
      : undefined;
  const effectiveLineHeight = lineHeight ?? defaultLineHeight;
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
  } else if (pre) {
    Tag = 'pre';
  } else if (paragraph) {
    Tag = 'p';
  } else if (
    FONT_WEIGHT_TOKEN.includes(weight as FontWeight) &&
    sizeProp === undefined
  ) {
    Tag = 'strong';
  } else if (size) {
    Tag = sizeToElement[size] as ElementType;
  }

  const variantClass = size ? `picto-text-${size}` : '';
  const weightClass = getWeightClass(weight);
  const lineHeightClass = getLineHeightClass(effectiveLineHeight);
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

  let computedStyle = style;
  if (weight === 'bold' && sizeProp === undefined) {
    computedStyle = { ...style, fontSize: 'inherit', display: 'inline-block' };
  }
  if (noMargins) {
    computedStyle = { ...computedStyle, margin: 0, padding: 0 };
  }

  return React.createElement(
    Tag,
    {
      className: classes,
      style: computedStyle,
      ...rest,
    },
    html ? parse(children as string) : children
  );
};
