import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../actions/cartActions';
import './itemList.css';

const ItemList = (props) => {
  return (
    <div className='all'>
      {props.cart.map((item) => (
        <div className='item' key={item.id}>
          <h3>{item.title}</h3>
          <hr />
          <p>About:{item.description}</p>
          <h5>Brand:{item.brand}</h5>
          <img src="{item.}thumbnail" />
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${parseFloat(item.price * item.quantity).toFixed(2)}</p>
          <button className='one' onClick={() => props.decreaseQuantity(item.id)}>-</button>
          <button className='two'onClick={() => props.increaseQuantity(item.id)}>+</button> <br />
          <button className='butt'>BUY NOW:</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
