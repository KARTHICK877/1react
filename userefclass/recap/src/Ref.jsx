import React,{ useState , useRef} from 'react'

function Ref() {
const [count ,setcont]=useState(0);
const countRef=useRef(0)

function handleclick(){
    setcont(count+1);
    countRef.current++;

    console.log("state",count)
    console.log('ref',countRef.current)
}


  return (
    <div>
        <h1>Ref</h1>
        <p>state{count}</p>
        <p>ref.{countRef.current}</p>
        <button onClick={handleclick}>increment</button>
    </div>
  )
}

export default Ref