import { useEffect, useLayoutEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import MainNav from './components/MainNav';
import TodosItemsContainer from './containers/TodosItemsContainer';
import useThemeStore from './zustand/useThemeStore';

import "./styles/main.scss";

function App() {
  const { isDarkTheme, setIsDarkTheme } = useThemeStore(state => state);

  useLayoutEffect(() => {
    setIsDarkTheme()
  }, []);

  return (
    <MainLayout>
      <MainNav />
      <TodosItemsContainer />
    </MainLayout>
  )
}

export default App;
