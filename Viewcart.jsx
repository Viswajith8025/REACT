import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from './Counterslice';
import { Link } from 'react-router-dom';

export const Viewcart = () => {
  const cart = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();

  return (
    <div className='bg-blue-300 min-h-screen w-full p-8'>
      <div className='relative overflow-x-auto w-[800px] m-auto bg-white rounded-lg shadow-lg p-6'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold'>SHOEKART</h1>
          <Link to='/shoekart'>
            <button className='bg-purple-600 text-white px-4 py-2 rounded'>
              Back to Shoekart
            </button>
          </Link>
        </div>

        <table className='w-full text-sm text-left text-gray-700'>
          <thead className='text-xs uppercase bg-purple-400 text-black'>
            <tr>
              <th className='px-6 py-3'>Product</th>
              <th className='px-6 py-3 text-center'>Quantity</th>
              <th className='px-6 py-3 text-center'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan='3' className='text-center py-6'>
                  <h2 className='text-xl font-bold'>YOUR CART IS EMPTY</h2>
                </td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index} className='border-b bg-[#EDE0D4]'>
                  <td className='px-6 py-4 font-semibold'>{item.name}</td>
                  <td className='px-6 py-4 text-center'>{item.quantity}</td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-center space-x-4'>
                      <button
                        onClick={() => dispatch(increment(item.id))}
                        className='bg-amber-900 w-10 h-10 text-white font-bold rounded'
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(decrement(item.id))}
                        className='bg-amber-900 w-10 h-10 text-white font-bold rounded'
                      >
                        -
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className='bg-amber-950 text-white px-3 py-1 rounded'
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewcart;
