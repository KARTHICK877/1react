import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from "styled-components"
import StartGame from "./component/StartGame"

function App() {
const [Isstartgame,SetIsstartgame] = useState(false);

const gametoggles = ()=> {
  SetIsstartgame ((prev)=>!prev)
}
prev = !prev

  return (
    <>
    <StartGame/>
    </>
  )
}

export default App



