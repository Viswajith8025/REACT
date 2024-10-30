import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link to={`/detail/${movie.imdbID}`} className="block">
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2 text-center">
        <h3 className="text-lg font-semibold text-white truncate">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
