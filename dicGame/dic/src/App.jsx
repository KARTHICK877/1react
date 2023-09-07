
import { useState } from 'react'

import StartGame from "./component/StartGame"
import GamePlay from './component/GamePlay'
function App() {
const [Isstartgame,SetIsstartgame] = useState(true);

const gametoggles = ()=> {
  SetIsstartgame ((prev)=>!prev)
}


  return (
    <>
    {Isstartgame ? <GamePlay/>:<StartGame toggle = {gametoggles}/>}
    
    </>
  )
}

export default App
