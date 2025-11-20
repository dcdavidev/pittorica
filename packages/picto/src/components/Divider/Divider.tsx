import React, { useId } from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { Box, BoxProps } from '../Box/Box.js';
import { dividerRecipe } from './divider.css.js';

const SVG_HEIGHT = 16;
const CENTER_Y = SVG_HEIGHT / 2;

const PATTERNS = {
  wave: {
    d: `M0 ${CENTER_Y} Q6 0 12 ${CENTER_Y} T24 ${CENTER_Y}`,
    w: 24,
  },
  zigzag: {
    d: `M0 ${CENTER_Y} L5 2 L15 14 L20 ${CENTER_Y}`,
    w: 20,
  },
  square: {
    d: `M0 ${CENTER_Y} V4 H12 V12 H24 V${CENTER_Y}`,
    w: 24,
  },
  scallop: {
    d: `M0 12 Q10 0 20 12`,
    w: 20,
  },
  dashed: {
    d: `M0 ${CENTER_Y} H8`,
    w: 16,
  },
  double: {
    d: `M0 6 H100 M0 10 H100`,
    w: 100,
  },
  cross: {
    d: 'M4 4 L12 12 M12 4 L4 12',
    w: 16,
  },
  dots: {
    d: `M0 ${CENTER_Y} H0.1`,
    w: 16,
  },
};

type DividerVariants = RecipeVariants<typeof dividerRecipe>;

export type DividerProps = Omit<BoxProps, 'as' | 'children'> & {
  /**
   * The visual style of the divider.
   * @default 'solid'
   */
  variant?: NonNullable<DividerVariants>['variant'];

  /**
   * Orientation of the divider.
   * Note: 'wave', 'zigzag', etc., are currently optimized for horizontal use.
   * @default 'horizontal'
   */
  orientation?: NonNullable<DividerVariants>['orientation'];

  /**
   * Thickness of the line (only applies to 'solid' variant).
   */
  thickness?: string | number;
};

/**
 * A versatile separator component supporting solid lines and SVG patterns.
 *
 * @param {DividerProps} props Component props.
 * @returns {React.JSX.Element} The rendered divider.
 */
export const Divider = ({
  variant = 'solid',
  orientation = 'horizontal',
  color = 'neutrals-light',
  thickness = '1px',
  className,
  style,
  ...props
}: DividerProps): React.JSX.Element => {
  const uniqueId = useId(); // React 18 hook for stable IDs
  const recipeClass = dividerRecipe({ variant, orientation });
  const isSvgVariant = variant !== 'solid' && variant in PATTERNS;

  // Case 1: SVG Pattern Divider
  if (isSvgVariant) {
    const patternId = `divider-${variant}-${uniqueId}`;
    const { d, w } = PATTERNS[variant];

    const lineCap =
      variant === 'dots' || variant === 'scallop' || variant === 'wave'
        ? 'round'
        : 'square';
    const strokeWidth = variant === 'dots' ? '3' : '1.5';

    return (
      <Box
        className={clsx(recipeClass, className)}
        color={color} // Sprinkles applies the color to the text (currentColor)
        {...props}
      >
        <svg
          width="100%"
          height={SVG_HEIGHT}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // Using explicit styling to ensure SVG behaves as a block
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
                stroke="currentColor" // Inherits color from Box
                strokeWidth={strokeWidth} // Slightly thicker for better visibility
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

  // Case 2: Standard Solid Divider
  const isVertical = orientation === 'vertical';

  return (
    <Box
      as={isVertical ? 'div' : 'hr'}
      backgroundColor={color} // Solid lines use background color
      className={clsx(recipeClass, className)}
      style={{
        // Override height/width based on thickness prop if provided
        ...(isVertical ? { width: thickness } : { height: thickness }),
        ...style,
      }}
      {...props}
    />
  );
};
