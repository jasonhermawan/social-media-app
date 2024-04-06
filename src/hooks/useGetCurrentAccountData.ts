import { useGetUsersQuery } from '@/features/account/api/useGetUsersQuery';
import { useGetCurrentAccountQuery } from './useGetCurrentAccountQuery';

export const useGetCurrentAccountData = () => {
  const userData = useGetCurrentAccountQuery();
  const { data: user } = useGetUsersQuery({
    email: userData.data.email,
  });
  return user;
};
