import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap'
import Counterbutton from './Counterbutton'
import CounterButtonProvider from './Counterbutton';

function App() {

  const data = [

    
      {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
      },
      {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          ]
      },
      {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/3/1.jpg"
          ]
      },
      {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          ]
      },
      {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
          ]
      }
  ]

  
  const [count, setcount] = useState(0)
  
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
      <CounterButtonProvider>
      <Items></Items>
      </CounterButtonProvider>
    </div>
  
  );
 
}
export default App;

function Items({ prod, count, setcount }) {
  const [show, setShow] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(prod.price); // Add state for current price

  function addcart(){
    setcount(count+1)
    setShow(!show)
  }
  function removecart(){
    setcount(count-1)
    setShow(!show)
  }
  
  function quality() {
    setcount(count + 1);
    setCurrentPrice(currentPrice + prod.price); // Increase the current price
    setShow(false); // Show the remove button
  }

  function decrease() {
    if (count > 0) {
      setcount(count - 1);
      setCurrentPrice(currentPrice - prod.price); // Decrease the current price
    }

    if (count === 1) {
      setShow(false); // Hide the remove button when count becomes 0
    }
  }


  return (
 
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.images} />
        <Card.Body>
          <Card.Title> <span></span> {prod.title}</Card.Title>
          <Card.Text><span></span>{prod.description}</Card.Text>
          <Card.Text><span>Discound:</span>{prod.discountPercentage}</Card.Text>
          <Card.Text><span>Rating: </span>{prod.rating}</Card.Text>
          <Card.Text><span>$..</span>{currentPrice}</Card.Text> {/* Display the current price */}
       
           {!show ? (
            <Button variant="warning" onClick={addcart}>
              Add to Cart
            </Button>
          ) : (
            ""
          )} 

           {show ? (
            <Button variant="danger" onClick={removecart}>
              Remove Cart
            </Button>
          ) : (
            ""
          )} 
         <div>
          
          Quality <Button variant="display" onClick={quality}>
              +
            </Button>
          <Button variant="danger" onClick={decrease}>
            -
          </Button>
          </div>
          <div className='buy'>
          <Button variant="from" >
            Buy Now
          </Button>
          </div>
           
        </Card.Body>
      </Card>
    </div>
  );
          }
