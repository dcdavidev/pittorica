import React, { useId } from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { dividerRecipe } from './divider.css.js';

const SVG_HEIGHT = 16;
const CENTER_Y = SVG_HEIGHT / 2;

const PATTERNS = {
  wave: { d: `M0 ${CENTER_Y} Q6 0 12 ${CENTER_Y} T24 ${CENTER_Y}`, w: 24 },
  zigzag: { d: `M0 ${CENTER_Y} L5 2 L15 14 L20 ${CENTER_Y}`, w: 20 },
  square: { d: `M0 ${CENTER_Y} V4 H12 V12 H24 V${CENTER_Y}`, w: 24 },
  scallop: { d: `M0 12 Q10 0 20 12`, w: 20 },
  dashed: { d: `M0 ${CENTER_Y} H8`, w: 16 },
  double: { d: `M0 6 H100 M0 10 H100`, w: 100 },
  cross: { d: 'M4 4 L12 12 M12 4 L4 12', w: 16 },
  dots: { d: `M0 ${CENTER_Y} H0.1`, w: 16 },
};

type DividerVariants = RecipeVariants<typeof dividerRecipe>;

type MarginSize = BoxProps['padding'];

/**
 * Props for the Divider component.
 */
export type DividerProps = Omit<BoxProps, 'as' | 'children'> & {
  variant?: NonNullable<DividerVariants>['variant'];
  orientation?: NonNullable<DividerVariants>['orientation'];
  thickness?: string | number;

  /**
   * Spacing around the divider.
   * - Horizontal divider: adds top and bottom padding.
   * - Vertical divider: adds left and right padding.
   * @default 'none'
   */
  margins?: MarginSize;
};

export const Divider = ({
  variant = 'solid',
  orientation = 'horizontal',
  color = 'light',
  thickness = '1px',
  margins = 'none',
  className,
  style,
  ...props
}: DividerProps): React.JSX.Element => {
  const uniqueId = useId();
  const recipeClass = dividerRecipe({ variant, orientation });
  const isSvgVariant = variant !== 'solid' && variant in PATTERNS;
  const isVertical = orientation === 'vertical';
  const spacingProps: BoxProps = isVertical
    ? { paddingLeft: margins, paddingRight: margins }
    : { paddingTop: margins, paddingBottom: margins };

  if (isSvgVariant) {
    const patternId = `divider-${variant}-${uniqueId}`;
    const { d, w } = PATTERNS[variant as keyof typeof PATTERNS];

    const lineCap =
      variant === 'dots' || variant === 'scallop' || variant === 'wave'
        ? 'round'
        : 'square';
    const strokeWidth = variant === 'dots' ? '3' : '1.5';

    return (
      <Box
        className={clsx(recipeClass, className)}
        color={color}
        {...spacingProps}
        {...props}
      >
        <svg
          width="100%"
          height={SVG_HEIGHT}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <defs>
            <pattern
              id={patternId}
              width={w}
              height={SVG_HEIGHT}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={d}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap={lineCap}
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </Box>
    );
  }

  return (
    <Box
      as={isVertical ? 'div' : 'hr'}
      backgroundColor={color}
      className={clsx(recipeClass, className)}
      {...spacingProps}
      style={{
        ...(isVertical ? { width: thickness } : { height: thickness }),
        backgroundClip: 'content-box',
        boxSizing: 'content-box',
        ...style,
      }}
      {...props}
    />
  );
};
