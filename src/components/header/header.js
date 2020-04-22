import React from 'react';
import './header.css';

const Header = ({toDo, done}) => {
  return (
    <div className="header d-flex">
      <h1 className="header__caption">Todo List</h1>
      <div className="header__description">toDo} more to do, {done} done</div>
    </div>
  )
};

export default Header;
