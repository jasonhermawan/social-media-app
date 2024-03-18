'use client';
import { Avatar, Box, Flex } from '@mantine/core';
import React from 'react';
import { Input } from '../cores/Input';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../../../public/images/connectify-logo.png'
import Image from 'next/image';

const Header = () => {
  return (
    <Box bg='white' style={{ borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
      <Flex align='center' py='15px' justify='space-between' className='layout'>
        <Flex align='center' gap='50px' w='40%'>
          <Image src={Logo} alt='Connectify Logo' style={{height: '30px', width: 'auto'}} />
          <Input
            leftSection={<IconSearch size='16px' />}
            name='search-input'
            placeholder='Search'
          />
        </Flex>
        <Flex align='center' gap='20px' justify='end'>
          <Avatar />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
