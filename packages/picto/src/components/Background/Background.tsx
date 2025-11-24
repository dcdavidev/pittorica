'use client';

import React from 'react';

import clsx from 'clsx';

import { backgroundRecipe, contentContainer } from './background.css.js';
import { BackgroundBeams } from './BackgroundBeams.js';
import { BackgroundBubbles } from './BackgroundBubbles.js';
import { BackgroundJupiter } from './BackgroundJupiter.js';
import { BackgroundMoon } from './BackgroundMoon.js';

// --- TYPES ---

export interface BackgroundProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  /**
   * The visual variant of the background.
   * - 'bubbles': Floating, gooey bubbles.
   * - 'beams': Animated gradient beams.
   * - 'jupiter': Gaseous, banded planet texture.
   * - 'moon': Rocky, cratered surface texture.
   * @default 'bubbles'
   */
  variant?: 'bubbles' | 'beams' | 'jupiter' | 'moon';
  colors?: string[];
  animationSpeed?: number;
}

// --- MAIN COMPONENT ---

export const Background = ({
  className,
  style,
  children,
  variant = 'bubbles',
  colors,
  animationSpeed = 15,
}: BackgroundProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const hasChildren = Boolean(children);

  return (
    <div
      ref={containerRef}
      className={clsx(
        backgroundRecipe({ position: hasChildren ? 'relative' : 'absolute' }),
        className
      )}
      style={{
        ...style,
        backgroundColor: style?.backgroundColor,
      }}
    >
      {variant === 'bubbles' && (
        <BackgroundBubbles
          containerRef={containerRef}
          colors={colors}
          animationSpeed={animationSpeed}
        />
      )}

      {variant === 'beams' && (
        <BackgroundBeams
          color={colors?.[0] ?? '#FF0000'}
          background={style?.backgroundColor}
        />
      )}

      {variant === 'jupiter' && <BackgroundJupiter />}

      {variant === 'moon' && <BackgroundMoon />}

      {/* Content */}
      {hasChildren && <div className={contentContainer}>{children}</div>}
    </div>
  );
};
