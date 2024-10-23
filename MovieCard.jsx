// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group">
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">{movie.Title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
