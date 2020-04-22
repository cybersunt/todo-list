import React from 'react';
import './app.css';

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import CreateItem from "../create-item/create-item";

const todoData = [
  {label: 'Drink Coffee', important: false},
  {label: 'Build React App', important: true},
  {label: 'Have a lunch', important: false},
];

const App = () => {
  return (
    <div className="todo-app">
      <Header/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
      <CreateItem/>
    </div>
  )
}

export default App;
