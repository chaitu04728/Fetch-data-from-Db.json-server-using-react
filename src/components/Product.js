import React from 'react';

function Product({ product }) {
  return (
    <tr>
      <td>{product.ID}</td>
      <td>{product.ProductName}</td>
      <td>{product.Quantity}</td>
      <td>{product.Price}</td>
    </tr>
  );
}

export default Product;