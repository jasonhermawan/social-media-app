import { useStore } from '@/stores';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface ILoginArgs {
  email: string;
  password: string;
}

export const useLoginMutation = (
  options?: UseMutationOptions<any, AxiosError, ILoginArgs>,
) => {
  const { onAuthSuccess } = useStore();
  const router = useRouter();
  return useMutation({
    mutationFn: async ({ email, password }: ILoginArgs): Promise<any> => {
      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}auth/login`,
        {
          email,
          password,
        },
      );
    },
    ...options,
    onSuccess(data) {
      const { user } = data.data;
      onAuthSuccess({
        accessToken: user.token,
        email: user.email,
        name: user.name,
        username: user.username,
      });
      router.push('/home');
    },
    onError() {
      toast.error('Login failed');
    },
  });
};
