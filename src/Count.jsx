import React, { useState } from "react";

export const mapping = () => {};
export const Count = () => {
  const [count, setCount] = useState(0);
    const [data,setdata] =useState([]);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  let adddata = () => {
    setdata({name:'jithu',age:19});
  }
  console.log(data);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={adddata}>adddata</button>
    </div>
  );
};
