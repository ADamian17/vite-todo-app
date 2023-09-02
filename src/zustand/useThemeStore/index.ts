import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  DarkTheme,
  LightTheme,
  darkTheme,
  lightTheme,
} from '../../utils/constants/themes';

type ThemeState = LightTheme | DarkTheme;

type ThemeActions = {
  setIsDarkTheme: (isDark?: ThemeState['isDarkTheme']) => void;
};

const useThemeStore = create(
  persist<ThemeState & ThemeActions>(
    (set) => ({
      ...lightTheme,
      setIsDarkTheme: (isDark) => {
        if (isDark) {
          document.documentElement.className = 'dark';
          set(darkTheme);
          return;
        }

        document.documentElement.className = 'light';
        return set(lightTheme);
      },
    }),
    {
      name: 'app-theme',
    }
  )
);

export default useThemeStore;
