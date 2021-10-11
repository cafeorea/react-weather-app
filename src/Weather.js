import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 cityInfo">
          <h1 className="cityName">Edinburgh</h1>
          <h2 className="citySummary">Currently cloudy</h2>
        </div>
        <div className="col-4 weatherIcon">
          <img
            className="mainIcon"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Weather Icon"
          />
        </div>
        <div className="centreTemp">
          <h2 className="tempBig">
            12<span className="celFar">°C</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-6 weatherInfo">
            <ul>
              <li>Precipitation: 3%</li>
              <li>Humidity: 60%</li>
            </ul>
          </div>
          <div className="col-6 weatherInfo">
            <li>Wind: 7 m/s</li>
            <li>Feels like: 8°C</li>
          </div>
        </div>
        <div className="row forecast">
          <div className="col forecast1">
            <h3 className="foreDay foreDay1">Tues</h3>
            <img
              className="foreIcon foreIcon1"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
            <h4 className="foreTemp foreTemp1">10°C</h4>
          </div>
          <div className="col forecast2">
            <h3 className="foreDay foreDay2">Wed</h3>
            <img
              className="foreIcon foreIcon2"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
            <h4 className="foreTemp foreTemp2">12°C</h4>
          </div>
          <div className="col forecast3">
            <h3 className="foreDay foreDay3">Thurs</h3>
            <img
              className="foreIcon foreIcon3"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
            <h4 className="foreTemp foreTemp3">10°C</h4>
          </div>
          <div className="col forecast4">
            <h3 className="foreDay foreDay4">Fri</h3>
            <img
              className="foreIcon foreIcon4"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
            <h4 className="foreTemp foreTemp4">10°C</h4>
          </div>
          <div className="col forecast5">
            <h3 className="foreDay foreDay5">Sat</h3>
            <img
              className="foreIcon foreIcon5"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
            <h4 className="foreTemp foreTemp5">7°C</h4>
          </div>
        </div>
        <div className="Search">
          <form>
            <div className="row">
              <div className="col-8 searchBar">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-2 submitButton">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-2 localButton">
                <input
                  type="submit"
                  value="Local"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
