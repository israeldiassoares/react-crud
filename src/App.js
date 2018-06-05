import React, { Component } from 'react';
//import { BrowserRouter as Router, Router, Link} from 'react-router-dom';
import './App.css';
import ProductItem from  './ProductItem';
import AddProduct from './AddProduct';
import Rating from './Rating';

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }

];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
    
    constructor(props){
      super(props);

      this.state = {
        products: JSON.parse(localStorage.getItem('products'))
      };


      this.onAdd = this.onAdd.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.onEditSubmit = this.onEditSubmit.bind(this);
    }

  componentWillMount(){
    const products = this.getProducts(); 
 
    this.setState({ products });  
  }

  //Get method CRUD
  getProducts(){
    return  this.state.products
  }
  //Add method
  onAdd(name, price){
    const products = this.getProducts();

    products.push({
      name,
      price
    });
    this.setState({ products });
  }
  
  //Delete Method
  onDelete(name){
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({products: filteredProducts});
  }

      onStarClickCustonIcon(){

  }

  //Edit method and submit
  onEditSubmit(name, price, originalName){
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName){
        product.name = name;
        product.price = price;
      }

      return product;
    });
    this.setState({ products });
  }

//Creating show product props
  render() {
    return (
      <div className='App'>
        <h1> Products Manager </h1>

        <AddProduct
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => {
            return(
            <ProductItem 
            key={product.name}
            {...product}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}
             />            
            
            );

          })
       }
       <Rating onStarClickCustonIcon={this.onStarClickCustonIcon()}

        />
      </div>
    );
  }
}

export default App;