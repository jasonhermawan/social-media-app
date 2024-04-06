import { useStore } from '@/stores';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface IUpdateProfilePictureArgs {
  picture: any;
}

export const useUpdateProfilePictureMutation = (
  options?: UseMutationOptions<any, AxiosError, IUpdateProfilePictureArgs>,
) => {
  const { accessToken } = useStore();
  return useMutation({
    mutationFn: async (payload: IUpdateProfilePictureArgs) => {
      const formData = new FormData();
      formData.append('file', payload.picture[0]);

      return await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}user/profile-picture`,
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
