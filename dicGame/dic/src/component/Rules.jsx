import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
<h2>
    How to play dice game
</h2>
<div className='text'>
<p>Select any number</p>
<p>Click on dic image</p>
<p>after click on dice if selected number in equal to dice number you will get same
    point as dic {''}
</p>
<p> if you wrong guess then 2 point will be dedcuted</p>
</div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2 {
  font-size: 24px;
}
.text {
  margin-top: 24px;
}
`;