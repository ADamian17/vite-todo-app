import React, { useContext, useState } from "react";

import useThemeStore from "../../zustand/useThemeStore";

import "./MainHero.scss"

const MainNav: React.FC = (props) => {
  const { icon, setIsDarkTheme, isDarkTheme } = useThemeStore(state => state);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <nav className="nav">
      <svg className="headline" onClick={handleClick}>
        <use href={`/icons/main-icons.svg#todo`}></use>
      </svg>

      <svg className="icon" onClick={handleClick}>
        <use href={`/icons/main-icons.svg#${icon}`}></use>
      </svg>
    </nav>
  )
}

export default MainNav;