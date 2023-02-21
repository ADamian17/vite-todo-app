import React from "react";

import "./TodosItemsContainer.scss"
import Todo from "../../components/Todo";

type TodosItemsContainerType = {};

const TodosItemsContainer: React.FC<TodosItemsContainerType> = (props) => {
  const todos = [
    { done: true, title: "Complete online JavaScript course" },
    { done: false, title: "Jog around the park 3x" },
    { done: false, title: "10 minutes meditation" },
    { done: false, title: "Read for 1 hour" },
    { done: false, title: "Pick up groceries" },
    { done: false, title: "Complete Todo App on Frontend Mentor" },
  ]
  const todoList = todos.map((item, idx) => (
    <Todo key={idx} {...{ ...item, id: idx }} />
  ))
  const itemsLeft = todos.filter(item => !item.done).length;
  const itemsStr = `${itemsLeft} item${itemsLeft > 1 && "s"} left`

  return (
    <section className="todosItems">
      <form className="todoForm">
        <div className="inputWrapper">
          <label htmlFor="new-todo" className="checkedTodo"></label>
          <input
            className="todoInput"
            id="new-todo"
            maxLength={36}
            placeholder="Create a new todo"
            type="text" />
        </div>
      </form>

      <div className="todoList">
        {todoList}

        <div className="info">
          <span>
            {itemsStr}
          </span>

          <span>Clear Completed</span>
        </div>

        <div className="filter">
          <span className="active">All</span>

          <span>Active</span>

          <span>Completed</span>
        </div>
      </div>
    </section>
  )
}

export default TodosItemsContainer;