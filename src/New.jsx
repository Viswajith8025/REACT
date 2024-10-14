import React from "react";
import Image1 from './img/aizen.jpeg';
import Image2 from './img/aizen.jpeg';
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div>`  `
      
      <div className="bg-primary to-black text-center py-5">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-right">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <h1 className="text-3xl font-bold">Corporate & business site</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
              </p>
            <Link to='/new'> <button className="bg-blue-700 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Get Started
              </button></Link> 
              <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Learn More
              </button>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <img
                src={Image1}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto p-4 py-5">
        <div className="flex flex-wrap justify-left">
          <div className="w-full md:w-1/3 xl:w-1/3 p-4">
            <img
              src={Image2}
              className="w-full h-full object-cover rounded mb-3"
            />
            <h3 className="text-2xl font-bold">INTEL CORE I5</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ratione
              fugiat atque libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;