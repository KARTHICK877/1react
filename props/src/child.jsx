import React from 'react'
import subchild from './subchild'
function child(props) {
  return (
    <div>child
        <Ul>
            {props.names.map((name,index)=>(
            <li key={index}>{name}</li>
          )  )}
        </Ul>
        <subchild names={props.names}></subchild>
    </div>
  )
}

export default child