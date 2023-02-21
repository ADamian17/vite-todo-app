import React, { useContext, useState } from "react";

import { appContext } from "../../contexts/appContext";

import "./MainHero.scss"

type MainHeroType = {};

const MainHero: React.FC<MainHeroType> = (props) => {
  const { setIsDarkTheme, isDarkTheme } = useContext(appContext)
  const icon = !isDarkTheme ? "sun" : "moon";

  const handleClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <>
      <header className="bg-hero-image">
      </header>
      <nav className="nav">
        <svg className="headline" onClick={handleClick}>
          <use href={`/icons/main-icons.svg#todo`}></use>
        </svg>

        <svg className="icon" onClick={handleClick}>
          <use href={`/icons/main-icons.svg#${icon}`}></use>
        </svg>
      </nav>
    </>
  )
}

export default MainHero;