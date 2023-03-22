import React, { useState, createContext, useLayoutEffect, useReducer } from 'react';
import { appReducer, appState } from '../AppReducer';

export const appContext = createContext({} as App.AppContext);

const AppContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [state, dispatch] = useReducer(appReducer, appState)

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
    dispatch,
    isDarkTheme,
    setIsDarkTheme,
    state,
  }

  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}

export default AppContextProvider;