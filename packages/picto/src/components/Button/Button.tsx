import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { buttonRecipe, iconWrapper } from './button.css.js';

// Extract variants from the recipe
type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

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

  // If it's a Component function/class (e.g. IconWritingSign), render it.
  if (
    typeof Decorator === 'function' ||
    (typeof Decorator === 'object' && Decorator !== null)
  ) {
    const DecoratorComponent = Decorator as React.ElementType;
    // You can pass default props here if needed (e.g. size)
    return <DecoratorComponent />;
  }

  // Fallback for strings or other nodes
  return Decorator as React.ReactNode;
};

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
   * Used for toggle buttons.
   * @default false
   */
  selected?: boolean;

  /**
   * URL to navigate to. When provided, the button renders as an anchor tag.
   * Follows Astro.build pattern for navigation.
   */
  href?: string;

  /**
   * Target attribute for anchor tag (only used when href is provided).
   * @default undefined
   */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * Rel attribute for anchor tag (only used when href is provided).
   * @default undefined
   */
  rel?: string;

  /**
   * Icon/Element to display at the start (left) of the button text.
   * Accepts a React Element or a Component Type.
   */
  startDecorator?: React.ReactNode | React.ElementType;

  /**
   * Icon/Element to display at the end (right) of the button text.
   * Accepts a React Element or a Component Type.
   */
  endDecorator?: React.ReactNode | React.ElementType;

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

  // Determine if we should render as anchor or button
  const Component = href ? 'a' : 'button';

  // Props specific to button element
  const buttonProps = href
    ? {}
    : {
        type,
        disabled: isDisabled,
        onClick,
      };

  // Props specific to anchor element
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
            <span className={iconWrapper}>
              {renderDecorator(startDecorator)}
            </span>
          )}
          {children}
          {endDecorator && (
            <span className={iconWrapper}>{renderDecorator(endDecorator)}</span>
          )}
        </>
      )}
    </Box>
  );
};

Button.displayName = 'Button';
