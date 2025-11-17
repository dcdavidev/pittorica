import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React, { useState } from 'react';

import clsx from 'clsx';

export type IconButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'info'
  | 'warning';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonShape = 'round' | 'square';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode;
  color?: IconButtonColor;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  disabled?: boolean;
  focusDecorator?: ReactNode;
  activeDecorator?: ReactNode;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Pittorica IconButton wrapper. Optimized for icons.
 * @example
 * <IconButton>🚀</IconButton>
 */
export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color,
  size = 'md',
  shape = 'round',
  disabled,
  focusDecorator,
  activeDecorator,
  loading = false,
  onClick,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
  className = '',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const colorClass = color ? `picto-btn-color-${color}` : '';
  const sizeClass = `picto-btn--${size}`;
  const shapeClass = `picto-btn--${shape}`;
  const disabledClass = disabled ? 'picto-btn--disabled' : '';
  const stateClass = loading ? 'picto-btn-state-loading' : '';
  const loadingActiveClass = loading ? 'picto-btn--loading-active' : '';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    (event.currentTarget as HTMLButtonElement).blur();
  };

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    onMouseDown?.(event);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(false);
    onMouseUp?.(event);
  };

  const getDecorator = (
    base: ReactNode,
    focus: ReactNode,
    active: ReactNode
  ) => {
    if (isActive && active) return active;
    if (isFocused && focus) return focus;
    return base;
  };

  let currentChildren = getDecorator(children, focusDecorator, activeDecorator);

  if (loading) {
    currentChildren = React.createElement(
      'svg',
      {
        key: 'spinner',
        width: '1.5em',
        height: '1.5em',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        style: {
          animation: 'spin 1s linear infinite',
        },
      },
      React.createElement('circle', {
        cx: '12',
        cy: '12',
        r: '10',
        stroke: 'currentColor',
        strokeWidth: '2',
        fill: 'none',
        strokeLinecap: 'round',
        strokeDasharray: '20',
        strokeDashoffset: '20',
        style: {
          animation: 'colorChange 2s linear infinite',
        },
      })
    );
  }

  return React.createElement(
    'button',
    {
      className: clsx(
        'picto-btn',
        'picto-btn-icon',
        colorClass,
        sizeClass,
        shapeClass,
        disabledClass,
        stateClass,
        loadingActiveClass,
        className
      ),
      disabled,
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      ...rest,
    },
    currentChildren
  );
};
