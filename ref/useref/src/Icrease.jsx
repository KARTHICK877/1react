import React ,{useRef} from 'react'

function Icrease() {
    const currentvalue = useRef(0)
    const pervious = useRef(0)
   const inputRef=useRef("null")
    const handelincrement =()=>{
        pervious.current=currentvalue.current;
        currentvalue.current+=1;
        inputRef.current.focus()
        console.log( "current value",currentvalue.current);
        console.log( "pervious value",pervious.current);
    }
  return (
    <div>
        <p>current value{currentvalue.current}</p>
        <p>pervious value{pervious.current}</p>
        <input type="text"  ref={inputRef} />
        <button onClick={handelincrement}>press me</button></div>
  )
}

export default Icrease