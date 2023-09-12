import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Rules from './Rules'

import { useState } from 'react'
function GamePlay() {
  const [score,setscore]= useState(0)
  const [selectNumber,setselectnumber] = useState()
  const [currentdic,setcurrentdic]= useState(1);
  const [error,seterror]= useState('')
  const [ showrules,setshowrules]=useState(false)

  const gerneraterandom = (min,max)=> {
    return Math.floor(Math.random()*(max - min)+min);
   }
   const resetscore=()=>{
    setscore(0)
   }
   const roleDic = ()=>{
    if(!selectNumber){
      seterror('YOU HAVE NOT SELECTED ANY NUMBERS?')
      return
    };
    const randomNumber = gerneraterandom(1,7);
     setcurrentdic ((prev)=> randomNumber);
   

    if (selectNumber === randomNumber){
      setscore((prev)=> prev + randomNumber)
    }else{
      setscore(prev=>prev-2)
    }
 setselectnumber(undefined)
  
  };
  return (
    <MainContainer>
<div className='top_section'>

<TotalScore  score= {score}/>
<NumberSelector seterror={seterror}
error={error}
 selectNumber= {selectNumber}
setselectnumber= {setselectnumber} />

</div>
<RoleDice currentdic={currentdic}
roleDic={roleDic} />
<div className='btns'>
  <button className='buy' onClick={resetscore}>reset</button>
  <button  className= 'buy'onClick={()=> setshowrules((prev)=> !prev)}>
    {showrules ? " Hide":"Show"}
     Rules</button>
  </div>
 { showrules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    .buy{ background-color: rgb(9, 9, 9);
      box-shadow: hsl(0, 100%, 14%) 4px 4px 0px;
      border-radius: 8px;
      padding: 0px 0px;
      color: rgb(255, 255, 255);
      border:none;
      transition: transform 200ms, box-shadow 200ms;
      width:200px;
      height:35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
    }
    .buy:active{
    
      transform: translateY(4px) translateX(4px);
      box-shadow: #fcfeff 0 0 0 ;
    }
  
}`;