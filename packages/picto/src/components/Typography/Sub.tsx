import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface SubProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Sub: React.FC<SubProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'sub';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      style={{ display: 'inline', color: 'inherit', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
