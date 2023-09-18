import React, { Component } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';

class AllProductsPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  render() {
    return (
      <div>
        <h1 className='hd'>Welcome to Products Display Page</h1>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default AllProductsPage;