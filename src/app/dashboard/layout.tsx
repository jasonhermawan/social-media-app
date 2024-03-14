'use client';
import Header from '@/components/header';
import AccountSuggestion from '@/components/sidebar/AccountSuggestion';
import ProfileSidebar from '@/components/sidebar/ProfileSidebar';
import { Box, Flex } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Flex className='layout' mt='20px'>
        <Box>
          <Box
            miw={{ base: '250px', md: '340px' }}
            visibleFrom='sm'
            pos='sticky'
            top='20px'
          >
            <ProfileSidebar />
          </Box>
        </Box>
        <Box w={{ base: '100%', lg: '65%' }} px={{ base: '0px', sm: '20px' }}>
          {children}
        </Box>
        <Box w='35%' visibleFrom='lg'>
          <Box pos='sticky' top='20px'>
            <AccountSuggestion />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
