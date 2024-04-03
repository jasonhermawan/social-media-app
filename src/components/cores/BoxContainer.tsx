import { Box } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const BoxContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      bg='white'
      p='20px'
      style={{ borderRadius: '10px', boxShadow: '0 0 5px rgb(238, 238, 238)'}}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
