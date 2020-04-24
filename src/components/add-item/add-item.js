import React, { Component } from 'react';
import './add-item.css';

class AddItem extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="add-item d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               placeholder="What needs to be done"
               onChange={this.onLabelChange}/>
        <button className="btn btn-outline-secondary"
                value={this.state.label}>
          AddItem
        </button>
      </form>
    )
  }
}

export default AddItem;
