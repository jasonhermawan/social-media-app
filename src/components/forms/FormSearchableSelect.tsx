import React from 'react';
import SearchableSelect, {
  SearchableSelectProps,
} from '../cores/SearchableSelect';
import { useField, useFormikContext } from 'formik';

export interface FormSearchableSelectProps extends SearchableSelectProps {}

const FormSearchableSelect: React.FC<FormSearchableSelectProps> = ({
  name,
  ...props
}) => {
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

  const handleChange = (val: string | null) => {
    if (val) {
      setValue(val);
    }
  };

  return (
    <SearchableSelect
      data-test={`input-${name}`}
      name={name}
      value={field.value}
      onBlur={handleBlur(name)}
      error={error}
      onChange={handleChange}
      {...props}
    />
  );
};

export default FormSearchableSelect;
