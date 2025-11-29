import React, { useId } from 'react';

import clsx from 'clsx';

import { ToggleLeftIcon } from '../../icons/ToggleLeftIcon.js';
import { ToggleRightIcon } from '../../icons/ToggleRightIcon.js';
import { Box, type BoxProps } from '../Box/Box.js';
import { Text } from '../Text/Text.js';
import {
  switchContainer,
  switchHiddenInput,
  switchIndicatorRecipe,
  switchLabelStyle,
} from './switch.css.js';

export type SwitchContainerProps = Omit<
  BoxProps,
  'as' | 'children' | 'onChange' | 'onSelect' | 'onError'
>;

export type SwitchProps = SwitchContainerProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    label?: React.ReactNode;
    hasError?: boolean;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
  };

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    label,
    hasError = false,
    className,
    checked = false,
    disabled = false,
    id,
    onChange,
    value,
    defaultValue,
    name,
    form,
    ...containerProps
  } = props;

  const inputId = id || useId();

  const indicatorClass = switchIndicatorRecipe({
    error: hasError,
    disabled: disabled,
  });

  const renderIcon = () => {
    const iconProps = { width: '2rem' };

    if (checked) {
      return <ToggleRightIcon {...iconProps} />;
    }
    return <ToggleLeftIcon {...iconProps} />;
  };

  return (
    <Box
      as="label"
      htmlFor={inputId}
      className={clsx(switchContainer, className)}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      {...containerProps}
    >
      <input
        type="checkbox"
        role="switch"
        id={inputId}
        className={switchHiddenInput}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        name={name}
        form={form}
      />

      <div className={indicatorClass} aria-hidden="true">
        {renderIcon()}
      </div>

      {label && (
        <Text as="span" className={switchLabelStyle}>
          {label}
        </Text>
      )}
    </Box>
  );
};
