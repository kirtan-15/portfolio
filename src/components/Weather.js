import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        )
          .then((res) => res.json())
          .then((data) => {
            setWeather(data.current_weather);
          })
          .catch(() => setError("Failed to fetch weather"));
      },
      () => setError("Permission denied or unavailable.")
    );
  }, []);

  return (
    <div className="projects" style={{ maxWidth: 600 }}>
      <h2>Current Weather</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather ? (
        <div className="section" style={{ textAlign: "left" }}>
          <p>
            <strong>Temperature:</strong> {weather.temperature}°C
          </p>
          <p>
            <strong>Wind speed:</strong> {weather.windspeed} km/h
          </p>
         
        </div>
      ) : (
        !error && <p>Fetching weather…</p>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Weather;
