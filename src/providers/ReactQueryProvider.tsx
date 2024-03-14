'use client';
import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const ReactQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
