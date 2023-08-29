import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import { ProductProvider, useProductContext } from './ProductContext';


function App() {
  const data =  [

    
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple Super Retina HD display with OLED",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
        
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super A12 Bionic chip ",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
       
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
        
          "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
        ]
    }
  
    // Your product data here
  ];

  return (
    <ProductProvider>
      <div className="App">
        <CartBadge />
        <div className="card-container">
          {data.map((product, index) => (
            <Items key={index} prod={product} />
          ))}
        </div>
      </div>
    </ProductProvider>
  );
}

function CartBadge() {
  const { cartCount } = useProductContext();

  return (
    <div className="cart-value">
      <Badge bg="dark">
        🛒 Cart {cartCount}
      </Badge>
    </div>
  );
}


  function Items({ prod }) {
    const { addToCart, removeFromCart } = useProductContext();
    const [show, setShow] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(prod.price);
    const [quantity, setQuantity] = useState(0);
  
    const quality = () => {
      setQuantity(quantity + 1);
      setCurrentPrice(currentPrice + prod.price);
      setShow(false);
    };
  
    const decrease = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
        setCurrentPrice(currentPrice - prod.price);
      }
  
      if (quantity === 1) {
        setShow(false);
      }
    };
  
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.images} />
        <Card.Body>
          <Card.Title> <span></span> {prod.title}</Card.Title>
          <Card.Text><span></span>{prod.description}</Card.Text>
          <Card.Text><span>Discound:</span>{prod.discountPercentage}</Card.Text>
          <Card.Text><span>Rating: </span>{prod.rating}</Card.Text>
          <Card.Text><span>$..</span>{currentPrice}</Card.Text> 
  
          {!show ? (
            <Button className='add' variant="warning" onClick={() => { addToCart(); setShow(true); }}>
              Add to Cart
            </Button>
          ) : (
            <Button className='add'   variant="danger" onClick={() => { removeFromCart(); setShow(false); }}>
              Remove Cart
            </Button>
          )}
  
          <div>
            Quality
            <Button variant="display" onClick={quality}>
              +
            </Button>
            <Button variant="danger" onClick={decrease}>
              -
            </Button>
          </div>
          <div className='buy'>
            <Button variant="from">
              Buy Now
            </Button>
          </div>
          </Card.Body>
      </Card>
        </Card>
      </div>
    );
  }
  




export default App;
