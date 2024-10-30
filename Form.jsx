import React, { useState } from 'react';

export const Formset = () => {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-8 w-96 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700">Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"

                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"

                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Age:</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phoneNumber"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your Address"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-1/2 bg-gray-500 text-white py-2 ml-2 rounded hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
