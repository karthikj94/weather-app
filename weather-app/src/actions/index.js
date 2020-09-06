import axios from 'axios'
import constant from '../resources'
import { UPDATE_WEATHER, SET_ERROR_MESSAGE, RESET_WEATHER } from '../constants'
import { get as _get } from 'lodash';

export function fetchWeather(city) {
  return async dispatch => {
    try {
      let url = `${constant.WEATHER_API}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, currentWeather
      const response = await axios.get(url);
      if(response && response.data)
      currentWeather = _get(response.data, 'weather[0].description')
      dispatch(updateWeatherData(currentWeather));
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
