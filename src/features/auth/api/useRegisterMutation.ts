import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface IRegisterArgs {
  email: string;
  username: string;
  password: string;
}

export const useRegisterMutation = (
  options?: UseMutationOptions<any, AxiosError, IRegisterArgs>,
) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({ email, username, password }: IRegisterArgs) => {
      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}auth/register`,
        {
          email,
          username,
          password,
        },
      );
    },
    ...options,
    onSuccess() {
      router.push('/login');
    },
    onError() {
      toast.error('Register failed');
    },
  });
};
