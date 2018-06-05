import React, { Component } from 'react';
//import { BrowserRouter as Router, Router, Link} from 'react-router-dom';
//import './App.css';

class AddItem extends Component {
  render(){
    return(
      <form>
        <h3> Add Product </h3>
        <input placeholder="Name" />
        <input placeholder="Price" />
        <button> Add </button>

        <hr />
      </form>           
   );
  }
}

export default AddItem;