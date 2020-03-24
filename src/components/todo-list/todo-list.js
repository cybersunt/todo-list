import React from 'react';
import './todo-list.css';

const TodoList = () => {
  return (
    <ul className="list-group todo-list">

      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-label">Drink Coffee</div>

        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </li>

      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-label">Build React App</div>

        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </li>

      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-label">Have a lunch</div>
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
