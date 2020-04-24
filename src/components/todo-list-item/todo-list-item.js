import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

  render() {
    const { label, done, important, onDeleted, onToggleImportant, onToggleDone, } = this.props;

    let classNames = 'list-group-item todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <li className={classNames}>
        <div className="todo-list-item__label"
             onClick={onToggleDone}>
          {label}
        </div>

        <button type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={onDeleted}>
          <i className="fa fa-trash-o"></i>
        </button>

        <button type="button"
                className="btn btn-outline-success btn-sm"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
      </li>
    )
  }
}

export default TodoListItem;
