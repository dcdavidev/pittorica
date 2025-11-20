import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { containerRecipe } from './container.css.js';

type ContainerVariants = RecipeVariants<typeof containerRecipe>;

export type ContainerProps = Omit<BoxProps, 'as'> & {
  /**
   * The maximum width of the container.
   * @default 'lg'
   */
  size?: NonNullable<ContainerVariants>['size'];
};

/**
 * A layout primitive that constrains the maximum width of the content
 * and centers it horizontally. It also adds responsive horizontal padding.
 */
export const Container = ({
  size = 'lg',
  className,
  children,
  ...props
}: ContainerProps): React.JSX.Element => {
  const recipeClass = containerRecipe({ size });

  return (
    <Box className={clsx(recipeClass, className)} {...props}>
      {children}
    </Box>
  );
};
