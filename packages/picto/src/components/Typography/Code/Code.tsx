import React, { type ElementType } from 'react';

import clsx from 'clsx';

export interface CodeProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Code: React.FC<CodeProps> = ({
  as,
  children,
  className,
  style,
  ...rest
}) => {
  const Tag: ElementType = as || 'code';

  const classes = clsx(className);

  return (
    <Tag className={classes} style={{ display: 'inline', ...style }} {...rest}>
      {children}
    </Tag>
  );
};
