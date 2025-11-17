import type { CSSProperties, ElementType, ReactNode } from 'react';
import React from 'react';

import '../../index.scss';

import { Color } from '../../types/colors';
import { TypographyVariant } from '../../types/typography';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
  as?: ElementType;
  variant?: TypographyVariant;
  color?: Color;
  align?: TypographyAlign;
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

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'span',
  variant = 'body-md',
  color,
  align,
  className = '',
  style,
  children,
}) => {
  const classes = [
    variantToClass[variant],
    color ? colorToClass[color] : '',
    align ? alignToClass[align] : '',
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
