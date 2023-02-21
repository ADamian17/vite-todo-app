import React from 'react'

import "./MainLayout.scss";
import AppContextProvider from '../../contexts/appContext';

type MainLayoutType = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return (
    <AppContextProvider>
      <div className='mainLayout'>
        {children}
      </div>
    </AppContextProvider>
  );
}

export default MainLayout;