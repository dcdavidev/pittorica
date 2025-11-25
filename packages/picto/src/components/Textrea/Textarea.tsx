import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '../../styles/theme.css.js';
import { Box, BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import { textareaRecipe } from './textarea.css.js';

type TextareaVariants = RecipeVariants<typeof textareaRecipe>;

export type TextareaProps = Omit<BoxProps, 'as' | 'children'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    hasError?: boolean;
    helpText?: string;
    variant?: NonNullable<TextareaVariants>['variant'];
    size?: NonNullable<TextareaVariants>['size'];
    disabled?: NonNullable<TextareaVariants>['disabled'];
  };

export const Textarea = ({
  label,
  hasError = false,
  helpText,
  className,
  style,
  onChange,
  value,
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  ...props
}: TextareaProps): React.JSX.Element => {
  const inputId = props.id || useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [internalValue, setInternalValue] = useState(props.defaultValue || '');
  const controlledValue = value === undefined ? internalValue : value;

  const recipeClass = textareaRecipe({
    variant,
    size,
    error: hasError,
    disabled: disabled || props.readOnly,
  });

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Fix Irregular Whitespace Errors on these lines:
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
        className={clsx(recipeClass, className)}
        style={{ ...errorStyle, ...style }}
        value={controlledValue}
        onChange={handleInputChange}
        aria-invalid={hasError}
        disabled={disabled}
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
