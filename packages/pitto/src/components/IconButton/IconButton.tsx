import React from 'react';

import clsx from 'clsx';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { Box, type BoxProps } from '../Box/Box.js';
import { iconButtonRecipe } from './iconbutton.css.js';

type IconButtonVariants = RecipeVariants<typeof iconButtonRecipe>;

export type IconButtonProps = Omit<BoxProps, 'as' | 'children' | 'size'> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: NonNullable<IconButtonVariants>['variant'];
    size?: NonNullable<IconButtonVariants>['size'];
    disabled?: NonNullable<IconButtonVariants>['disabled'];
  };

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'text',
  size = 'medium',
  className,
  disabled = false,
  ...props
}) => {
  const recipeClass = iconButtonRecipe({ variant, size, disabled });

  return (
    <Box
      as="button"
      className={clsx(recipeClass, className)}
      type="button" // Default HTML type
      disabled={disabled}
      {...props}
    >
      {children}
    </Box>
  );
};
