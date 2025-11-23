import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { containerRecipe } from './container.css.js';

type ContainerVariants = RecipeVariants<typeof containerRecipe>;

/**
 * Props for the Container component.
 */
export type ContainerProps = Omit<BoxProps, 'as'> & {
  /**
   * The maximum width of the container.
   * - 'none': Full width, no padding.
   * - 'small' to 'xxlarge': Constrained width with responsive padding.
   * @default 'large'
   */
  size?: NonNullable<ContainerVariants>['size'];
};

/**
 * A layout primitive that constrains content to a maximum width and centers it.
 * Automatically adds responsive horizontal padding for proper spacing on all screen sizes.
 *
 * @example
 * <Container size="medium">
 * <Heading>Welcome</Heading>
 * </Container>
 */
export const Container = ({
  size = 'large',
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
