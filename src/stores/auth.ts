import { StateCreator } from 'zustand';

export type AuthSlice = {
  accessToken: string | null;
  onAuthSuccess: ({ accessToken }: { accessToken: string }) => void;
  clearAuth: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
) => ({
  accessToken: null,
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  clearAuth: () =>
    set(() => ({
      accessToken: null,
    })),
});
