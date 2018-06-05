import React, { Component } from 'react';
//import { BrowserRouter as Router, Router, Link} from 'react-router-dom';
//import './App.css';
class AddProduct extends Component {
  constructor(props){
  	super(props);

  	this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
  	event.preventDefault();

  	this.props.onAdd(this.nameInput.value, this.priceInput.value);

  	//After include the product return void box of input
  	this.nameInput.value = '';
  	this.priceInput.value = '';

  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <h3> Add Product </h3>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
        <button> Add </button>

        <hr />
      </form>           
   );
  }
}

export default AddProduct;