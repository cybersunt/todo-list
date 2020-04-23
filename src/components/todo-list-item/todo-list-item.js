import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState({
      done: true
    })
  };

  onMarkImportant = () => {
    this.setState({
      important: true
    })
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

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
             onClick={this.onLabelClick}>
          {label}
        </div>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
      </li>
    )
  }
}

export default TodoListItem;
