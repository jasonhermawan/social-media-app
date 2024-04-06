import { useStore } from '@/stores';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCurrentAccountQuery = (
  options?: UseQueryOptions<unknown, unknown, any, unknown[]>,
) => {
  const {accessToken} = useStore()
  return useQuery({
    queryKey: ['account'],
    queryFn: async () => {
      const account = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}auth/verify-token`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        },
      );
      return account.data;
    },
    initialData: [],
    ...options,
  });
};

