import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  setTheme: (theme) => {
    set({ theme })
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      theme === 'dark'
        ? root.classList.add('dark')
        : root.classList.remove('dark')
    }
  },
}))