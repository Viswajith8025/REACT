import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Counterslice'



export const Viewcart = () => {

    const cart = useSelector((state) => state.counter.data);
    const dispatch = useDispatch();
    console.log(cart);
  
    console.log(cart);
  return (
    <div className='bg-[#B08968] h-[1000px] w-full'>

    <div class="relative overflow-x-auto pt-12 w-[800px] m-auto">
      <h1 className='text-center text-[30px] font-bold'>Shopping cart</h1>
      
   
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6">
            <thead class="text-xs uppercase bg-[#7F5539] text-white dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        producth
                    </th>
                    <th scope="col" class="px-6 py-3">
                       quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>
                    
                </tr>
            </thead>
            {cart.map((item,index)=>(
            <tbody className=''>
            
                <tr key={index} class=" border-b dark:bg-gray-800 dark:border-gray-700 bg-[#EDE0D4]">
                   
                    <td class="px-6 py-4">
                      {item.name}
                    </td>
                    <td class="px-6 py-4">
                 {item.quantity}
                    </td>
                     <td class="px-6 py-4"><div className='flex justify-evenly'><button onClick={()=>dispatch(increment(item.id))} className='bg-[#7F5539] border  w-10 h-10 text-white font-bold'>+</button>
                     <button onClick={()=>dispatch(decrement(item.id))} className='bg-[#7F5539] border  w-10 h-10 text-white font-bold'>-</button></div></td>
                </tr>
                
         
                
            </tbody>
            ))}
        </table>
       
    </div>
    
    </div>
    
  )
}