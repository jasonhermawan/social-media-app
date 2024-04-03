'use client';
import AccountSuggestion from '@/components/sidebar/AccountSuggestion';
import { AppShell, Box, Burger, Flex, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
// import { Sidebar } from '~/components/sidebar/Sidebar';
// import NavbarMenu from '~/features/dashboard/components/NavbarMenu';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      style={{ boxShadow: 'none' }}
    >
      <AppShell.Header style={{ borderBottom: 'solid 1px rgb(239, 239, 239)' }}>
        <Group h='100%' px='md' justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Link href='/dashboard'>
            <Image
              src='/images/connectify-logo.png'
              alt='logo'
              style={{ height: '30px' }}
            />
          </Link>
          {/* <NavbarMenu /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p='md'
        style={{ overflowY: 'scroll', scrollbarWidth: 'none', border: 'none' }}
      >
        {/* <Sidebar /> */}
      </AppShell.Navbar>
      <AppShell.Main pb='100px'>
        <Flex px='xl' pt='xl' gap='xl'>
          <Box w={{ base: '100%', lg: '55%' }}>{children}</Box>
          <Box w='30%' visibleFrom='lg'>
            <Box pos='sticky' top={95}>
              <AccountSuggestion />
            </Box>
          </Box>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
