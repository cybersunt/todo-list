import React, {Component} from 'react';
import './app.css';

import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import AddItem from "../add-item/add-item";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

class App extends Component {

  maxId = 0;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
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

  addItem = (label) => {
    const newItem = this.createTodoItem(label);

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

  onToggleDone = (id) => {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    })
  };

  onToggleImportant = (id) => {
    console.log('Toggle Important ', id);
  };

  render() {
    return (
      <div className="todo-app">
        <Header toDo={1} done={3}/>
        <div className="top-panel search-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>
        <AddItem onItemAdded={this.addItem}/>
      </div>
    );
  }
}

export default App;
