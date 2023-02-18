import { useContext, useLayoutEffect, useState } from 'react'

import AppContextProvider, { appContext } from './contexts/appContext';
import MainHero from './components/MainHero';

import "./styles/main.scss";

function App() {
  return (
    <AppContextProvider>
      <MainHero />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint, atque natus vel dolores totam obcaecati repellendus ipsa, voluptate ratione omnis consequatur ab incidunt, illo eos quibusdam inventore culpa deleniti?</p>
    </AppContextProvider>
  )
}

export default App;
