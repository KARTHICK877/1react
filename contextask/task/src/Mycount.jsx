import React, { Context } from 'react'
import  Context  from './Context';
function Mycount() {
    const [count,setcount]=useState(0);
    function increase (){
        setcount(count +1);
    }
    function decrease(){
        setcount(count -1);
    }

  return (
    <div>Mycount
        <p>count is {count}</p>
<button onClick={increase}>increase</button>
<button onClick={decrease}> decrease</button>

    </div>
  )
}

export default Mycount