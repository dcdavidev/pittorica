import type { ButtonHTMLAttributes, ReactNode } from 'react';
import React, { useState } from 'react';

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
  | 'tonal'
  | 'error'
  | 'success'
  | 'info'
  | 'warning';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonShape = 'round' | 'square';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  href?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  disabled?: boolean;
  startDecorator?: ReactNode;
  focusStartDecorator?: ReactNode;
  activeStartDecorator?: ReactNode;
  successStartDecorator?: ReactNode;
  errorStartDecorator?: ReactNode;
  loadingDecorator?: ReactNode;
  endDecorator?: ReactNode;
  focusEndDecorator?: ReactNode;
  activeEndDecorator?: ReactNode;
  successEndDecorator?: ReactNode;
  errorEndDecorator?: ReactNode;
  loadingEndDecorator?: ReactNode;
  loadingText?: string;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
}

/**
 * Pittorica Button wrapper. Maps to .picto-btn-[variant] classes.
 * @example
 * <Button variant="filled" size="lg" shape="round">Click me</Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color,
  size = 'md',
  shape = 'round',
  children,
  className = '',
  disabled,
  startDecorator,
  focusStartDecorator,
  activeStartDecorator,
  successStartDecorator,
  errorStartDecorator,
  loadingDecorator,
  endDecorator,
  focusEndDecorator,
  activeEndDecorator,
  successEndDecorator,
  errorEndDecorator,
  loadingText,
  loading = false,
  error = false,
  success = false,
  onClick,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
  href,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Determine effective state based on priority
  let effectiveState: string;
  if (error && success) {
    console.error(
      'Button cannot have both error and success states. Falling back to idle.'
    );
    effectiveState = 'idle';
  } else if (error) {
    effectiveState = 'error';
  } else if (success) {
    effectiveState = 'success';
  } else if (loading) {
    effectiveState = 'loading';
  } else {
    effectiveState = 'idle';
  }

  // Determine color based on state
  let effectiveColor: ButtonColor | undefined;
  if (effectiveState === 'error') {
    effectiveColor = 'error';
  } else if (effectiveState === 'success') {
    effectiveColor = 'success';
  } else {
    effectiveColor = color;
  }

  const variantClass = `picto-btn-${variant}`;
  const colorClass = effectiveColor ? `picto-btn-color-${effectiveColor}` : '';
  const sizeClass = `picto-btn--${size}`;
  const shapeClass = `picto-btn--${shape}`;
  const disabledClass = disabled ? 'picto-btn--disabled' : '';
  const stateClass = `picto-btn-state-${effectiveState}`;
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
    active: ReactNode,
    success: ReactNode,
    error: ReactNode,
    loading: ReactNode
  ) => {
    if (isActive && active) return active;
    if (isFocused && focus) return focus;
    if (effectiveState === 'success' && success) return success;
    if (effectiveState === 'error' && error) return error;
    if (effectiveState === 'loading' && loading) return loading;
    return base;
  };

  // For loading state, loadingDecorator is used for both start and end
  const currentStartDecorator = getDecorator(
    startDecorator,
    focusStartDecorator,
    activeStartDecorator,
    successStartDecorator,
    errorStartDecorator,
    loadingDecorator
  );

  const currentEndDecorator = getDecorator(
    endDecorator,
    focusEndDecorator,
    activeEndDecorator,
    successEndDecorator,
    errorEndDecorator,
    loadingDecorator
  );

  // For loading, show children and overlay with spinner/decorator
  const currentChildren = loading && loadingText ? loadingText : children;

  const buttonChildren = [];
  if (currentStartDecorator) {
    buttonChildren.push(
      React.createElement(
        'span',
        {
          key: 'start',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: '0.5em',
          },
        },
        currentStartDecorator
      )
    );
  }
  if (effectiveState === 'loading' && !loadingDecorator) {
    buttonChildren.push(
      React.createElement(
        'svg',
        {
          key: 'spinner',
          width: '1.5em',
          height: '1.5em',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          style: {
            animation: 'spin 1s linear infinite',
            marginRight: '0.5em',
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
      )
    );
  }
  if (currentChildren) {
    buttonChildren.push(
      React.createElement(
        'span',
        {
          key: 'children',
          style: { display: 'inline-flex', alignItems: 'center' },
        },
        currentChildren
      )
    );
  }
  if (currentEndDecorator) {
    buttonChildren.push(
      React.createElement(
        'span',
        {
          key: 'end',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: '0.5em',
          },
        },
        currentEndDecorator
      )
    );
  }
  // Reorder: startDecorator, spinner (if loading), text, endDecorator
  if (effectiveState === 'loading' && !loadingDecorator) {
    // Move spinner right after startDecorator
    const spinnerIndex = buttonChildren.findIndex((el) => el.key === 'spinner');
    if (spinnerIndex > 0) {
      const spinner = buttonChildren.splice(spinnerIndex, 1)[0];
      buttonChildren.splice(1, 0, spinner); // after startDecorator
    }
  }
  if (href) {
    return React.createElement(
      'a',
      {
        className: clsx(
          'picto-btn',
          variantClass,
          colorClass,
          sizeClass,
          shapeClass,
          disabledClass,
          stateClass,
          loadingActiveClass,
          className
        ),
        href,
        tabIndex: disabled ? -1 : 0,
        'aria-disabled': disabled,
        style: { textDecoration: 'none', ...rest.style },
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          // Simulate button event type for onClick
          onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        },
        ...rest,
      },
      ...buttonChildren
    );
  }
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
    ...buttonChildren
  );
};
