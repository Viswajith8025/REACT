import React from 'react'
import "./Profilecards.css"

export const Profilecards = (props) => {
  return (
    <div className='child'>
      <img src={props.image} alt="IMAGE NOT FOUND" />
      <h2>{props.name}</h2>
      <h3>{props.model}</h3>
    </div> 
  )
}