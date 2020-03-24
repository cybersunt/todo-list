import React from 'react';
import './create-item.css';

const CreateItem = () => {
  return (
    <form className="create-item d-flex">
      <input type="text"
             className="form-control"
             placeholder="What needs to be done"
             value=""/>
      <button className="btn btn-outline-secondary">AddItem</button>
    </form>
  )
};

export default CreateItem;
