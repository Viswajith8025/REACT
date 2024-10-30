import React, { useState } from "react";

export const Togglebgcolor = () => {
  const [color, setColor] = useState("lightgreen");

  let changecolor = () => {
    setColor((prevColor) =>
      prevColor === "lightgreen" ? "lightblue" : "lightgreen"
    );
  };
  console.log(color);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: color }}
    >
      <div>
        <button onClick={changecolor} className="bg-white p-6 btn rounded">
          CHANGE COLOR
        </button>
      </div>
    </div>
  );
};
