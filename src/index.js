import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div className="todo-app">
      <Header/>
      <SearchPanel/>
      <TodoList/>
      <CreateItem/>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header d-flex">
      <h1 className="header__caption">Todo List</h1>
      <div className="header__description">3 more to do, 0 done</div>
    </div>
  )
};

const SearchPanel = () => {
  return (
    <div className="search-panel d-flex">
      <input className="form-control search-input"
             placeholder="type to search"
             value="1"/>
      <div className="btn-group">
        <button type="button" className="btn btn-outline-secondary">All</button>
        <button type="button" className="btn btn-info">Active</button>
        <button type="button" className="btn btn-outline-secondary">Done</button>
      </div>
    </div>
  )
};

const TodoList = () => {
  return (
    <ul className="list-group todo-list">
      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-wrapper">
          <div className="todo-list__item-label">Drink Coffee</div>

          <button type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"></i>
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>

        </div>
      </li>
      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-wrapper">
          <div className="todo-list__item-label">Build React App</div>

          <button type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </li>
      <li className="list-group-item todo-list__item">
        <div className="todo-list__item-wrapper">
          <div className="todo-list__item-label">Have a lunch</div>
          <button type="button" className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </li>
    </ul>
  )
};

const CreateItem = () => {
  return (
    <form className="item-add-form d-flex">
      <input type="text"
             className="form-control"
             placeholder="What needs to be done"
             value=""/>
      <button className="btn btn-outline-secondary">AddItem</button>
    </form>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));

