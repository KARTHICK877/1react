import axios from "axios"
import React, { useEffect, useState } from 'react'
  
 const url = "https://jsonplaceholder.typicode.com/posts/1";
function Axios() {
    const [post , setpost]=useState("null")
    useEffect(()=>{
        axios.get(url).then((response) => {
            setpost(response.data);


        })
    },[]);
    // if (!post) return null
  return (
    <div><h1>Axios</h1> 
       <h4>{post.title}</h4>
       <h5>{post.body}</h5>
       <p></p>
    </div>
  )
}

export default Axios