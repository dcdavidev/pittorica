import React from 'react';

import clsx from 'clsx';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { Box, type BoxProps } from '../Box/Box.js';
import { buttonRecipe, iconStyle } from './button.css.js';

type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export type ButtonProps = Omit<BoxProps, 'as' | 'children'> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** The content of the button */
    children: React.ReactNode;
    /** The visual variant of the button */
    variant?: NonNullable<ButtonVariants>['variant'];
    /** The size of the button */
    size?: NonNullable<ButtonVariants>['size'];
    /** Whether the button should take up the full width of its container */
    fullWidth?: NonNullable<ButtonVariants>['fullWidth'];
    /**
     * Element placed before the children.
     * Can be a React Node (e.g. `<Icon />`) or a Component type (e.g. `Icon`).
     */
    startDecorator?: React.ReactNode | React.ElementType;
    /**
     * Element placed after the children.
     * Can be a React Node (e.g. `<Icon />`) or a Component type (e.g. `Icon`).
     */
    endDecorator?: React.ReactNode | React.ElementType;
    /** Whether the button is disabled */
    disabled?: NonNullable<ButtonVariants>['disabled'];
  };

/**
 * Helper function to render a decorator dynamically.
 * Accepts either a React Element (<Icon />) or a Component Type (Icon).
 * @param Decorator - The element or component to render.
 * @returns The rendered node or null.
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
      type="button"
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
