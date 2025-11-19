import React from 'react';

import clsx from 'clsx';

import { vars } from '../../style/vars.css.js';

export type DividerColor = keyof typeof vars.color | string;

export type DividerSpace = 'normal' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const DIVIDER_VARIANT = ['wave', 'zigzag', 'dashed', 'double'] as const;
export type DividerVariant = (typeof DIVIDER_VARIANT)[number] | undefined;

export interface DividerProps {
  color?: DividerColor;
  variant?: DividerVariant;
  space?: DividerSpace;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  color,
  variant,
  space = 'md',
  className = '',
}) => {
  const classes = clsx(className);

  const spaceValue = space === 'normal' ? 'md' : space;
  const paddingStyle = {
    paddingTop: vars.space[spaceValue],
    paddingBottom: vars.space[spaceValue],
  };

  let colorValue: string | undefined;
  if (color) {
    colorValue =
      typeof color === 'string' && color in vars.color
        ? vars.color[color as keyof typeof vars.color]
        : color;
  }

  const hrStyle: React.CSSProperties = {};
  if (colorValue && !variant) {
    hrStyle.borderTopColor = colorValue;
  }

  const patternId = `divider-${variant}-${Math.random().toString(36).slice(2, 11)}`;

  if (variant) {
    let pathD: string;
    switch (variant) {
      case 'wave': {
        pathD =
          'M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0';
        break;
      }
      case 'zigzag': {
        pathD = 'M0 6 L15 0 L30 6 L46 0 L61 6 L76 0 L91 6';
        break;
      }
      case 'dashed': {
        pathD = 'M0 4 L10 4 M22 4 L32 4 M44 4 L54 4 M66 4 L76 4';
        break;
      }
      case 'double': {
        pathD = 'M0 2 L91 2 M0 7 L91 7';
        break;
      }
      default: {
        pathD = '';
      }
    }
    return (
      <div style={paddingStyle}>
        <svg
          width="100%"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
        >
          <pattern
            id={patternId}
            width="91"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d={pathD}
              stroke={colorValue || 'currentColor'}
              strokeLinecap="square"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  }

  return (
    <div style={paddingStyle}>
      <hr className={classes} style={hrStyle} />
    </div>
  );
};
