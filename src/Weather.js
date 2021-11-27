import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Updated on Sat/Oct 30, 14:28",
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="citySearch">
          <form>
            <input
              type="search"
              placeholder="Type a city..."
              autoComplete="off"
            />
            <input type="submit" value="Search" className="search" />
            <button>Current Location</button>
          </form>
          <br />
        </div>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 id="temperature">{weatherData.temperature}</h2>
            <span className="units">
              <a href="/">ºC</a>|<a href="/">ºF</a>
            </span>
            <span className="feels">feels like</span>
            <div className="feelsDegree" id="feelsLike">
              {weatherData.feelsLike}º
            </div>
            <div className="picweather">
              <img src={weatherData.imgUrl} alt="Weather pic" id="icon" />
            </div>
            <span className="picDescription" id="description">
              {weatherData.description}
            </span>
          </div>
          <div className="col-md-6">
            <ul className="details">
              <li>
                <strong>Máx: </strong>
                {weatherData.máx}º
              </li>
              <li>
                <strong>Min: </strong>
                {weatherData.min}º
              </li>
              <li>
                <strong>Humidity:</strong>
                {weatherData.humidity}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "06fbd7d55cead2045835eef5076a763f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
