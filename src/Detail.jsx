import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto p-8 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg">
      <img
        src={data.Poster || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={data.Title || "No title"}
        className="w-60 h-auto object-cover rounded-md shadow-md mb-6"
      />
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        {data.Title || "No title available"}
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-inner text-left">
        <p className="text-lg text-gray-700 mb-2">
          <strong>Awards:</strong> {data.Awards || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Year:</strong> {data.Year || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Rated:</strong> {data.Rated || "N/A"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Released:</strong> {data.Released || "N/A"}
        </p>
      </div>
    </div>
  );
};
