import { useState } from 'react'
import{ useDispatch , useSelector}from 'react-redux'
import { increment,decrement,reset } from './counterSlice'

import './App.css'

function App() {
const dispatch = useDispatch()
const count = useSelector(state => state.counter);

  return (
    <>
   <p>
    count{count}
    </p> 

    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>

    <button onClick={()=>dispatch(reset())}>reset</button>

    </>
  )
}

export default App
