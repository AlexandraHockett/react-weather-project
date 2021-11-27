import React from "react";
import FormattedDate from "./FormattedDate";

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
          <h2 id="temperature">{props.data.temperature}</h2>
          <span className="units">
            <a href="/">ºC</a>|<a href="/">ºF</a>
          </span>
          <span className="feels">feels like</span>
          <div className="feelsDegree" id="feelsLike">
            {props.data.feelsLike}º
          </div>
          <div className="picweather">
            <img src={props.data.imgUrl} alt="Weather pic" id="icon" />
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
