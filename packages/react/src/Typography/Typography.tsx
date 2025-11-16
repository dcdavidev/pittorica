import type { HTMLAttributes, ReactNode } from 'react';
import type { ElementType } from 'react';
import React from 'react';

export type TypographyVariant =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
}

/**
 * Pittorica Typography wrapper. Maps to .picto-typography-[variant] classes.
 * @example
 * <Typography variant="headline-large" as="h1">Title</Typography>
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body-large',
  as = 'span',
  children,
  className = '',
  ...rest
}) => {
  const Tag: ElementType = as;
  const variantClass = variant ? `picto-typography-${variant}` : '';
  return React.createElement(
    Tag,
    {
      className: `${variantClass} ${className}`.trim(),
      ...rest,
    },
    children
  );
};
