import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetPostCommentsQuery = (
  queries?: IGetPostCommentsQuery,
  options?: UseQueryOptions<unknown, unknown, any, unknown[]>,
) => {
  return useQuery({
    queryKey: ['comments', queries],
    queryFn: async () => {
      const comments = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}post/comment`,
        {
          params: queries,
        },
      );
      return comments.data;
    },
    initialData: [],
    ...options,
  });
};
