import React from 'react'

function Cart() {
  return (
    <div className="App">
      <div className='cart-value'>
       <Badge bg='dark'>
        🛒 Cart {count}
       </Badge>
      </div>
     <div className='card-container'>
      {data.map((product, index)=> (
      <Items
      key = {index}
      prod = {product}
      count = {count}
      setcount = {setcount}
      />
      ))}
      </div>
    </div>
  )
}

export default Cart