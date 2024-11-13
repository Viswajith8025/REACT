import React, { useState } from "react";

const Countt = () => {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  console.log(data);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Countt;
