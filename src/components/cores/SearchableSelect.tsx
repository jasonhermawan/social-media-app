import { Select, SelectProps } from '@mantine/core';
import React from 'react';

export interface SearchableSelectProps extends SelectProps {
  name: string;
  label?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  name,
  label,
  error,
  ...props
}) => {
  return (
    <Select
      searchable
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

export default SearchableSelect;
