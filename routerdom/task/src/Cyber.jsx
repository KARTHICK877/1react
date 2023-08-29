import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import cim1 from './assets/Image/cim1.png'
import cim2 from './assets/Image/cim2.png'
import cim3 from './assets/Image/cim3.png'
import cim4 from './assets/Image/cim4.png'
import cim5 from './assets/Image/cim5.png'
import cim6 from './assets/Image/cim6.png'
import cim7 from './assets/Image/cim7.png'
import image1 from './assets/Image/image1.png'
import cim8 from './assets/Image/cim8.png'
import i1 from './assets/Image/i1.png'
function Cyber() {
  return (
    <div>
    <br />
      <div>
      <img width={1500}height={300} src={i1} alt="" />
      </div>
      <br />
      <div><hr /></div>
    
    <CardGroup>
    <Card className='group'>
      <Card.Img width={300}height={200} variant="top" src={cim1} />
      <Card.Body>
        <Card.Title>Cybersecurity Vs Ethical Hacking: Top 10 Differences</Card.Title>
        <Card.Text>
        Cybersecurity & Ethical hacking and have been key in making sure that your data online
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={cim2} />
      <Card.Body>
        <Card.Title>What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</Card.Title>
        <Card.Text>
        Look around today, you will witness that we are more reliant on technology and devices        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={cim3} />
      <Card.Body>
        <Card.Title>Top 10 Ethical Hacking Books for Beginner to Advanced</Card.Title>
        <Card.Text>
        Did you know that according to the University of Maryland hackers attack every 39 seconds        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
  
  </CardGroup>
  <CardGroup>
  <Card>
  <Card.Img width={300}height={200} variant="top" src={cim4}/>

      <Card.Body>
        <Card.Title>8 Different Types of Cybersecurity and Threats Involved</Card.Title>
        <Card.Text>
        ‍Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img width={300}height={200} variant="top" src={cim5}/>
      <Card.Body>
        <Card.Title>Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?</Card.Title>
        <Card.Text>
        Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
    <Card>
    <Card.Img width={300}height={200} variant="top" src={cim6}/>
      
      <Card.Body>
        <Card.Title>Top 7 Cyber Security Attacks in Real Life</Card.Title>
        <Card.Text>
        Cyber security attacks are the type of actions that are designed to destroy, steal, modify,        </Card.Text>
      </Card.Body>
      <Card.Footer>
     
      </Card.Footer>
    </Card>
      </CardGroup>
      <CardGroup>
      <Card>
      <Card.Img width={300}height={200} variant="top" src={cim7}/>

      <Card.Body>
        <Card.Title>The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!</Card.Title>
        <Card.Text>
        There is something fascinating about a lone hacker in black hoodies using a single system
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card> <Card>
    <Card.Img width={300}height={200} variant="top" src={cim8}/>
    
      <Card.Body>
        <Card.Title>How Is Cyber Security Important To Our Lives?</Card.Title>
        <Card.Text>
        Have you ever wondered how some of the world’s most successful companies seem to know
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card> <Card>
      <Card.Img width={300}height={200} variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap</Card.Title>
        <Card.Text>
        According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging
        </Card.Text>
      </Card.Body>
      <Card.Footer>
 
      </Card.Footer>
    </Card>
      </CardGroup>
  </div>
  )
}

export default Cyber