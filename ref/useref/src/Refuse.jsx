import React, { useState, useRef } from 'react'

function Refuse() {
    const [count,setcout ]=useState(0);
    const countRef = useRef(0); 
    const handlebuttonclick =()=>{
      setcout(count+1);
      countRef.current=countRef.current+1;
      console.log("numb of press", countRef.current);

    }
  return (<>
    <button onClick={handlebuttonclick}>Presme increment</button>
    <p>pressed{count}</p></>
  )
}

export default Refuse