import React, { useState } from 'react'

export const Bg = () => {
    const[toggle,setToggle]=useState(true)

    const togglecolor=()=>{
        setToggle(!toggle)
    }
    console.log(toggle);
    
  return (
    <div>
        <div style={{height:'300px',width:'300px',backgroundColor:toggle ? 'blue':'green'}}></div>
        <button onClick={togglecolor}>change</button>
    </div>
  )
}