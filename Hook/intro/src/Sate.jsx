import React, { useEffect, useState } from 'react'

function Sate() {

  const[data,setdata]  =useState([])
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState(null)
  const url="https://jsonplaceholder.typicode.com/users"
 
  useEffect{() =>
  fetch(url).then((response) =>{
    return response.json()
  })
.then((data)=>{
    setdata(data)
    setloading(false)
  })
.catch((error)=>{
    seterror(error)
    setloading(false)
  })}








  return (
    <div>Sate</div>
  )
}

export default Sate