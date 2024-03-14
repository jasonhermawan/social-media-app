import {
  TextInput,
  Input as MantineInput,
  TextInputProps,
} from '@mantine/core';
import React, { FC } from 'react';

export interface InputProps extends TextInputProps {
  name: string;
  label?: string;
}

export const Input: FC<InputProps> = ({ name, label, error, w, ...props }) => {
  return (
    <MantineInput.Wrapper
      label={label}
      w={w || '100%'}
      styles={{
        label: {
          marginBottom: '6px',
        },
        error: {
          marginTop: '7px',
        },
      }}
    >
      <TextInput variant='filled' name={name} {...props} error={error} />
    </MantineInput.Wrapper>
  );
};
