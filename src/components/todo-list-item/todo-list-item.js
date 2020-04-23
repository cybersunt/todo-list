import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {

  state = {
    done: false
  };

  onLabelClick = () => {
    this.setState({
      done: true
    })
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'list-group-item todo-list-item';
    if(done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <li className={classNames}>
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
