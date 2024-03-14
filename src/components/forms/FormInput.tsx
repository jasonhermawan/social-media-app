import { useField, useFormikContext } from 'formik';
import { Input, InputProps } from '../cores/Input';
import { FC } from 'react';

export interface FormInputProps extends InputProps {}

export const FormInput: FC<FormInputProps> = ({ name, ...props }) => {
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
    <Input
      name={name}
      value={field.value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur(name)}
      error={error}
      {...props}
    />
  );
};
