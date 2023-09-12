import React, { useState } from 'react'
 import styled from 'styled-components'
 const RoleDice= ({roleDic,currentdic})=> {
 
   return (
     <Dicecontainer>
 <div className='dice' onClick={roleDic}>
     <img  src={`/images/dice/dice_${currentdic}.png`} alt="dice 1" />
 </div>
 <p>click on dice to roll</p>

     </Dicecontainer>
   )
 }

 export default RoleDice

 const Dicecontainer = styled.div`
 display:flex;
 margin-top:48px;
 flex-direction:column;
 align-items:center;
 p{
     font-size:24px;
 }
 .dice{
     cursor:pointer;
 }
 `;