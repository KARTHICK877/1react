// ProductList.js
import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import './Product.css'; // Import your CSS file
import images from './assets/images/images.png';

const ProductList = () => {
  const {
    products,
    increaseStock,
    decreaseStock,
    increasePrice,
    decreasePrice,
  } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <h3>Brand: {product.brand}</h3>
            <p>Stock: {product.stock}</p>
            <button onClick={() => decreaseStock(product.id)}>Decrease Stock</button>
            <button onClick={() => increaseStock(product.id)}>Increase Stock</button>
            <p>Price: ${product.price}</p>
            <button onClick={() => decreasePrice(product.id)}>Decrease Price</button>
            <button onClick={() => increasePrice(product.id)}>Increase Price</button>
          </div>
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
