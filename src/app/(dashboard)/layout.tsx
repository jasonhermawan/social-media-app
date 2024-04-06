'use client';
import NavbarMenu from '@/components/NavbarMenu';
import Sidebar from '@/components/sidebar';
import AccountSuggestion from '@/components/sidebar/AccountSuggestion';
import { AppShell, Box, Burger, Flex, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, PropsWithChildren, useEffect } from 'react';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      style={{ boxShadow: 'none' }}
    >
      <AppShell.Header style={{ borderBottom: 'solid 1px rgb(239, 239, 239)' }}>
        <Group h='100%' px='md' justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Link href='/home'>
            <Image
              src='/images/connectify-logo.png'
              alt='logo'
              style={{ height: '30px' }}
            />
          </Link>
          <NavbarMenu />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        px='md'
        py='xl'
        style={{ overflowY: 'scroll', scrollbarWidth: 'none', border: 'none' }}
      >
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main pb='100px'>
        {pathname.includes('home') ? (
          <Flex px={{ base: 'md', md: 'xl' }} pt='xl' gap='xl'>
            <Box w={{ base: '100%', lg: '55%' }}>{children}</Box>
            <Box w='30%' visibleFrom='lg'>
              <Box pos='sticky' top={95}>
                <AccountSuggestion />
              </Box>
            </Box>
          </Flex>
        ) : (
          <Box px={{ base: 'md', md: 'xl' }} pt='xl'>
            {children}
          </Box>
        )}
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
