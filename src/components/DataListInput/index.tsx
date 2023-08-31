import React, { useState } from 'react'

import "./styles.css"

const DataListInput: React.FC = (props) => {
  const [val, setVal] = useState('');
  const [inFocus, setInFocus] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => (
    setVal(e.currentTarget.dataset["value"]!)
  )

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setInFocus(true)
  }

  const setInnerCopy = (strToReplace: string, str: string) => {
    if (str.length <= 0) return strToReplace

    return strToReplace.toLowerCase().replace(str, `<b>${str}</b>`)
  }

  const options = [
    "Chocolate",
    "Coconut",
    "Mint",
    "Strawberry",
    "Vanilla"
  ].filter(option => {
    const selectedStr = val.toLowerCase();
    const currentStr = option.toLowerCase();

    return (
      selectedStr &&
      currentStr.startsWith(selectedStr) &&
      currentStr !== selectedStr
    );
  }).map(item => (
    <li
      key={item}
      role="presentation"
    >
      <p
        data-value={item}
        onClick={handleClick}
        dangerouslySetInnerHTML={{
          __html: setInnerCopy(item, val)
        }} />
    </li>
  ))

  return (
    <div>
      <input
        id="browser"
        name="browser"
        value={val}
        onChange={handleChange}
        onFocus={handleFocus}
      />

      <menu role="listbox">
        {options}
      </menu>
    </div>
  )
}

export default DataListInput