import { IconSquareOff } from '@tabler/icons-react';

import type { IconProps } from './types.js';

export const SquareOffIcon: React.FC<IconProps> = ({
  width = '24',
  fillColor = 'none',
  strokeColor = 'currentColor',
  strokeWidth = '2',
  ...props
}) => (
  <IconSquareOff
    width={width}
    height={width}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    {...(props as React.ComponentProps<typeof IconSquareOff>)}
  />
);
