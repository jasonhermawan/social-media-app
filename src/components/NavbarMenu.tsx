'use client';
import { useStore } from '@/stores';
import { Flex, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';

const NavbarMenu = () => {
  const { clearAuth } = useStore();
  const router = useRouter();
  return (
    <Flex
      align='center'
      gap='10px'
      p='10px'
      style={{ cursor: 'pointer' }}
      onClick={() => {
        clearAuth();
        router.push('/login');
      }}
    >
      <BiLogOut size='20px' color='red' />
      <Text fw='600' color='red' visibleFrom='md'>
        Logout
      </Text>
    </Flex>
  );
};

export default NavbarMenu;
