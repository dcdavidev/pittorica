import React, { InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import {
  endDecoratorStyle,
  inputRecipe,
  nativeInput,
  startDecoratorStyle,
} from './input.css.js';

type InputVariants = RecipeVariants<typeof inputRecipe>;

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /**
   * Visual style of the input.
   * @default 'outlined'
   */
  variant?: NonNullable<InputVariants>['variant'];

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: NonNullable<InputVariants>['size'];

  /**
   * If true, the input will take up the full width of its container.
   * @default true
   */
  fullWidth?: NonNullable<InputVariants>['fullWidth'];

  /**
   * If true, the component indicates an error state.
   */
  error?: boolean;

  /**
   * Element placed before the input text (e.g., icon, currency symbol).
   */
  startDecorator?: React.ReactNode;

  /**
   * Element placed after the input text (e.g., loading spinner, clear button).
   */
  endDecorator?: React.ReactNode;
};

/**
 * A flexible Input component following Material Design 3 specs.
 * React 19 Version: 'ref' is passed as a standard prop.
 */
export const Input = ({
  ref,
  variant = 'outlined',
  size = 'medium',
  fullWidth = true,
  error = false,
  disabled = false,
  className,
  startDecorator,
  endDecorator,
  ...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }) => {
  const wrapperClass = inputRecipe({
    variant,
    size,
    error,
    disabled,
    fullWidth,
  });

  return (
    <div className={clsx(wrapperClass, className)}>
      {/* Start Decorator */}
      {startDecorator && (
        <span className={startDecoratorStyle}>{startDecorator}</span>
      )}

      {/* Native Input */}
      <input
        ref={ref}
        className={nativeInput}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />

      {/* End Decorator */}
      {endDecorator && (
        <span className={endDecoratorStyle}>{endDecorator}</span>
      )}
    </div>
  );
};

Input.displayName = 'Input';
