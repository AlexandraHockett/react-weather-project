import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      imgUrl: "http://openweathermap.org/img/wn/09d@2x.png",
      description: response.data.weather[0].description,
      máx: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "06fbd7d55cead2045835eef5076a763f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="citySearch">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a city..."
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search" />
            <button>Current Location</button>
          </form>
          <br />
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
