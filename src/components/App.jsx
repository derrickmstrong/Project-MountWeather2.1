import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import moment from 'moment';

function App() {
  // Setup useState
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Birmingham');

  // Link apiKey to .env file
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  // Create url to endpoint
  // https://openweathermap.org/forecast5
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=40&appid=${apiKey}`;

  // Setup fetch call
  const fetchAPI = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchAPI(); // Returns promise
    return () => {}; // Cleanup function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]); // Dependency array

  // Update city state onClick
  const handleClick = (e) => {
    const value = document.querySelector('#search-city').value;
    setCity(`${value}`);
  };

  // Setup weather inner objects
  const LIST = weather.list;
  const CITY = weather.city;

  // Setup sunrise
  const sunriseData = weather.city && CITY.sunrise;
  const sunriseDate = new Date(sunriseData * 1000);
  const sunrise = sunriseDate.toLocaleTimeString();

  // Setup sunset
  const sunsetData = weather.city && CITY.sunset;
  const sunsetDate = new Date(sunsetData * 1000);
  const sunset = sunsetDate.toLocaleTimeString();

  // Number of future forecast to display - Necessary due to how the API is setup
  const numOfFutureForecasts = [1, 2, 3, 4, 5, 6, 7, 8];

  // Current time on page load
  const time = moment().calendar();

  return (
    <Fragment>
      <div className='current-forecast my-4 mx-4'>
        <div class='input-group mb-3 form'>
          <input
            id='search-city'
            type='text'
            class='form-control text-center'
            placeholder='Search ex. Birmingham, Alabama'
          />
          <div class='input-group-append'>
            <button
              class='btn btn-primary'
              type='button'
              id='button-addon2'
              onClick={handleClick}>
              Search
            </button>
          </div>
        </div>

        {CITY && (
          <Fragment>
            <Fragment>
              {LIST[0].main && (
                <Fragment>
                  <div class='card m-3 text-center' style={{ width: '18rem' }}>
                    <p className='city'>
                      {CITY.name
                        ? `${city}, ${CITY.country}`
                        : 'Opps! Try again'}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${LIST[0].weather[0].icon}@2x.png`}
                      alt='icon'
                      style={{ width: '8rem' }}
                      className='img-fluid mx-auto d-block'
                    />
                    <div class='card-body text-center'>
                      <h5 class='card-title'>
                        {LIST[0].main.temp.toFixed(0)}{' '}
                        <span
                          className='degrees'
                          role='img'
                          aria-label='degrees'>
                          o
                        </span>{' '}
                        F
                      </h5>
                      <p class='card-text'>
                        <strong>
                          {LIST[0].weather[0].description.toUpperCase()[0]}
                          {LIST[0].weather[0].description.slice(1)}
                        </strong>
                      </p>
                      <p className='small'>As of {time}</p>
                    </div>
                    <ul class='list-group list-group-flush'>
                      <li class='list-group-item'>
                        {LIST[0].main.temp_max.toFixed(0)}/
                        {LIST[0].main.temp_min.toFixed(0)} F 🌡️ Feels like{' '}
                        {LIST[0].main.feels_like.toFixed(0)} F
                      </li>
                      <li class='list-group-item'>
                        <span className=''>
                          <p>Going out?</p>
                          {LIST[0].main.feels_like.toFixed(0) >= 90
                            ? 'Dress Light 👗🎽'
                            : LIST[0].main.feels_like.toFixed(0) <= 89 &&
                              LIST[0].main.feels_like.toFixed(0) >= 80
                            ? 'Try Short Sleeves 👕'
                            : LIST[0].main.feels_like.toFixed(0) <= 79 &&
                              LIST[0].main.feels_like.toFixed(0) >= 70
                            ? 'Long sleeves might work 👔'
                            : LIST[0].main.feels_like.toFixed(0) <= 69 &&
                              LIST[0].main.feels_like.toFixed(0) >= 60
                            ? 'Bring a Jacket or a Kimono 👘'
                            : LIST[0].main.feels_like.toFixed(0) <= 59 &&
                              LIST[0].main.feels_like.toFixed(0) >= 50
                            ? 'Try a Bigger Coat 🧥'
                            : LIST[0].main.feels_like.toFixed(0) <= 49 &&
                              LIST[0].main.feels_like.toFixed(0) >= 40
                            ? 'Double UP, its Nippy 🌬️'
                            : LIST[0].main.feels_like.toFixed(0) <= 39 &&
                              LIST[0].main.feels_like.toFixed(0) >= 30
                            ? 'Bring a Scarf 🧶'
                            : LIST[0].main.feels_like.toFixed(0) <= 29 &&
                              LIST[0].main.feels_like.toFixed(0) >= 20
                            ? 'Really?!?! 🥶'
                            : LIST[0].main.feels_like.toFixed(0) <= 19
                            ? 'Just Stay Home 🏠!'
                            : null}
                        </span>
                      </li>
                      <li class='list-group-item'>
                        <span className='small mr-1'>
                          <span role='img' aria-label='sunrise'>
                            🌅
                          </span>{' '}
                          Rise: {sunrise}
                        </span>
                        <span className='small'>
                          <span role='img' aria-label='sunset'>
                            🌇
                          </span>{' '}
                          Set: {sunset}
                        </span>
                      </li>
                    </ul>
                  </div>
                </Fragment>
              )}
            </Fragment>
          </Fragment>
        )}
      </div>

      <h2 className='future-forecast'>24-hr Extended Forecast</h2>
      <div className='future-forecast'>
        {LIST &&
          numOfFutureForecasts.map((forecast) => {
            return (
              <Fragment>
                {LIST[forecast].main && (
                  <div className='future-forecast'>
                    <div
                      className='card m-3 future-forecast'
                      style={{ width: '12.5rem' }}>
                      <p>
                        {forecast === 1
                          ? moment().add(3, 'hours').calendar()
                          : forecast === 2
                          ? moment().add(6, 'hours').calendar()
                          : forecast === 3
                          ? moment().add(9, 'hours').calendar()
                          : forecast === 4
                          ? moment().add(12, 'hours').calendar()
                          : forecast === 5
                          ? moment().add(15, 'hours').calendar()
                          : forecast === 6
                          ? moment().add(18, 'hours').calendar()
                          : forecast === 7
                          ? moment().add(21, 'hours').calendar()
                          : forecast === 8
                          ? moment().add(24, 'hours').calendar()
                          : forecast === 9
                          ? moment().add(25, 'hours').calendar()
                          : forecast === 10
                          ? moment().add(28, 'hours').calendar()
                          : forecast === 11
                          ? moment().add(31, 'hours').calendar()
                          : forecast === 12
                          ? moment().add(34, 'hours').calendar()
                          : null}
                      </p>
                      <img
                        src={`https://openweathermap.org/img/wn/${LIST[forecast].weather[0].icon}@2x.png`}
                        alt='icon'
                        className='icon'
                        style={{ width: '7rem' }}
                      />
                      <div class='card-body'>
                        <h5 class='card-title text-center'>
                          {LIST[forecast].main.temp.toFixed(0)} F
                        </h5>
                        <p class='card-text'>
                          {
                            LIST[
                              forecast
                            ].weather[0].description.toUpperCase()[0]
                          }
                          {LIST[forecast].weather[0].description.slice(1)}
                        </p>
                      </div>
                      <ul class='list-group list-group-flush'>
                        <li class='list-group-item small mb-4'>
                          <p className='mr-2'>
                            High: {LIST[forecast].main.temp_max.toFixed(0)} F
                          </p>
                          <p className='ml-2'>
                            Low: {LIST[forecast].main.temp_min.toFixed(0)} F
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
      </div>
    </Fragment>
  );
}

export default App;
