import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { buttonRecipe, iconWrapper } from './button.css.js';

// Extract variants from the recipe
type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

/**
 * Props for the Button component.
 * Extends BoxProps (minus conflicting props) to inherit atomic styles.
 */
export type ButtonProps = Omit<
  BoxProps,
  | 'as'
  | 'display'
  | 'alignItems'
  | 'justifyContent'
  | 'backgroundColor'
  | 'color'
  | 'borderColor'
  | 'borderWidth'
  | 'borderStyle'
  | 'borderRadius'
> & {
  /**
   * The visual variant of the button.
   * @default 'filled'
   */
  variant?: NonNullable<ButtonVariants>['variant'];

  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: NonNullable<ButtonVariants>['size'];

  /**
   * The shape of the button (round or square).
   * @default 'round'
   */
  shape?: NonNullable<ButtonVariants>['shape'];

  /**
   * Whether the button should take full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in a selected/toggled state.
   * Used for toggle buttons.
   * @default false
   */
  selected?: boolean;

  /**
   * Icon to display at the start (left) of the button text.
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display at the end (right) of the button text.
   */
  endIcon?: React.ReactNode;

  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in a loading state.
   * When true, the button is disabled and shows a loading indicator.
   * @default false
   */
  loading?: boolean;

  /**
   * The type of the button element.
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Click handler for the button.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * The content of the button.
   */
  children?: React.ReactNode;
};

/**
 * A versatile button component following Material Design 3 principles.
 * Built on top of the Box primitive with support for multiple variants,
 * sizes, icons, and states.
 *
 * @param {ButtonProps} props Component props.
 * @returns {React.JSX.Element} The rendered button.
 *
 * @example
 * // Filled button (default)
 * <Button>Click me</Button>
 *
 * @example
 * // Outlined button with icon
 * <Button variant="outlined" startIcon={<Icon />}>
 *   Save
 * </Button>
 *
 * @example
 * // Large tonal button
 * <Button variant="tonal" size="large">
 *   Submit
 * </Button>
 */
export const Button = ({
  variant = 'filled',
  size = 'medium',
  shape = 'round',
  fullWidth = false,
  selected = false,
  startIcon,
  endIcon,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className,
  children,
  ...props
}: ButtonProps): React.JSX.Element => {
  const recipeClass = buttonRecipe({
    variant,
    size,
    shape,
    fullWidth,
    selected,
  });

  const isDisabled = disabled || loading;

  // Separate button-specific props from Box props
  const buttonProps = {
    type,
    disabled: isDisabled,
    onClick,
  };

  return (
    <Box
      as="button"
      className={clsx(recipeClass, className)}
      {...buttonProps}
      {...props}
    >
      {loading ? (
        <>
          <span className={iconWrapper}>⏳</span>
          {children}
        </>
      ) : (
        <>
          {startIcon && <span className={iconWrapper}>{startIcon}</span>}
          {children}
          {endIcon && <span className={iconWrapper}>{endIcon}</span>}
        </>
      )}
    </Box>
  );
};
