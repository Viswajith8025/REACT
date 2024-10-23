import React, { useState } from "react";
import axios from "axios";

export const Api = () => {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setdata(response.data);
  };
  console.log(data);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">API DATA</h1>
      <button 
        onClick={fetchdata} 
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mb-4"
      >
        Click me
      </button>
      <div className="w-full max-w-xl">
        {data.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p className="font-bold text-lg">ID: {item.id}</p>
            <p className="text-gray-700">Title: {item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};