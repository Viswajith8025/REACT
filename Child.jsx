import React from 'react'

export const Child = (props) => {
  return (
   <div>
    <h1>{props.name}</h1>
    <div><img src={props.image}></img></div>
    </div>
  )
}

