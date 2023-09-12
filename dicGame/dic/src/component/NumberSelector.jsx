import { styled } from 'styled-components'
import {useState} from 'react';
const NumberSelector=()=> {

    const arrNumber = [1,2,3,4,5,6]
    const [selectNumber,setselectnumber] = useState()
  return (
    <NumberSelectorcontainer >
   <div className='flex'>
   { 
    arrNumber.map((value,i)=>(
     <Box 
     IsSelected = {value === selectNumber}
     key={i} onClick={()=> setselectnumber(value)}>{value}</Box>

    ))
   }        
  
   </div>
  <p className='p'>select Number</p>
    
    </NumberSelectorcontainer>
  )
}

export default NumberSelector
 const NumberSelectorcontainer = styled.div`
display:flex;
flex-direction:column;
align-item:end;

 .flex{
  display:flex;
  gap:24px;
 }
 .p{
  font-weight:700px
  font-size:24px
 }
 `;
const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>(props.IsSelected ? 'black': "white")};
color:${(props)=>(!props.IsSelected ? 'black': "white")};


`;