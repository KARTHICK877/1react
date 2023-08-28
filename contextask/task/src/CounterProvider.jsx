// CounterProvider.js
import React, { useState } from 'react';
import CounterContext from './CounterContext';

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
