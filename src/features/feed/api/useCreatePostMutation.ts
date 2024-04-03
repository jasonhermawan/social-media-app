import { useStore } from '@/stores';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface ICreatePostArgs {
  caption: string;
  file: any;
}

export const useCreatePostMutation = (
  options?: UseMutationOptions<any, AxiosError, ICreatePostArgs>,
) => {
  const { accessToken } = useStore();
  return useMutation({
    mutationFn: async (payload: ICreatePostArgs) => {
      const formData = new FormData();
      if (payload.file) {
        formData.append('file', payload.file[0]);
      }
      formData.append('caption', payload.caption);
      console.log(payload.caption, payload.file);

      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}post`,
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
