// App.js
import React from 'react';
import CounterProvider from './CounterProvider';
import Counter from './Counter';

function App() {
  return (
    
    <CounterProvider>
      
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
