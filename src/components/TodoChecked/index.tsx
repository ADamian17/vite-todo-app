import React, { useState } from "react";

import "./TodoChecked.scss"

type TodoCheckedType = {
  isChecked: boolean,
  idx: number
};

const TodoChecked: React.FC<React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & TodoCheckedType> = ({
  isChecked,
  idx,
  ...rest
}) => (
    <>
      <label
        htmlFor={`checked-todo-${idx}`}
        className={`checkedTodoLabel ${isChecked && "isChecked"}`}
      >
        {
          isChecked && <img className="checkedIcon" src="/icons/icon-check.svg" />
        }
      </label>
      <input
        className="checkedTodo"
        id={`checked-todo-${idx}`}
        type="checkbox"
        {...rest} />
    </>
  )


export default TodoChecked;