import { StateCreator } from 'zustand';

export type AuthSlice = {
  accessToken: string | null;
  email: string | null;
  name: string | null;
  username: string | null;
  onAuthSuccess: ({
    accessToken,
    email,
    name,
    username,
  }: {
    accessToken: string;
    email: string;
    name: string;
    username: string;
  }) => void;
  clearAuth: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
) => ({
  accessToken: null,
  email: null,
  name: null,
  username: null,
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  clearAuth: () =>
    set(() => ({
      accessToken: null,
      email: null,
      name: null,
      username: null,
    })),
});
