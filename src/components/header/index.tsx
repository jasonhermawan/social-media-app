'use client';
import { Avatar, Box, Flex, Text } from '@mantine/core';
import React from 'react';
import { Input } from '../cores/Input';
import { IconSearch } from '@tabler/icons-react';

const Header = () => {
  return (
    <Box bg='white' style={{ borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
      <Flex align='center' py='15px' className='layout'>
        <Box w='30%'>
          <Text>Logo</Text>
        </Box>
        <Box w='40%'>
          <Input
            leftSection={<IconSearch size='16px' />}
            name='search-input'
            placeholder='Search'
          />
        </Box>
        <Flex align='center' gap='20px' w='30%' justify='end'>
          <Avatar />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
