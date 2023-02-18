import React, { useContext, useState } from "react";

import { appContext } from "../../contexts/appContext";

import "./MainHero.scss"

type MainHeroType = {};

const MainHero: React.FC<MainHeroType> = (props) => {
  const { setIsDarkTheme, isDarkTheme } = useContext(appContext)
  const icon = !isDarkTheme ? "icon-sun" : "icon-moon";

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <header className="bg-hero-image">
      <h1> Todo</h1>

      <img src={`/icons/${icon}.svg`} alt="icon sun" onClick={handleClick} />
    </header>
  )
}

export default MainHero;