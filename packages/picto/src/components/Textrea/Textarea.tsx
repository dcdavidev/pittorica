import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { vars } from '../../styles/theme.css.js';
import { Box, BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import { textareaBase } from './textarea.css.js';

export type TextareaProps = Omit<BoxProps, 'as' | 'children'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /** Field label, displayed above the textarea. */
    label?: string;
    /** If true, the field is shown as error. */
    hasError?: boolean;
    /** Helper or error text below the field. */
    helpText?: string;
  };

export const Textarea = ({
  label,
  hasError = false,
  helpText,
  className,
  style,
  onChange,
  value,
  ...props
}: TextareaProps): React.JSX.Element => {
  const inputId = props.id || useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [internalValue, setInternalValue] = useState(props.defaultValue || '');

  const controlledValue = value === undefined ? internalValue : value;

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';

    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [controlledValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const errorStyle = hasError
    ? {
        borderColor: vars.colors.error[500],
        boxShadow: `0 0 0 1px ${vars.colors.error[500]}`,
      }
    : {};

  return (
    <Box as="div">
      {label && (
        <Text
          as="label"
          htmlFor={inputId}
          size="small"
          style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}
        >
          {label}
        </Text>
      )}
      <textarea
        id={inputId}
        ref={textareaRef}
        className={clsx(textareaBase, className)}
        style={{ ...errorStyle, ...style }}
        value={controlledValue}
        onChange={handleInputChange}
        {...props}
      />
      {helpText && (
        <Text
          size="small"
          style={{
            marginTop: '0.25rem',
            color: hasError ? vars.colors.error[500] : vars.colors.text,
          }}
        >
          {helpText}
        </Text>
      )}
    </Box>
  );
};
