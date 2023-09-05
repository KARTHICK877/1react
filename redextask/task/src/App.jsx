import React from 'react';
import ItemList from './component/itemList';
import { Provider } from 'react-redux';
import store from './store/configureStore';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
