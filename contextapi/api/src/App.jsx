import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AnimalSound from './AnimalSound'
import { AnimalProvider } from './AnimalContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <AnimalProvider>
    <h1>animalSound is <AnimalSound/> </h1>
 <AnimalSound/>
  </AnimalProvider>
  )
}

export default App
