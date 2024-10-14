import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Website</h1>
        
        <Link to='/login'><button
          onClick={handleLogin}
          className="bg-fuchsia-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mb-4 w-40"
        >
          Login
        </button></Link>

        <Link to='/signup'><button
          onClick={handleSignUp}
          className="bg-amber-950 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-40"
        >
          Sign Up
        </button></Link>
      </div>
    </div>
  );
};

export default HomePage;
