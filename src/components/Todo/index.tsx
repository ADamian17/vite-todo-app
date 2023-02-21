import React, { useState } from "react";

import "./Todo.scss"
import TodoChecked from "../TodoChecked";

const Todo: React.FC<App.Todo> = ({ id, title, done }) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className="todo">
      <TodoChecked onChange={handleChange} isChecked={isChecked} idx={id} />

      <p className={`title ${done && "isChecked"}`}>{title}</p>

      <svg className="crossIcon">
        <use href="/icons/main-icons.svg#cross"></use>
      </svg>
    </div>
  )
}

export default Todo;