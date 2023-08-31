import { useEffect, useLayoutEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import MainNav from './components/MainNav';
import TodosItemsContainer from './containers/TodosItemsContainer';
import useThemeStore from './zustand/useThemeStore';

import "./styles/main.scss";

function App() {
  const { setIsDarkTheme } = useThemeStore(state => state);

  useLayoutEffect(() => {
    setIsDarkTheme(window
      .matchMedia('(prefers-color-scheme: dark)').matches)
  }, []);

  useEffect(() => {
    const handleColorTheme = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsDarkTheme(true)
        return;
      }

      setIsDarkTheme(false);
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleColorTheme);
  }, []);

  return (
    <MainLayout>
      <MainNav />
      {/* <TodosItemsContainer /> */}
    </MainLayout>
  )
}

export default App;
