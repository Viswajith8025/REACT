import React, { useState } from 'react';
import axios from 'axios';

export const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0cf3d05c6cb443424f42856d18e090b3`
            );
            setWeatherData(response.data);
            setError(''); 
        } catch (err) {
            console.error("Failed to retrieve weather data:", err);
            setError("Unable to fetch weather data. Please try again.");
        }
    };

    const handleInputChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600">
            <div className="w-full max-w-md p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter a city name"
                        className="w-full p-2 rounded text-black"
                        onChange={handleInputChange}
                        value={location}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={fetchWeather}
                        className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-400 transition duration-300"
                    >
                        Get Weather
                    </button>
                </div>

                {error && (
                    <div className="mt-4 text-red-500 text-center">{error}</div>
                )}

                {weatherData && (
                    <div className="mt-6 bg-gray-700 text-white p-4 rounded">
                        <h2 className="text-xl font-bold">Weather in {weatherData.name}</h2>
                        <p><strong>Temperature:</strong> {weatherData.main.temp} °F</p>
                        <p><strong>Humidity:</strong> {weatherData.main.humidity} %</p>
                        <p><strong>Conditions:</strong> {weatherData.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
