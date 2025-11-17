import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import clsx from 'clsx';

export type ButtonVariant =
  | 'elevated'
  | 'filled'
  | 'tonal'
  | 'outlined'
  | 'text';

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'info'
  | 'warning';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonShape = 'round' | 'square';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  disabled?: boolean;
}

/**
 * Pittorica Button wrapper. Maps to .picto-btn-[variant] classes.
 * @example
 * <Button variant="filled" size="lg" shape="round">Click me</Button>
 * <Button variant="icon" size="sm" shape="square" aria-label="Close"><CloseIcon /></Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color,
  size = 'md',
  shape = 'round',
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const variantClass = `picto-btn-${variant}`;
  const colorClass = color ? `picto-btn-color-${color}` : '';
  const sizeClass = `picto-btn--${size}`;
  const shapeClass = `picto-btn--${shape}`;
  const disabledClass = disabled ? 'picto-btn--disabled' : '';

  return React.createElement(
    'button',
    {
      className: clsx(
        'picto-btn',
        variantClass,
        colorClass,
        sizeClass,
        shapeClass,
        disabledClass,
        className
      ),
      disabled,
      ...rest,
    },
    children
  );
};
