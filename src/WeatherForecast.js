import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecas">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date"></div>
          <WeatherIcon code="01d" size={36} />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-max" id="forecast-max">
              19º
            </span>
            <span className="weather-forecast-min" id="forecast-min">
              10º
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
