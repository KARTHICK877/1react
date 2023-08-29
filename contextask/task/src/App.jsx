// App.js
import React from 'react';
import ProductProvider from './ProductProvider';
import ProductList from './ProductList';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
