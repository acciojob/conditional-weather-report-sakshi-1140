import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    conditions: "",
  });
  useEffect(() => {
    console.log("comonent mounted");
    const weatherData = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherData);
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}

      <WeatherDisplay temperature={weather.temperature} 
      conditions ={weather.conditions}/>
    </div>
  );
};

export default App;
