import React from 'react';

import clsx from 'clsx';

import { COLOR_TOKEN, ColorToken } from '../../types/index.js';
import { SpacingToken } from '../../types/spacing.js';

export type HeroSize = SpacingToken | 'xxl' | 'screen';

export type HeroBackground =
  | false
  | { variant: 'image'; url: string }
  | { variant: 'color'; color: ColorToken | string };

export interface HeroProps extends React.PropsWithChildren {
  size?: HeroSize;
  background?: HeroBackground;
  className?: string;
  style?: React.CSSProperties;
}

function isBackgroundConfig(
  bg: HeroBackground
): bg is Exclude<HeroBackground, false> {
  return bg !== false;
}

export function Hero({
  children,
  size = 'lg',
  background = false,
  className,
  style = {},
}: HeroProps): React.ReactElement {
  const isScreenSize = size === 'screen';

  let backgroundColor: string | undefined = undefined;
  let backgroundImage = 'none';
  let backgroundClass = '';

  if (isBackgroundConfig(background)) {
    if (background.variant === 'color') {
      const color = background.color;
      if (
        typeof color === 'string' &&
        (COLOR_TOKEN as readonly string[]).includes(color)
      ) {
        // Use CSS class for semantic colors
        backgroundClass = `picto-hero-bg-${color}`;
        backgroundColor = undefined; // Let CSS class handle the background
      } else {
        // Use inline style for custom colors
        backgroundColor = color;
        backgroundClass = ''; // No CSS class for custom colors
      }
    } else if (background.variant === 'image') {
      backgroundImage = `url(${background.url})`;
      backgroundColor = undefined;
    }
  }

  const baseStyle: React.CSSProperties = {
    ...(isScreenSize && { minHeight: '100vh' }),
    width: '100%',
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: isScreenSize ? 'flex' : 'block',
    flexDirection: isScreenSize ? 'column' : undefined,
    justifyContent: isScreenSize ? 'center' : undefined,
    alignItems: isScreenSize ? 'center' : undefined,
    ...(backgroundColor && { backgroundColor }),
    ...style,
  };

  return (
    <section
      className={clsx(
        'picto-hero',
        backgroundClass,
        !isScreenSize && `picto-hero-${size === 'xxl' ? '2xl' : size}`,
        className
      )}
      style={baseStyle}
    >
      {children}
    </section>
  );
}
