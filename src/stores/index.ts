import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './auth';

export const STORAGE_KEY = 'user-storage';

// Note: Do update the type whenever new slice are added
export type GlobalStore = AuthSlice;

export const useStore = create<
  GlobalStore,
  [
    [
      'zustand/persist',
      Pick<GlobalStore, 'accessToken' | 'email' | 'name' | 'username'>,
    ],
  ]
>(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        email: state.email,
        name: state.name,
        username: state.username,
      }),
    },
  ),
);
