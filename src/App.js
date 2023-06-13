import React, { useState } from 'react';
import axios from 'axios';

<link rel="stylesheet" type="public/src" href="/src/style.css" />


function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`/weather?location=${location}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Current Weather</h2>
          <p>Location: {weatherData.location}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Weather Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
}

export default App;