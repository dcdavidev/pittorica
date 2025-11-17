import React from 'react';

import clsx from 'clsx';

import BgBubbles from '../BgBubbles/BgBubbles';
import { shapeClassMap } from '../types/shapes';

export type BackgroundConfig =
  | false
  | { variant: 'image'; url: string }
  | {
      variant: 'bubbles';
      colors?: string[];
    }
  | {
      variant: 'color';
      color:
        | string
        | 'primary'
        | 'secondary'
        | 'tonal'
        | 'error'
        | 'success'
        | 'info'
        | 'warning';
    };

import type { PictoShape } from '../types/shapes';

export interface HeroProps extends React.PropsWithChildren {
  contained?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'screen';
  background?: BackgroundConfig;
  shape?: PictoShape;
  className?: string;
  style?: React.CSSProperties;
}

const SIZE_SPACING_MAP: Record<NonNullable<HeroProps['size']>, string> = {
  sm: 'var(--space-2, 8px)',
  md: 'var(--space-4, 16px)',
  lg: 'var(--space-6, 24px)',
  xl: 'var(--space-8, 32px)',
  xxl: 'var(--space-10, 40px)',
  screen: '0',
};

function isBackgroundConfig(
  bg: BackgroundConfig
): bg is Exclude<BackgroundConfig, false> {
  return bg !== false;
}

export function Hero({
  children,
  contained = false,
  size = 'lg',
  background = false,
  shape, // Updated to use PictoShape type
  className = '',
  style = {},
}: HeroProps): React.ReactElement {
  const spacing = SIZE_SPACING_MAP[size];

  const semanticColorVars: Record<string, string> = {
    primary: 'var(--picto-primary)',
    secondary: 'var(--picto-secondary)',
    tonal: 'var(--picto-tonal)',
    error: 'var(--picto-error)',
    success: 'var(--picto-success)',
    info: 'var(--picto-info)',
    warning: 'var(--picto-warning)',
  };

  let backgroundColor = 'transparent';
  if (isBackgroundConfig(background) && background.variant === 'color') {
    const color = background.color;
    backgroundColor =
      typeof color === 'string' && semanticColorVars[color]
        ? semanticColorVars[color]
        : color;
  }

  const baseStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage:
      isBackgroundConfig(background) && background.variant === 'image'
        ? `url(${background.url})`
        : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: size === 'screen' ? '100vh' : undefined,
    display: size === 'screen' ? 'flex' : undefined,
    flexDirection: size === 'screen' ? 'column' : undefined,
    justifyContent: size === 'screen' ? 'center' : undefined,
    padding: size === 'screen' ? '0' : spacing,
    width: '100%',
    position: 'relative',
    ...style,
  };

  const content = contained ? (
    <div className="container mx-auto px-4">{children}</div>
  ) : (
    children
  );

  if (
    isBackgroundConfig(background) &&
    background.variant === 'bubbles' &&
    size === 'screen'
  ) {
    return (
      <BgBubbles colors={background.colors} style={{ ...style }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {content}
        </div>
      </BgBubbles>
    );
  }

  return (
    <div
      className={clsx(
        'pittorica-hero',
        shape ? shapeClassMap[shape] : '',
        className
      )}
      style={baseStyle}
    >
      {content}
    </div>
  );
}
