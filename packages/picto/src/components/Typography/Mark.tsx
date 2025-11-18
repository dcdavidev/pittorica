import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface MarkProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Mark: React.FC<MarkProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'mark';

  const classes = clsx(className);

  return (
    <Tag
      className={classes}
      style={{
        display: 'inline',
        backgroundColor: '#ffff00', // Typical mark background
        color: '#000000', // Black text
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
