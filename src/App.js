// import React, { useState } from 'react';

// const WeatherApp = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude });
//         },
//         error => {
//           console.error('Error getting user location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div>
//       <header>
//         <h1>Weather App</h1>
//         <nav>
//           {/* Navigation links go here */}
//         </nav>
//       </header>
//       <button onClick={getUserLocation}>Get My Location</button>
//       {userLocation && (
//         <div>
//           <p>Latitude: {userLocation.latitude}</p>
//           <p>Longitude: {userLocation.longitude}</p>
//           {/* Now you can use the user's location to fetch weather data */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;

import React from "react";
import Home from "./Pages/Home";

import {Route , Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
