import React from 'react';
import './search-panel.css';

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

export default SearchPanel;
