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

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  color?: TypographyColor;
  children: ReactNode;
}

/**
 * Pittorica Typography wrapper. Maps to .picto-typography-[variant] classes.
 * @example
 * <Typography variant="headline-large" as="h1">Title</Typography>
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body-lg',
  as = 'span',
  color,
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const variantClass = variant ? `picto-font-${variant}` : '';
  let colorClass = '';
  switch (color) {
    case 'light': {
      colorClass = 'picto-text-surface'; // white
      break;
    }
    case 'dark': {
      colorClass = 'picto-text-background'; // dark
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
      colorClass = 'picto-text-background';
    }
  }
  return React.createElement(
    Tag,
    {
      className: clsx(variantClass, colorClass, className),
      ...rest,
    },
    children
  );
};
