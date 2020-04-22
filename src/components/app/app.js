import React from 'react';
import './app.css';

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import CreateItem from "../create-item/create-item";

const todoData = [
  {label: 'Drink Coffee', important: false, id: 1},
  {label: 'Make Awesome App', important: true, id: 2},
  {label: 'Have a lunch', important: false, id: 3}
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
