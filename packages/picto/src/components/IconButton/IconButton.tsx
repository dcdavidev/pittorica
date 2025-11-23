import React, { CSSProperties } from 'react'; // Import CSSProperties

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';
import { Box, BoxProps } from '../Box/Box.js';
import { iconButtonRecipe } from './icon-button.css.js';

type IconButtonVariants = RecipeVariants<typeof iconButtonRecipe>;

const themeMap = {
  brand: vars.colors.brand['500'],
  secondary: vars.colors.secondary['500'],
  tertiary: vars.colors.tertiary['500'],
  info: vars.colors.info['500'],
  success: vars.colors.success['500'],
  warning: vars.colors.warning['500'],
  error: vars.colors.error['500'],
  gray: vars.colors.gray['500'],
};

export type IconButtonColor = keyof typeof themeMap | (string & {});

export type IconButtonProps = Omit<
  BoxProps,
  'as' | 'display' | 'alignItems' | 'justifyContent' | 'width' | 'height'
> & {
  variant?: NonNullable<IconButtonVariants>['variant'];
  size?: NonNullable<IconButtonVariants>['size'];
  shape?: NonNullable<IconButtonVariants>['shape'];
  color?: IconButtonColor;
  'aria-label': string;
  href?: string;
  target?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: React.ReactNode;
};

interface CustomCSS extends CSSProperties {
  '--dynamic-btn-color'?: string;
}

export const IconButton = ({
  variant = 'text',
  size = 'medium',
  shape = 'circle',
  color = 'brand',
  'aria-label': ariaLabel,
  href,
  target,
  disabled = false,
  loading = false,
  onClick,
  className,
  style,
  children,
  ...props
}: IconButtonProps): React.JSX.Element => {
  const recipeClass = iconButtonRecipe({ variant, size, shape });
  const isDisabled = disabled || loading;
  const Component = href ? 'a' : 'button';

  const resolvedColor =
    themeMap[color as keyof typeof themeMap] || color || themeMap.brand;

  const elementProps = href
    ? {
        href: isDisabled ? undefined : href,
        target,
        rel: target === '_blank' ? 'noopener noreferrer' : undefined,
        'aria-disabled': isDisabled,
        onClick: isDisabled
          ? (e: React.MouseEvent) => e.preventDefault()
          : onClick,
      }
    : {
        type: 'button' as const,
        disabled: isDisabled,
        onClick,
      };

  return (
    <Box
      as={Component}
      className={clsx(recipeClass, className)}
      aria-label={ariaLabel}
      title={ariaLabel}
      style={
        {
          ...style,
          '--dynamic-btn-color': resolvedColor,
        } as CustomCSS
      }
      {...elementProps}
      {...props}
    >
      {loading ? (
        <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
      ) : (
        children
      )}
    </Box>
  );
};
