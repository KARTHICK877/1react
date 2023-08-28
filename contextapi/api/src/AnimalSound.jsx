import React, {useContext} from 'react'
import { Animalcontext } from './AnimalContext'
function AnimalSound() {
    const {animalSound}=useContext(Animalcontext);

  return (
    <div>AnimalSound is {animalSound}</div>
  )
}

export default AnimalSound