import React from 'react';

import clsx from 'clsx';

// We reuse Text because it already handles the 'body' recipe
import { Text, type TextProps } from '../Text/Text.js';

/**
 * Props for the Paragraph component.
 * We omit 'as' because it must always be a '<p>'.
 * We omit 'variant' because a Paragraph is strictly 'body' text by definition.
 */
export type ParagraphProps = Omit<TextProps, 'as' | 'variant'> & {
  /**
   * The size of the paragraph text.
   * @default 'medium'
   */
  size?: TextProps['size'];
};

/**
 * A semantic component for rendering paragraphs (<p>).
 * It automatically uses the 'body' typography variant.
 *
 * @param {ParagraphProps} props Component props.
 * @returns {React.JSX.Element} The rendered paragraph.
 */
export const Paragraph = ({
  size = 'medium',
  className,
  children,
  ...props
}: ParagraphProps): React.JSX.Element => {
  return (
    <Text
      as="p" // Semantic lock: always a <p>
      variant="body"
      size={size}
      className={clsx('picto-paragraph', className)}
      {...props}
    >
      {children}
    </Text>
  );
};
