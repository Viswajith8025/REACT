import React, { useState } from 'react'
import Themecontext from './Themecontext'

export const Themeprovider = ({children}) => {
    const[theme,settheme]=useState('light')

    let toggletheme=()=>{
      settheme((prevtheme)=>(prevtheme==='light'?'dark' :'light'));
    }

  return (
    <div>
        <Themecontext.Provider value={{theme,toggletheme}}>
{children}
        </Themecontext.Provider>
    </div>
  )
}