import React from 'react'
import styled from 'styled-components'
function RoleDice() {
  return (
    <Dicecontainer>
<div>
    <img  className='dice' src="/images/dice_1.png" alt="dice 1" />
</div>
<p>click on dice to roll</p>

    </Dicecontainer>
  )
}

export default RoleDice

const Dicecontainer = styled.div`
display:flex
margin-top:48px
flex-direction:column;
align-items:center
p{
    font-size:24px
}
.dice{
    cursor:pointer
}
`;