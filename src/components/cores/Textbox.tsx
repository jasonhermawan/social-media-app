import { Textarea, TextareaProps } from '@mantine/core';
import React from 'react';

export interface TextboxProps extends TextareaProps {
  name: string;
  label?: string;
}

const Textbox: React.FC<TextboxProps> = ({ name, label, error, ...props }) => {
  return (
    <Textarea
      label={label}
      w='100%'
      styles={{
        label: {
          marginBottom: '6px',
        },
        error: {
          marginTop: '7px',
        },
      }}
      name={name}
      error={error}
      {...props}
    />
  );
};

export default Textbox;
