import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  }

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <li className="list-group-item todo-list-item">
        <div className="todo-list-item__label"
             style={style}
             onClick={this.onLabelClick}>
          {label}
        </div>
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
      </li>
    )
  }
}

export default TodoListItem;
