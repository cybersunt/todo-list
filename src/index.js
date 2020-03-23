import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const el = (
  <div className="todo-app">
    <div className="app-header d-flex">
      <h1>Todo List</h1><h2>3 more to do, 0 done</h2>
    </div>
    <div className="top-panel d-flex">
      <input className="form-control search-input"
             placeholder="type to search"
             value="1"/>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary">All</button>
          <button type="button" className="btn btn-info">Active</button>
          <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
      </div>
    <ul className="list-group todo-list">
      <li className="list-group-item">
        <span className="todo-list-item">
          <span className="todo-list-item-label">Drink Coffee</span>

          <button type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </li>
      <li className="list-group-item">
        <span className="todo-list-item">
          <span className="todo-list-item-label">Build React App</span>

          <button type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </li>
      <li className="list-group-item">
        <span className="todo-list-item">
          <span className="todo-list-item-label">Have a lunch</span>
          <button type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </li>
    </ul>

    <form className="item-add-form d-flex">
      <input type="text"
             className="form-control"
             placeholder="What needs to be done"
             value=""/>
             <button className="btn btn-outline-secondary">AddItem</button>
      </form>
    </div>
);

    ReactDOM.render(el, document.querySelector('#root'));

