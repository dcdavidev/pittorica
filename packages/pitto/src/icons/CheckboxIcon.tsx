import { IconCheckbox } from '@tabler/icons-react';

import type { IconProps } from './types.js';

export const CheckboxIcon: React.FC<IconProps> = ({
  width = '24',
  fillColor = 'none',
  strokeColor = 'currentColor',
  strokeWidth = '2',
  ...props
}) => (
  <IconCheckbox
    width={width}
    height={width}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    {...(props as React.ComponentProps<typeof IconCheckbox>)}
  />
);
