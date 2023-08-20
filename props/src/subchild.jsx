import React from 'react'

function subchild(props) {
  return (
    <div>subchild
    <p>this is line {props.names.join('')}</p>


    </div>
  )
}

export default subchild