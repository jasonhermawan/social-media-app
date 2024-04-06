import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUsersQuery = (
  queries?: IGetUserQuery,
  options?: UseQueryOptions<unknown, unknown, any, unknown[]>,
) => {
  return useQuery({
    queryKey: ['users', queries],
    queryFn: async () => {
      const users = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}user`,
        {
          params: queries,
        },
      );
      return users.data[0];
    },
    initialData: [],
    ...options,
  });
};
