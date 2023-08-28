import React , { useState,createContext } from "react";

const CounterButton = createContext()

 function CounterButtonProvider(props){
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
        const value={count,decrease,quality,removecart,addcart}
    return(
        <CounterButton.Provider value={value}>
{props. items.children}
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

        </CounterButton.Provider>
    )
}
 }
export default CounterButtonProvider
