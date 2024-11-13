import React from 'react'
import { Logged } from './Logged';
import { NotLogged } from './NotLogged';

export const Main = () => {
    const Logged=true;

  return (
    <div>
        
        {Logged ? <Logged></Logged>:<NotLogged></NotLogged>}
    </div>
  )
}
