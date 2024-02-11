import React, { useState } from "react";
import styles from "../Styles/Components/WeatherCard.module.css";
import { MdLocationCity } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import {
  FaCloud,
  FaSun,
  FaCloudRain,
  FaCloudSun,
  FaSnowflake,
  FaWind,
  FaSmog,
  FaBolt,
} from "react-icons/fa";
import { LuHaze } from "react-icons/lu";
import { FiWind } from "react-icons/fi";

const WeatherCard = ({ weatherData }) => {
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15; // Convert Kelvin to Celsius
  };

  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temperature = isCelsius
    ? `${kelvinToCelsius(weatherData.main.temp).toFixed(2)}°C`
    : `${((weatherData.main.temp * 9) / 5 + 32).toFixed(2)}°F`;

  const weatherIcons = {
    Clear: <FaSun className={styles.icon} />,
    Clouds: <FaCloud className={styles.icon} />,
    Rain: <FaCloudRain className={styles.icon} />,
    Drizzle: <FaCloudSun className={styles.icon} />,
    Snow: <FaSnowflake className={styles.icon} />,
    Mist: <FaCloudSun className={styles.icon} />,
    Smoke: <FaSmog className={styles.icon} />,
    Haze: <LuHaze className={styles.icon} />,
    Dust: <FaSmog className={styles.icon} />,
    Fog: <FaSmog className={styles.icon} />,
    Sand: <FaSmog className={styles.icon} />,
    Ash: <FaSmog className={styles.icon} />,
    Squall: <FaWind className={styles.icon} />,
    Tornado: <FaWind className={styles.icon} />,
    Thunderstorm: <FaBolt className={styles.icon} />,
    VolcanicAsh: <FaSmog className={styles.icon} />,
    BlowingSnow: <FaSnowflake className={styles.icon} />,
    Hurricane: <FaWind className={styles.icon} />,
    DustStorm: <FaSmog className={styles.icon} />,
    Sandstorm: <FaSmog className={styles.icon} />,
    Sleet: <FaSnowflake className={styles.icon} />,
    FreezingRain: <FaCloudRain className={styles.icon} />,
    IcePellets: <FaSnowflake className={styles.icon} />,
    TornadoWarning: <FaWind className={styles.icon} />,
    TropicalStorm: <FaWind className={styles.icon} />,
    // as much possible i am tried to added
  };

  const weatherCondition = weatherData.weather[0].main;
  const weatherIcon = weatherIcons[weatherCondition];
  return (
    <div className={styles.weatherCard}>
      <div className={styles.topbar}>
        <div className={styles.section}>
          <h2 className={`${styles.cityName}`}>
            <MdLocationCity className={`${styles.icon}`} />
            {weatherData.name}
          </h2>
          <p className={`${styles.temperature}`}>
            <CiTempHigh className={`${styles.icon}`} /> {temperature}
          </p>
        </div>
        <button onClick={toggleTemperatureUnit} className={`${styles.btn} `}>
          {isCelsius ? (
            <TbTemperatureCelsius
              className={`${styles.icon}${styles.icontext} `}
            />
          ) : (
            <TbTemperatureFahrenheit
              className={`${styles.icon}${styles.icontext} `}
            />
          )}
        </button>
      </div>

      <div className={styles.bottombar}>
        <div className={`${styles.text}`}>
          {weatherIcon}
          <span className={`${styles.text}`}>
            {weatherData.weather[0].description}
          </span>
        </div>
        <div className={`${styles.text}`}>
          <FiWind className={`${styles.icon} `} />
          <span className={`${styles.text}`}>{weatherData.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
