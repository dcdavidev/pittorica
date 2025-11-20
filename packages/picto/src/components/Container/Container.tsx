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
   * Controls the responsive breakpoint for content width.
   * @default 'lg'
   */
  size?: NonNullable<ContainerVariants>['size'];
};

/**
 * A layout primitive that constrains content to a maximum width and centers it.
 * Automatically adds responsive horizontal padding for proper spacing on all screen sizes.
 *
 * @param props - Component props.
 * @returns The rendered container element.
 * @example
 * <Container size="md">
 *   <Heading>Welcome</Heading>
 *   <Paragraph>Content goes here...</Paragraph>
 * </Container>
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
