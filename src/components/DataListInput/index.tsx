import React, { useState } from 'react'

import "./styles.css"

const DataListInput: React.FC = (props) => {
  const [val, setVal] = useState('');
  const [showList, setShowList] = useState(false)


  const handleShowList = () => {
    setShowList(prev => !prev);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setVal(e.currentTarget.dataset["value"]!)
    setShowList(false)
  }

  const options = [
    "Chocolate",
    "Coconut",
    "Mint",
    "Strawberry",
    "Vanilla"
  ].filter(option => option.toLowerCase().includes(
    val.toLowerCase()
  ))

  return (
    <>
      <h1>HTML5 datalist styling demonstration</h1>

      <form id="autoform">
        {/* must be first element after input and use <option>value</option> format */}
        <label htmlFor="browser">browser:</label>
        <input list="browserdata" id="browser" name="browser" size={50} autoComplete="off" />

        <datalist id="browserdata">
          <option>Brave</option>
          <option>Chrome</option>
          <option>Edge</option>
          <option>Firefox</option>
          <option>Internet Explorer</option>
          <option>Opera</option>
          <option>Safari</option>
          <option>Vivaldi</option>
          <option>other</option>
        </datalist>

        <button type="submit">submit</button>

      </form>
    </>
  )
}

export default DataListInput