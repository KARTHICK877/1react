import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export function ProductProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    setCartCount(cartCount - 1);
  };

  const initialState = {
    cartCount,
    addToCart,
    removeFromCart,
  };

  return (
    <ProductContext.Provider value={initialState}>
      {children}
    </ProductContext.Provider>
  );
}
