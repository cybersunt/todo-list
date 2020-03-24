import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = () => {
  return (
    <ul className="list-group todo-list">

      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>

      <li className="list-group-item todo-list-item">
        <div className="todo-list-item__label">Build React App</div>

        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </li>

      <li className="list-group-item todo-list-item">
        <div className="todo-list-item__label">Have a lunch</div>
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </li>
    </ul>
  )
};

export default TodoList;
