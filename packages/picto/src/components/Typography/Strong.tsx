import React, { type ElementType } from 'react';

import clsx from 'clsx';

import { ColorToken } from '../../types/colors.js';
import { FontWeight } from '../../types/typography.js';
import { getColorClass, getWeightClass } from '../Typography/helpers.js';

export interface StrongProps {
  as?: ElementType;
  weight?: FontWeight;
  color?: string | ColorToken;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Strong: React.FC<StrongProps> = ({
  as,
  weight = 'bold',
  color,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'strong';

  const weightClass = getWeightClass(weight);
  const colorClass = getColorClass(color);

  const classes = clsx(weightClass, colorClass, className);

  return (
    <Tag className={classes} style={{ display: 'inline', ...style }} {...rest}>
      {children}
    </Tag>
  );
};
