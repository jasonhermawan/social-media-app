'use client';
import { useStore } from '@/stores';
import { LoadingOverlay } from '@mantine/core';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { accessToken } = useStore();
  const pathname = usePathname();
  const router = useRouter();

  // FIXME
  const userStorage = localStorage.getItem('user-storage');
  const parseUserStorage = JSON.parse(userStorage || '');
  const token = parseUserStorage.state.accessToken;

  const checkToken = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}auth/verify-token`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (result.data) {
        if (pathname.includes('login') || pathname.includes('register')) {
          router.replace('/dashboard');
        }
      } else {
        if (!pathname.includes('register')) {
          router.replace('/login');
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useLayoutEffect(() => {
    checkToken();
  }, [pathname]);

  if (loading) {
    return (
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ type: 'bars' }}
      />
    );
  }
  return <>{children}</>;
};

export default AuthProvider;
