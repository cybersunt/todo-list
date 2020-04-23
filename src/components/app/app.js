import React, {Component} from 'react';
import './app.css';

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import AddItem from "../add-item/add-item";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

class App extends Component {

  maxID = 100;

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    })
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <Header toDo={1} done={3}/>
        <div className="top-panel search-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
        <AddItem onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
