import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <li className="list-group-item todo-list-item">
      <div className="todo-list-item__label"
           style={style}>{label}</div>

      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o"></i>
      </button>
    </li>
  )
};

export default TodoListItem;
