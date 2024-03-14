import { Box } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const BoxContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      bg='white'
      p='20px'
      style={{ borderRadius: '10px', border: 'solid 1px rgba(0, 0, 0, 0.1)' }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
