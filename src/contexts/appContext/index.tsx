import React, { useState, createContext, useLayoutEffect } from 'react';

import MainHero from '../../components/MainHero';

export const appContext = createContext({} as App.AppContext);

const AppContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [todos, setTodos] = useState(new Set<App.Todo>());

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
    setIsDarkTheme,
    todos,
    setTodos,
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}

export default AppContextProvider;