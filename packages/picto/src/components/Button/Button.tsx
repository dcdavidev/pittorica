import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { buttonRecipe, iconWrapper } from './button.css.js';

// Extract variants from the recipe
type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

/**
 * Helper function to render an icon dynamically.
 */
const renderIcon = (Icon: React.ReactNode | React.ElementType) => {
  if (!Icon) return null;
  if (React.isValidElement(Icon)) return Icon;
  if (
    typeof Icon === 'function' ||
    (typeof Icon === 'object' && Icon !== null)
  ) {
    const IconComponent = Icon as React.ElementType;
    return <IconComponent />;
  }
  return Icon as React.ReactNode;
};

/**
 * Props for the Button component.
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
   * The semantic color palette of the button.
   * @default 'brand'
   */
  color?: NonNullable<ButtonVariants>['color'];

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
   * @default false
   */
  selected?: boolean;

  /**
   * URL to navigate to. When provided, the button renders as an anchor tag.
   */
  href?: string;

  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;

  /**
   * Icon/Element to display at the start.
   */
  startDecorator?: React.ReactNode | React.ElementType;

  /**
   * Icon/Element to display at the end.
   */
  endDecorator?: React.ReactNode | React.ElementType;

  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

/**
 * A versatile button component following Material Design 3 principles.
 */
export const Button = ({
  variant = 'filled',
  color = 'brand',
  size = 'medium',
  shape = 'round',
  fullWidth = false,
  selected = false,
  href,
  target,
  rel,
  startDecorator,
  endDecorator,
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
    color,
    size,
    shape,
    fullWidth,
    selected,
  });

  const isDisabled = disabled || loading;
  const Component = href ? 'a' : 'button';

  const buttonProps = href
    ? {}
    : {
        type,
        disabled: isDisabled,
        onClick,
      };

  const anchorProps = href
    ? {
        href: isDisabled ? undefined : href,
        target,
        rel: target === '_blank' ? rel || 'noopener noreferrer' : rel,
        onClick: isDisabled
          ? (e: React.MouseEvent) => e.preventDefault()
          : onClick,
        'aria-disabled': isDisabled,
      }
    : {};

  return (
    <Box
      as={Component}
      className={clsx(recipeClass, className)}
      {...buttonProps}
      {...anchorProps}
      {...props}
    >
      {loading ? (
        <>
          <span className={iconWrapper}>⏳</span>
          {children}
        </>
      ) : (
        <>
          {startDecorator && (
            <span className={iconWrapper}>{renderIcon(startDecorator)}</span>
          )}
          {children}
          {endDecorator && (
            <span className={iconWrapper}>{renderIcon(endDecorator)}</span>
          )}
        </>
      )}
    </Box>
  );
};
