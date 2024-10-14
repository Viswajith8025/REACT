import React from 'react';
import { Link } from 'react-router-dom';

const Homee = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page Of Viswajith</h1>
      
      <div className="space-y-4">
        <Link to="/About">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          ഞങ്ങളെ കുറിച്ച്
          </button>
        </Link>

        <Link to="/Contact">
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          ഞങ്ങളെ ബന്ധപ്പെടുക
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homee;
