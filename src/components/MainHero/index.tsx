import React, { useContext, useState } from "react";

import useThemeStore from "../../zustand/useThemeStore";
import { appContext } from "../../contexts/appContext";

import "./MainHero.scss"

type MainHeroType = {};

const MainHero: React.FC<MainHeroType> = (props) => {
  const { heroImage } = useThemeStore(state => state);

  return (
    <header className="bg-hero-image">
      <picture>
        <source srcSet={`/images/${heroImage.desktop}`} media="(min-width: 500px)" />
        <img src={`/images/${heroImage.mobile}`} alt="hero image" />
      </picture>
    </header>
  )
}

export default MainHero;