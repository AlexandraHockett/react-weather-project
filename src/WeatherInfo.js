import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <WeatherTemperature celsius={props.data.temperature} />
          <span className="feels">feels like</span>
          <div className="feelsDegree" id="feelsLike">
            {props.data.feelsLike}º
          </div>
          <div className="picweather">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <span className="picDescription" id="description">
            {props.data.description}
          </span>
        </div>
        <div className="col-md-6">
          <ul className="details">
            <li>
              <strong>Máx: </strong>
              {props.data.máx}º
            </li>
            <li>
              <strong>Min: </strong>
              {props.data.min}º
            </li>
            <li>
              <strong>Humidity:</strong>
              {props.data.humidity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
