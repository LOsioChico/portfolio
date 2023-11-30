import { create } from 'zustand';

interface UseShowProfileOnNavbarStore {
  showProfileOnNavbar: boolean;
  setShowProfileOnNavbar: (show: boolean) => void;
}

export const useShowProfileOnNavbarStore = create<UseShowProfileOnNavbarStore>(
  (set) => ({
    showProfileOnNavbar: false,
    setShowProfileOnNavbar: (show) => {
      set({ showProfileOnNavbar: show });
    },
  }),
);
