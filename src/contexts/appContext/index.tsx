import React, { useState, createContext, useLayoutEffect } from 'react';

import MainHero from '../../components/MainHero';

type AppContextType = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const appContext = createContext<AppContextType>({
  isDarkTheme: false,
  setIsDarkTheme: () => { },
});

const AppContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  document.documentElement.className = !isDarkTheme ? 'dark' : 'light';

  useLayoutEffect(() => {
    const handleColorTheme = (e: MediaQueryListEvent) => {
      e.matches ? setIsDarkTheme(true) : setIsDarkTheme(false);
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleColorTheme);
  }, []);

  const value = {
    isDarkTheme,
    setIsDarkTheme
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}

export default AppContextProvider;