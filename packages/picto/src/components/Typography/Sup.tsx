import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface SupProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Sup: React.FC<SupProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'sup';

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
