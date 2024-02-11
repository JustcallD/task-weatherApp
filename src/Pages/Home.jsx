import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import WeatherCard from "../Components/WeatherCard";
import WeatherService from "../Services/WeatherService";
import ErrorDisplay from "../Components/ErrorDisplay";
import styles from "../Styles/Pages/Home.module.css";
import Sidebar from "../Container/Sidebar";
import getCurrentWeatherData from "../Services/CurrentLocation";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const getUserLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };

    const getUserLocationData = async () => {
      try {
        const location = await getUserLocation();
        const lat = location.latitude;
        const lon = location.longitude;
        const response = await getCurrentWeatherData({ lat, lon });
        console.log(response);
        setWeatherData(response);
      } catch (error) {
        console.error("Error getting user location:", error);
        setError(error.message);
      }
    };

    getUserLocationData();
  }, []);

  const handleSearch = async (city) => {
    try {
      const data = await WeatherService.getWeatherData(city);
      setWeatherData(data);
      setError(null);

      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;
      if (!recentSearches.some((search) => search.city === city)) {
        const updatedSearches = [
          { city, temperature, windSpeed },
          ...recentSearches.slice(0, 4),
        ];
        setRecentSearches(updatedSearches);
      }
    } catch (error) {
      setError("City not found or API error.");
      setWeatherData(null);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar onSearch={handleSearch} recentSearches={recentSearches} />
        {error && <ErrorDisplay error={error} />}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default Home;
