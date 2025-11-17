import type { CSSProperties, ElementType, ReactNode } from 'react';
import React from 'react';

import '../../index.scss';

import { Color } from '../../types/colors';
import {
  FontName,
  FontWeight,
  TypographyVariant,
} from '../../types/typography';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  as?: ElementType;
  variant?: TypographyVariant;
  color?: Color;
  align?: TypographyAlign;
  fontWeight?: FontWeight;
  font?: FontName;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const variantToClass: Record<TypographyVariant, string> = {
  'display-lg': 'picto-text-display-lg',
  'display-md': 'picto-text-display-md',
  'display-sm': 'picto-text-display-sm',
  'headline-lg': 'picto-text-headline-lg',
  'headline-md': 'picto-text-headline-md',
  'headline-sm': 'picto-text-headline-sm',
  'title-lg': 'picto-text-title-lg',
  'title-md': 'picto-text-title-md',
  'title-sm': 'picto-text-title-sm',
  'label-lg': 'picto-text-label-lg',
  'label-md': 'picto-text-label-md',
  'label-sm': 'picto-text-label-sm',
  'body-lg': 'picto-text-body-lg',
  'body-md': 'picto-text-body-md',
  'body-sm': 'picto-text-body-sm',
};

const colorToClass: Record<Color, string> = {
  light: 'picto-text-light',
  dark: 'picto-text-dark',
  primary: 'picto-text-primary',
  secondary: 'picto-text-secondary',
  accent: 'picto-text-accent',
  tonal: 'picto-text-tonal',
  error: 'picto-text-error',
  success: 'picto-text-success',
  warning: 'picto-text-warning',
  info: 'picto-text-info',
};

const alignToClass: Record<TypographyAlign, string> = {
  left: 'picto-text-left',
  center: 'picto-text-center',
  right: 'picto-text-right',
  justify: 'picto-text-justify',
};

const fontWeightToClass: Record<FontWeight, string> = {
  regular: 'picto-font-weight-regular',
  medium: 'picto-font-weight-medium',
  semibold: 'picto-font-weight-semibold',
  bold: 'picto-font-weight-bold',
};

const fontToClass: Record<FontName, string> = {
  serif: 'picto-font-serif',
  sans: 'picto-font-sans',
  mono: 'picto-font-mono',
  display: 'picto-font-display',
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'span',
  variant = 'body-md',
  color,
  align,
  fontWeight,
  font,
  className = '',
  style,
  children,
}) => {
  const classes = [
    variantToClass[variant],
    color ? colorToClass[color] : '',
    align ? alignToClass[align] : '',
    fontWeight ? fontWeightToClass[fontWeight] : '',
    font ? fontToClass[font] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
};
