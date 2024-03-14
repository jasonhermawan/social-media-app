import React from 'react';
import Textbox, { TextboxProps } from '../cores/Textbox';
import { useField, useFormikContext } from 'formik';

export interface FormTextboxProps extends TextboxProps {}

const FormTextbox: React.FC<FormTextboxProps> = ({ name, ...props }) => {
  const { handleBlur } = useFormikContext();
  const [field, meta, helpers] = useField({ name });
  const { setValue } = helpers;

  let error = '';

  if (!meta.touched && meta.initialError) {
    if (meta.initialValue === meta.value) {
      error = meta.initialError;
    }
  }
  if (meta.touched && meta.error) {
    error = meta.error;
  }

  return (
    <Textbox
      name={name}
      value={field.value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur(name)}
      error={error}
      {...props}
    />
  );
};

export default FormTextbox;
