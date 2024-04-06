import { useStore } from '@/stores';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface IUpdateProfileBannerArgs {
  banner: any;
}

export const useUpdateProfileBannerMutation = (
  options?: UseMutationOptions<any, AxiosError, IUpdateProfileBannerArgs>,
) => {
  const { accessToken } = useStore();
  return useMutation({
    mutationFn: async (payload: IUpdateProfileBannerArgs) => {
      const formData = new FormData();
      formData.append('file', payload.banner[0]);

      return await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}user/banner-picture`,
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
