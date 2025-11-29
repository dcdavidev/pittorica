import React from 'react';

import clsx from 'clsx';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { Box, type BoxProps } from '../Box/Box.js';
import { buttonRecipe, iconStyle } from './button.css.js';

type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export type ButtonProps = Omit<BoxProps, 'as' | 'children'> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: NonNullable<ButtonVariants>['variant'];
    size?: NonNullable<ButtonVariants>['size'];
    fullWidth?: NonNullable<ButtonVariants>['fullWidth'];
    startDecorator?: React.ReactNode;
    endDecorator?: React.ReactNode;
    disabled?: NonNullable<ButtonVariants>['disabled'];
  };

/**
 * Helper function to render a decorator dynamically.
 * Accepts either a React Element (<Icon />) or a Component Type (Icon).
 */
const renderDecorator = (Decorator: React.ReactNode | React.ElementType) => {
  if (!Decorator) return null;

  // If it's already a React Element (e.g. <Icon size={20} />), return it.
  if (React.isValidElement(Decorator)) {
    return Decorator;
  }

  // If it's a Component function/class (e.g. IconSearch), render it.
  if (
    typeof Decorator === 'function' ||
    (typeof Decorator === 'object' && Decorator !== null)
  ) {
    const DecoratorComponent = Decorator as React.ElementType;
    // You can pass default props here if needed (e.g. size/color context)
    return <DecoratorComponent />;
  }

  // Fallback for strings or other nodes
  return Decorator as React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'medium',
  fullWidth = false,
  startDecorator,
  endDecorator,
  className,
  disabled = false,
  ...props
}) => {
  const recipeClass = buttonRecipe({ variant, size, fullWidth, disabled });

  return (
    <Box
      as="button"
      className={clsx(recipeClass, className)}
      type="button" // Default HTML type
      disabled={disabled}
      style={{
        cursor: disabled ? 'not-allowed !important' : 'pointer',
        ...props.style,
      }}
      {...props}
    >
      {startDecorator && (
        <span className={iconStyle} aria-hidden="true">
          {renderDecorator(startDecorator)}
        </span>
      )}

      {children}

      {endDecorator && (
        <span className={iconStyle} aria-hidden="true">
          {renderDecorator(endDecorator)}
        </span>
      )}
    </Box>
  );
};
