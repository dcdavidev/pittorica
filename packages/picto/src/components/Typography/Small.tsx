import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface SmallProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Small: React.FC<SmallProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'small';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      style={{
        display: 'inline',
        color: 'inherit',
        fontSize: 'smaller',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
