import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Fullstack.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './assets/Image/image1.png'
import image8 from './assets/Image/image8.png'
import image2 from './assets/Image/image2.png'
import image3 from './assets/Image/image3.png'
import image4 from './assets/Image/image4.png'
import image6 from './assets/Image/image6.png'
import image5 from './assets/Image/image5.png'
import image7 from './assets/Image/image7.png'
function Fullstack() {
  return (
    <div>

         <div className='p2'>
      <div><h1>
      Full Stack Development </h1>
      <br />
      <p className='p1'>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be <br /> sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and <br /> Appreneurs!</p>
     <br />
     <p className='p1'> The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on <br /> the internet. High-Quality content curated by experts!</p>
      </div>
      <br />
      </div>
    <CardGroup>
    <Card className='group'>
      <Card.Img width={300}height={200} variant="top" src={image2} />
      <Card.Body>
        <Card.Title>The Top 10 Tools Every Full Stack Developer Should Master in 2023</Card.Title>
        <Card.Text>
        ‍As a full stack developer, having the right set of tools is crucial for your
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={image1} />
      <Card.Body>
        <Card.Title>The Ultimate Guide to Real-World Full Stack Development Applications</Card.Title>
        <Card.Text>
        Full stack development has become increasingly popular in recent years, with companies seeking professionals who
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp" />
      <Card.Body>
        <Card.Title>Best Ways to Learn Full Stack Development in 2023</Card.Title>
        <Card.Text>
        Full stack development is and will be a promising and an in-demand career in the
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
  
  </CardGroup>
  <CardGroup>
  <Card>
      <Card.Img width={300}height={200} variant="top" src={image3}/>
      <Card.Body>
        <Card.Title>Top Skills To Become a Full Stack Developer in 2023</Card.Title>
        <Card.Text>
        Are you interested in becoming a great full-stack developer? If so, then you’re at the
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={image4}/>
      <Card.Body>
        <Card.Title>Salary of a Full Stack Developer in India in 2023</Card.Title>
        <Card.Text>
        Are you passionate about technology and fascinated by the world of software development? If so,
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={image5} />
      <Card.Body>
        <Card.Title>How does Apache work? A detailed introduction to Apache</Card.Title>
        <Card.Text>
        Apache is the most widely used web server in the world, powering over 40% of
        </Card.Text>
      </Card.Body>
      <Card.Footer>
     
      </Card.Footer>
    </Card>
      </CardGroup>
      <CardGroup>
      <Card>
      <Card.Img width={300}height={200} variant="top" src={image6}/>
      <Card.Body>
        <Card.Title>10 Best Database Management Systems For Software Developers</Card.Title>
        <Card.Text>
        In this digitized world, where data is an asset to businesses, it has become very
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card> <Card>
      <Card.Img width={300}height={200} variant="top" src={image7}/>
      <Card.Body>
        <Card.Title>7 Powerful Steps to Land a Software Developer Internship</Card.Title>
        <Card.Text>
        Software development is set to grow at the rate of 25% between 2021-2031. An illustrious
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card> <Card>
      <Card.Img width={300}height={200} variant="top" src={image8}/>
      <Card.Body>
        <Card.Title>Web Development Roadmap for Beginners 2023</Card.Title>
        <Card.Text>
        Web Development is a booming, high-paying, and indeed promising career in the IT industry, into
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
      </CardGroup>
  </div>
);
}


export default Fullstack












