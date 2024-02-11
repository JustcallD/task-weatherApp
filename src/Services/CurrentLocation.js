import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY



const getCurrentWeatherData = async ({ lat, lon }) => {
  console.log(process.env)
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getCurrentWeatherData;
