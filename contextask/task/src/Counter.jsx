// Counter.js
import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Counter = () => {
  const { count, increase, decrease } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
