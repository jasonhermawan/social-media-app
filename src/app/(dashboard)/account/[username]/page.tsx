'use client';
import Account from '@/features/account';
import React from 'react';

const AccountPage = ({ params }: { params: { username: string } }) => {
  return <Account username={params.username} />;
};

export default AccountPage;
