import React, { useId } from 'react';

import clsx from 'clsx';

import { CheckboxIcon } from '../../icons/CheckboxIcon.js';
import { SquareIcon } from '../../icons/SquareIcon.js';
import { SquareMinusIcon } from '../../icons/SquareMinusIcon.js';
import { SquareOffIcon } from '../../icons/SquareOffIcon.js';
import { Box, type BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import {
  checkboxContainer,
  hiddenInput,
  indicatorRecipe,
  labelStyle,
} from './checkbox.css.js';

export type CheckboxContainerProps = Omit<
  BoxProps,
  'as' | 'children' | 'onChange' | 'onSelect' | 'onError'
>;

export type CheckboxProps = CheckboxContainerProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    label?: React.ReactNode;
    hasError?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  };

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  hasError = false,
  className,
  checked = false,
  indeterminate = false,
  disabled = false,
  id,
  ...props
}) => {
  const inputId = id || useId();

  const { onChange, value, defaultValue, name, form, ...containerProps } =
    props as CheckboxProps & {
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
      value?: string | readonly string[] | number;
      defaultValue?: string | readonly string[];
      name?: string;
      form?: string;
    };

  const indicatorClass = indicatorRecipe({
    error: hasError,
    disabled: disabled,
  });

  const renderIcon = () => {
    const iconProps = { strokeWidth: '2' };
    if (indeterminate) {
      return <SquareMinusIcon {...iconProps} />;
    }
    if (disabled && !checked) {
      return <SquareOffIcon {...iconProps} />;
    }
    if (checked) {
      return <CheckboxIcon {...iconProps} />;
    }
    return <SquareIcon {...iconProps} />;
  };

  return (
    <Box
      as="label"
      htmlFor={inputId}
      className={clsx(checkboxContainer, className)}
      {...containerProps}
    >
      <input
        type="checkbox"
        id={inputId}
        className={hiddenInput}
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        name={name}
        form={form}
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
      />

      <div className={indicatorClass} aria-hidden="true">
        {renderIcon()}
      </div>

      {label && (
        <Text as="span" className={labelStyle}>
          {label}
        </Text>
      )}
    </Box>
  );
};
