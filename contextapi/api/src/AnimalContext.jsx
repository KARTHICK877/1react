import React, { createContext, useContext, useState} from 'react'
 const Animalcontext = createContext();
 
 
 function AnimalProvider({Children}){
    const [animalSound,setAnimalSound] = useState('meow')
    
    return(
        <Animalcontext.Provider value={{animalSound,setAnimalSound}}>
            {Children}
        </Animalcontext.Provider>
    );

 }
 export{Animalcontext, AnimalProvider}