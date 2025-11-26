import { clsx } from 'clsx';

import { type ElevationPin } from '../../styles/elevation.css.js';
import { Box, type BoxProps } from '../Box/Box.js';
import { surfaceRecipe } from './surface.css.js';

export const SURFACE_SHAPES = [
  'none',
  'square',
  'rounded',
  'arch',
  'pill',
] as const;

export type SurfaceShapeType = (typeof SURFACE_SHAPES)[number];

export interface SurfaceProps
  extends Omit<BoxProps, 'as' | 'backgroundColor' | 'color'> {
  children?: React.ReactNode;
  elevation?: ElevationPin;
  shape?: SurfaceShapeType;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  elevation = 100,
  shape = 'rounded',
  className,
  ...props
}: SurfaceProps) => {
  const elevationClass = surfaceRecipe({ elevation, shape });

  return (
    <Box as="div" className={clsx(className, elevationClass)} {...props}>
      {children}
    </Box>
  );
};
