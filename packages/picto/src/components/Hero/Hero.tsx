import React from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Background, BackgroundProps } from '../Background/Background.js';
import { Box } from '../Box/Box.js';
import { Container, ContainerProps } from '../Container/Container.js';
import {
  backgroundLayer,
  contentLayer,
  heroRecipe,
  overlayLayer,
  overlayVariants,
} from './hero.css.js';

type HeroRecipeVariants = RecipeVariants<typeof heroRecipe>;
type OverlayRecipeVariants = RecipeVariants<typeof overlayVariants>;

export type HeroProps = {
  children?: React.ReactNode;

  /**
   * Height dimension of the hero (min-height).
   * Controls how tall the hero section is.
   */
  size?: NonNullable<HeroRecipeVariants>['size'];

  /**
   * Maximum width of the ENTIRE Hero component.
   * - 'screen': No Container wrapper. Takes full available width (raw).
   * - 'none': Full width inside a Container (100% of parent).
   * - 'small'...'xxlarge': Constrained width (like a card).
   * @default 'xxlarge'
   */
  maxWidth?: ContainerProps['size'] | 'screen';

  /** Border radius shape */
  shape?: NonNullable<HeroRecipeVariants>['shape'];

  /** Background color (hex or token) */
  color?: string;

  /** Image URL for background */
  backgroundImage?: string;

  /** Special visual effects */
  backgroundStyle?:
    | 'none'
    | 'glass'
    | 'blured'
    | 'darken'
    | BackgroundProps['variant'];

  /** Extra props for the wrapping Container (ignored if maxWidth is 'screen') */
  containerProps?: Omit<ContainerProps, 'size'>;

  className?: string;
};

export const Hero = ({
  size = 'medium',
  maxWidth = 'xxlarge',
  shape = 'none',
  color,
  backgroundImage,
  backgroundStyle = 'none',
  containerProps,
  className,
  children,
}: HeroProps) => {
  const isDecoratedBg =
    backgroundStyle === 'beams' || backgroundStyle === 'bubbles';

  const isOverlayNeeded = ['glass', 'blured', 'darken'].includes(
    backgroundStyle as string
  );

  const heroContent = (
    <Box
      className={clsx(heroRecipe({ size, shape }), className)}
      style={color ? { backgroundColor: color } : undefined}
    >
      {/* 1. BACKGROUND IMAGE */}
      {backgroundImage && !isDecoratedBg && (
        <img src={backgroundImage} alt="" className={backgroundLayer} />
      )}

      {/* 2. BACKGROUND DECORATION */}
      {isDecoratedBg && (
        <div className={backgroundLayer}>
          <Background variant={backgroundStyle as BackgroundProps['variant']} />
        </div>
      )}

      {/* 3. OVERLAY EFFECT */}
      {isOverlayNeeded && (
        <div
          className={clsx(
            overlayLayer,
            overlayVariants({
              style:
                backgroundStyle as NonNullable<OverlayRecipeVariants>['style'],
            })
          )}
        />
      )}

      <div className={contentLayer}>{children}</div>
    </Box>
  );

  if (maxWidth === 'screen') {
    return heroContent;
  }

  return (
    <Container size={maxWidth as ContainerProps['size']} {...containerProps}>
      {heroContent}
    </Container>
  );
};
