import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetPostsQuery = (
  queries?: IGetPostQuery,
  options?: UseQueryOptions<unknown, unknown, any, unknown[]>,
) => {
  return useQuery({
    queryKey: ['posts', queries],
    queryFn: async () => {
      const posts = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}post`,
        {
          params: queries,
        },
      );
      return posts.data;
    },
    initialData: [],
    ...options,
  });
};
