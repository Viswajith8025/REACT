import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export const Netflix = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`
      );
      setData(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-6 bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-center">Movie Finder</h1>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="border border-gray-600 bg-gray-800 p-2 rounded-l-md w-1/2"
            placeholder="Search for a movie..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            className="bg-red-600 text-white p-2 rounded-r-md hover:bg-red-700"
            onClick={fetchData}
          >
            Search
          </button>
        </div>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.map((item) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </div>
      </main>
      <footer className="p-4 text-center bg-gray-800">
        <p className="text-gray-400">Powered by OMDb API</p>
      </footer>
    </div>
  );
};
