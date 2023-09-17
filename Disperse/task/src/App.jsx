import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Disperse from './Disperse'
import './Disperse.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='disperse-container'>

      <Disperse/>
    </div>
  )
}

export default App
