import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

import clsx from 'clsx';

export type TypographyVariant =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'label-lg'
  | 'label-md'
  | 'label-sm';

export type TypographyColor =
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'info'
  | 'warning';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  color?: TypographyColor;
  align?: TypographyAlign;
  children: ReactNode;
}

/**
 * Pittorica Typography wrapper. Maps to .picto-font-[variant] classes.
 * Responsive typography using clamp() for fluid scaling across viewports.
 * @example
 * <Typography variant="headline-large" as="h1">Title</Typography>
 * <Typography variant="body-large" color="primary">Body text</Typography>
 * <Typography align="center">Centered text</Typography>
 * <Typography>Default body-large text</Typography>
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body-lg',
  as = 'span',
  color,
  align,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const variantClass = `picto-font-${variant}`;
  let colorClass = '';
  switch (color) {
    case 'light': {
      colorClass = 'picto-text-white'; // white
      break;
    }
    case 'dark': {
      colorClass = 'picto-text-black'; // black
      break;
    }
    case 'primary': {
      colorClass = 'picto-text-primary';
      break;
    }
    case 'secondary': {
      colorClass = 'picto-text-secondary';
      break;
    }
    case 'tertiary': {
      colorClass = 'picto-text-tertiary';
      break;
    }
    case 'info': {
      colorClass = 'picto-text-info';
      break;
    }
    case 'success': {
      colorClass = 'picto-text-success';
      break;
    }
    case 'warning': {
      colorClass = 'picto-text-warning';
      break;
    }
    case 'error': {
      colorClass = 'picto-text-error';
      break;
    }
    default: {
      colorClass = '';
    }
  }
  return React.createElement(
    Tag,
    {
      className: clsx(variantClass, colorClass, className),
      style: { display: 'block', textAlign: align, ...rest.style },
      ...rest,
    },
    children
  );
};
