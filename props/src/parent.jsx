import React from 'react'
import child from './child';
function parent() {
    const names = ["karthick", "is","completed","degree"];
  return (
    <div>parent
        <h1>my line</h1>
        <child names={names}></child>
    </div>
  )
}


export default parent