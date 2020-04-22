import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group todo-list">
      <TodoListItem label={todos[0].label}/>
      <TodoListItem
        label={todos[1].label}
        important={todos[0].label}/>
      <TodoListItem label={todos[2].label}/>
    </ul>
  )
};

export default TodoList;
