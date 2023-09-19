import React from 'react'
import styled from "styled-components"
function StartGame({toggle}) {
  return (
    <Container> 
<div > <img src="/images/dices.png" /></div>
<div className='content'>
    <h1> Start Game
    </h1>
    <Button onClick={toggle}>play now</Button>
    
</div>

    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width:1180px;
height:100vh;
display: flex;
margin:0 auto;
align-items: center;

.content {
    h1{
        fornt-sixze:96px;
        white-space:nowrap;
    }
}
`;

const Button = styled.button`

color:white;
padding:10px 18px;
min-width:220px;
background-color:black;
border-radius:none;
border-radius:5px;
border:none;
font-size:16px;
border:1px solid transparent;
cursor:pointer;
transition:0.4s background ease-in;
&:hover{
    background-color:black;
    border:1px solid black;
    color: while;
    transition:0.4s background ease-in;
}
`;
