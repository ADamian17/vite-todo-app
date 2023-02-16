import { useEffect, useState } from 'react'

import "./styles/main.scss";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const icon = isDarkTheme ? "icon-sun" : "icon-moon";

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDarkTheme(!isDarkTheme)
  }


  useEffect(() => {
    const handleColorTheme = (e) => {
      const newColorScheme = e.matches ? setIsDarkTheme(true) : setIsDarkTheme(false);
      console.log(newColorScheme);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleColorTheme);
  }, [])




  return (
    <>
      <h1>Hello</h1>
      <img src={`/icons/${icon}.svg`} alt="icon sun" onClick={handleClick} />
    </>
  )
}

export default App
