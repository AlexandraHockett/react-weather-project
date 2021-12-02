import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
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

  function CurrentLocation(event) {
    event.preventDefault();

    function currentLocation(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "06fbd7d55cead2045835eef5076a763f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(currentLocation);
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
            <button onClick={CurrentLocation}>Current Location</button>
          </form>
          <br />
        </div>
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
