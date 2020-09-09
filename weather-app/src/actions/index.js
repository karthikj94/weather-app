import axios from 'axios'
import constant from '../resources'
import { UPDATE_WEATHER, UPDATE_TEMPERATURE, UPDATE_HUMIDITY, UPDATE_WIND, SET_ERROR_MESSAGE, RESET_WEATHER } from '../constants'
import { get as _get } from 'lodash';

export function fetchWeather(city) {
  return async dispatch => {
    try {
      let url = `${constant.WEATHER_API}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`, currentWeather, currentTemperature, currentHumidity, currentWindSpeed
      const response = await axios.get(url);
      if(response && response.data)
      currentWeather = _get(response.data, 'weather[0].description')
      currentTemperature = _get(response.data, 'main.temp')
      currentHumidity = _get(response.data, 'main.humidity')
      currentWindSpeed = _get(response.data, 'wind.speed')
      dispatch(updateWeatherData(currentWeather));
      dispatch(updateTemperatureData(currentTemperature));
      dispatch(updateHumidityData(currentHumidity));
      dispatch(updateWindData(currentWindSpeed));
    }
    catch(error) {
      dispatch(setErrorMessage(constant.INVALID_CITY));
    }
    return 'done';
  }
}

export const resetWeatherInformation = () => (dispatch) => {
  dispatch(resetWeather())
}

function updateWeatherData(payload) {
  return {
    type: UPDATE_WEATHER,
    payload
  };
}

function updateTemperatureData(payload) {
  return {
    type: UPDATE_TEMPERATURE,
    payload
  };
}

function updateHumidityData(payload) {
  return {
    type: UPDATE_HUMIDITY,
    payload
  };
}

function updateWindData(payload) {
  return {
    type: UPDATE_WIND,
    payload
  };
}

function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload
  }
}

function resetWeather() {
  return {
    type: RESET_WEATHER
  }
}
