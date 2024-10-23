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
    <div className="container mx-auto p-4">
      <img
        src={data.Poster || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={data.Title || "No title"}
        className="w-full h-auto object-cover"
      />
      <h2 className="text-3xl font-bold my-4">{data.Title || "No title available"}</h2>
      <p><strong>Awards:</strong> {data.Awards || "N/A"}</p>
      <p><strong>Year:</strong> {data.Year || "N/A"}</p>
      <p><strong>Rated:</strong> {data.Rated || "N/A"}</p>
      <p><strong>Released:</strong> {data.Released || "N/A"}</p>
    </div>
  );
};
