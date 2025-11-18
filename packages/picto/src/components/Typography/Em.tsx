import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface EmProps {
  as?: ElementType;
  italic?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Em: React.FC<EmProps> = ({
  as,
  italic = true,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || (italic ? 'em' : 'i');

  const classes = clsx(italic && 'picto-text-italic', className);

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
