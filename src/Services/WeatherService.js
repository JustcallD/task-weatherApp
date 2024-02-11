import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const WeatherService = {
  getWeatherData: async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default WeatherService;
