import React, { useId } from 'react';

import clsx from 'clsx';

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

const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-checkbox"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 11l3 3l8 -8" />
    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
  </svg>
);

const UncheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-square"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-square-minus"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
  </svg>
);

const DisabledIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-square-off"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412a2 2 0 0 1 -1.416 .588h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .586 -1.414" />
    <path d="M3 3l18 18" />
  </svg>
);

export const Checkbox = ({
  label,
  hasError = false,
  className,
  checked = false,
  indeterminate = false,
  disabled = false,
  id,
  ...props
}: CheckboxProps): React.JSX.Element => {
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
    if (indeterminate) {
      return <IndeterminateIcon />;
    }
    if (disabled && !checked) {
      return <DisabledIcon />;
    }
    if (checked) {
      return <CheckedIcon />;
    }
    return <UncheckedIcon />;
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
