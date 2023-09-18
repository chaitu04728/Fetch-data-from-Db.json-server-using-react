import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.ID} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsList;