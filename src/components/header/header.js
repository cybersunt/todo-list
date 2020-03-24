import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h1 className="header__caption">Todo List</h1>
      <div className="header__description">3 more to do, 0 done</div>
    </div>
  )
};

export default Header;
