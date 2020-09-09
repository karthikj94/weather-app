import { UPDATE_WEATHER, UPDATE_TEMPERATURE, UPDATE_HUMIDITY, UPDATE_WIND, SET_ERROR_MESSAGE, RESET_WEATHER } from '../constants'

export default function reducer(state = {
    weather: '',
    temperature: '',
    humidity: '',
    wind: '',
    errorMsg: ''
  }, action) {
  switch (action.type) {
    case UPDATE_WEATHER:
      return Object.assign({}, state, {
        weather: action.payload,
        errorMsg: ''
      });

    case UPDATE_TEMPERATURE:
        return Object.assign({}, state, {
          temperature: action.payload,
          errorMsg: ''
        });
    
    case UPDATE_HUMIDITY:
        return Object.assign({}, state, {
          humidity: action.payload,
          errorMsg: ''
        });
    
    case UPDATE_WIND:
        return Object.assign({}, state, {
          wind: action.payload,
          errorMsg: ''
        });
    
    
    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMsg: action.payload,
        weather: '',
        temperature: '',
        humidity: '',
        wind: ''
      });

    case RESET_WEATHER:
      return Object.assign({}, state, {
        weather: '',
        temperature: '',
        humidity: '',
        wind: '',
        errorMsg: ''
      })
    
    default:
      return state;
  }
}