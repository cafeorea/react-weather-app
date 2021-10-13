import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "34bd50dfdf721a76e86cefddc8b2767d";
  let unit = "metric";
  let city = "Edinburgh";
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  function handleResponse(response) {
    let icon = response.data.weather[0].icon;
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      maxTemp: Math.round(response.data.main.temp_max),
      condition: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
    });
    setReady(true);
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${apiKey}`;
    axios.get(forecastUrl).then(displayForecast);
  }

  function displayForecast(response) {
    let iconOne = response.data.daily[1].weather[0].icon;
    let iconTwo = response.data.daily[2].weather[0].icon;
    let iconThree = response.data.daily[3].weather[0].icon;
    let iconFour = response.data.daily[4].weather[0].icon;
    let iconFive = response.data.daily[5].weather[0].icon;
    setForecastData({
      dayOne: Math.round(response.data.daily[1].temp.max),
      iconUrlOne: `http://openweathermap.org/img/wn/${iconOne}@2x.png`,
      dayTwo: Math.round(response.data.daily[2].temp.max),
      iconUrlTwo: `http://openweathermap.org/img/wn/${iconTwo}@2x.png`,
      dayThree: Math.round(response.data.daily[3].temp.max),
      iconUrlThree: `http://openweathermap.org/img/wn/${iconThree}@2x.png`,
      dayFour: Math.round(response.data.daily[4].temp.max),
      iconUrlFour: `http://openweathermap.org/img/wn/${iconFour}@2x.png`,
      dayFive: Math.round(response.data.daily[5].temp.max),
      iconUrlFive: `http://openweathermap.org/img/wn/${iconFive}@2x.png`,
    });
  }

  if (ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 cityInfo">
            <h1 className="cityName text-capitalize">Edinburgh</h1>
            <h2 className="citySummary text-capitalize">
              {weatherData.condition}
            </h2>
          </div>
          <div className="col-4 weatherIcon">
            <img
              className="mainIcon"
              src={weatherData.iconUrl}
              alt="Weather Icon"
            />
          </div>
          <div className="centreTemp">
            <h2 className="tempBig">
              {weatherData.temperature}
              <span className="celFar">°C</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-6 weatherInfo">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.speed} m/s</li>
              </ul>
            </div>
            <div className="col-6 weatherInfo">
              <li>Max temp: {weatherData.maxTemp}°C</li>
              <li>Feels like: {weatherData.feelsLike}°C</li>
            </div>
          </div>
          <div className="row forecast">
            <div className="col forecast1">
              <h3 className="foreDay foreDay1">Tues</h3>
              <img
                className="foreIcon foreIcon1"
                src={forecastData.iconUrlOne}
                alt="Weather Icon"
              />
              <h4 className="foreTemp foreTemp1">{forecastData.dayOne}°C</h4>
            </div>
            <div className="col forecast2">
              <h3 className="foreDay foreDay2">Wed</h3>
              <img
                className="foreIcon foreIcon2"
                src={forecastData.iconUrlTwo}
                alt="Weather Icon"
              />
              <h4 className="foreTemp foreTemp2">{forecastData.dayTwo}°C</h4>
            </div>
            <div className="col forecast3">
              <h3 className="foreDay foreDay3">Thurs</h3>
              <img
                className="foreIcon foreIcon3"
                src={forecastData.iconUrlThree}
                alt="Weather Icon"
              />
              <h4 className="foreTemp foreTemp3">{forecastData.dayThree}°C</h4>
            </div>
            <div className="col forecast4">
              <h3 className="foreDay foreDay4">Fri</h3>
              <img
                className="foreIcon foreIcon4"
                src={forecastData.iconUrlFour}
                alt="Weather Icon"
              />
              <h4 className="foreTemp foreTemp4">{forecastData.dayFour}°C</h4>
            </div>
            <div className="col forecast5">
              <h3 className="foreDay foreDay5">Sat</h3>
              <img
                className="foreIcon foreIcon5"
                src={forecastData.iconUrlFive}
                alt="Weather Icon"
              />
              <h4 className="foreTemp foreTemp5">{forecastData.dayFive}°C</h4>
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
          <div className="row">
            <div className="col-6 dateTime">
              <p className="bottomText">
                Last Update:{" "}
                <span className="dateText">Friday, Jun 3 2021</span>
              </p>
            </div>
            <div className="col-6 celFarSwitch">
              <p className="bottomText">
                View temperature in{" "}
                <span className="celFarText">Fahrenheit</span>
              </p>
            </div>
          </div>
          <div className="Footer">
            <p>
              React Weather App built by{" "}
              <a href="https://github.com/lincodes">Lin</a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    // const apiKey = "34bd50dfdf721a76e86cefddc8b2767d";
    // let unit = "metric";
    // let city = "Edinburgh";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
