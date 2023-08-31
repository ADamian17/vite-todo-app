import React from 'react'

import MainHero from '../../components/MainHero';

import "./MainLayout.scss";

type MainLayoutType = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutType> = ({ children }) => (
  <main className='mainLayout'>
    <MainHero />

    <section className='main-content'>
      {children}
    </section>
  </main>

);

export default MainLayout;