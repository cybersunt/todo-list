import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    const {id, ...itemProps } = item;
    return (
      <TodoListItem { ...itemProps } key={id}/>
    )
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
};

export default TodoList;
