import React, { Component } from 'react';
import './add-item.css';

class AddItem extends Component {
  render() {
    return (
      ///<form className="add-item d-flex">
        ///<input type="text"
               ///className="form-control"
               ///placeholder="What needs to be done"
               ///value=""/>
        ///<button className="btn btn-outline-secondary"
                ///onClick={() => this.props.onItemAdded('Hello World')}>
          ///AddItem
        ///</button>
      ///</form>

      <button className="btn btn-outline-secondary"
              onClick={() => this.props.onItemAdded('Hello World')}>
        AddItem
      </button>
    )
  }
}

export default AddItem;
