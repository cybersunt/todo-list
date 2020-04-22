import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = () => {
  return (
    <ul className="list-group todo-list">
      <TodoListItem label="Drink Coffee"/>
      <TodoListItem
        label="Build React App"
        important/>
      <TodoListItem label="Have a lunch"/>
    </ul>
  )
};

export default TodoList;
