'use client';
import { useGetUsersQuery } from '@/features/account/api/useGetUsersQuery';
import { useGetCurrentAccountData } from '@/hooks/useGetCurrentAccountData';
import { useStore } from '@/stores';
import { Avatar, Box, Flex, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiCategory } from 'react-icons/bi';

const Sidebar = () => {
  const user = useGetCurrentAccountData();
  const router = useRouter();

  return (
    <Box>
      <Box
        p='15px'
        bg='#F8F8F8'
        style={{
          borderRadius: '10px',
          border: 'solid 1px #DADADA',
          cursor: 'pointer',
        }}
      >
        <Flex
          gap='10px'
          align='center'
          onClick={() => router.push(`/account/${user.username}`)}
        >
          <Avatar
            src={`${process.env.NEXT_PUBLIC_BASE_API_URL}user-profile-images/${user.picture}`}
          />
          <Box>
            <Text fw='600'>{user.name}</Text>
            <Text size='12px' color='gray'>
              @{user.username}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Stack>
        <Flex
          onClick={() => router.push('/home')}
          align='center'
          gap='20px'
          mt='40px'
          p='10px'
          style={{
            borderLeft: 'solid 3px gray',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          <BiCategory size='24px' color='gray' />
          <Text fw='600'>Feeds</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Sidebar;
