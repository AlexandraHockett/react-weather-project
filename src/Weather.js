import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    date: "Updated on Sat/Oct 30, 14:28",
    temperature: "20",
    feelsLike: "20º",
    imgUrl: "http://openweathermap.org/img/wn/09d@2x.png",
    description: "Light intensity drizzle rain",
    máx: "21º",
    min: "18º",
    humidity: "92%",
  };

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
            {weatherData.feelsLike}
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
              {weatherData.máx}
            </li>
            <li>
              <strong>Min: </strong>
              {weatherData.min}
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
}
