import React, { useState } from 'react'

const Key = () => {
    const data=[
        {id:1,name:"jithu",qty:1},
        {id:2,name:"chimbu",qty:2}
    ]
    const[datas,setdatas]=useState(data)
    const change=(id)=>{
        const newitem=datas.map((item)=>
        item.id===id ? {...item ,qty:item.qty+1}:item)
        setdatas(newitem)
    }
  return (
    <div>
        {
            datas.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.qty}</h2>
                    <button onClick={()=>change(item.id)}>+</button>
                    </div>
             ) )
        }
    </div>
  )
}

export default Key