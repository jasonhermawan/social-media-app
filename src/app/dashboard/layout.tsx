'use client';
import Header from '@/components/header';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar';
import { Box, Flex, Text } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Flex className='layout' mt='20px'>
        <Box w='20%'>
          <ProfileSidebar />
        </Box>
        <Box w='80%'>{children}</Box>
        <Box w='20%'>
          <Text>Who to follow</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
