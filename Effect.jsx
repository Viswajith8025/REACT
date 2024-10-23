import React, { useEffect, useState } from "react";

export const Effect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  let increment = () => {
    setCount(count + 1);
  };
  let increment1 = () => {
    setCount1(count1 + 1);
  };
  useEffect(() => {
    console.log("Run baby Run");
  }, [count1]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>click</button>
      <h2>{count1}</h2>
      <button onClick={increment1}>click</button>
    </div>
  );
};
