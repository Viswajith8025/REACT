import React from 'react'
import{ Child } from './Child'
import img from './Img/evo.jpeg'
export const Parent = () => {
  return (
    <div>
        <Child name={"Frauds "} image={img} />
        <Child name={"Hari"}/>
        <Child name={"adharsh"}/>
        <Child name={"ananthu"}/>
        </div>
  )
}
 