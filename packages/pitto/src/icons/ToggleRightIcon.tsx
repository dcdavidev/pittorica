import { IconToggleRight } from '@tabler/icons-react';

import type { IconProps } from './types.js';

export const ToggleRightIcon: React.FC<IconProps> = ({
  width = '24',
  fillColor = 'none',
  strokeColor = 'currentColor',
  strokeWidth = '2',
  ...props
}) => (
  <IconToggleRight
    width={width}
    height={width}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    {...(props as React.ComponentProps<typeof IconToggleRight>)}
  />
);
