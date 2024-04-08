import { useStore } from '@/stores';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface ICreatePostCommentArgs {
  caption: string;
  file: any;
}

interface ICreatePostCommentParams {
  postid: string;
}

export const useCreatePostCommentMutation = (
  params: ICreatePostCommentParams,
  options?: UseMutationOptions<any, AxiosError, ICreatePostCommentArgs>,
) => {
  const { accessToken } = useStore();
  return useMutation({
    mutationFn: async (payload: ICreatePostCommentArgs) => {
      const formData = new FormData();
      if (payload.file) {
        formData.append('file', payload.file[0]);
      }
      formData.append('caption', payload.caption);

      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}post/comment/${params.postid}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    },
    ...options,
    onError(e: AxiosError<any>) {
      console.log(e);
    },
  });
};
