import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Newapp = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    if (search.trim() === "") {
      return; // avoid making an API call if the search input is empty
    }

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">EVENTS & MOVIES</h1>
      <div className="flex justify-center mb-4">
        <input
          className="border border-gray-300 p-2 rounded-l-md w-1/2"
          placeholder="Search for a movie..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.imdbID}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Link to={`/detail/${item.imdbID}`}>
                <img
                  src={item.Poster}
                  alt={item.Title}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4">
                <p className="text-lg font-semibold">{item.Title}</p>
                <p className="text-gray-600">Year: {item.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};
