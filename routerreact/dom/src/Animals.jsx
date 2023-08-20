import React from 'react'
import{useParams} from 'react-router-dom'
function Animals() {
    const {name}=useParams();
    const animals = {
        dog:"GOOD behaviors",
        cat:"so independents behaviors",
        fish:"so thiny behaviors"

    }

    const info = animals[name]|| "not found";
  return (<div>
    <h1>
        {/* {name.charAt(0).toUpperCase + name.slice(1)} */}
        {name}
    </h1>
    <p>{info}</p>
    </div>
  )
}

export default Animals