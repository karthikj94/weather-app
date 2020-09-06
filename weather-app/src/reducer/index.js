import { UPDATE_WEATHER, SET_ERROR_MESSAGE, RESET_WEATHER } from '../constants'

export default function reducer(state = {
    weather: '',
    errorMsg: ''
  }, action) {
  switch (action.type) {
    case UPDATE_WEATHER:
      return Object.assign({}, state, {
        weather: action.payload,
        errorMsg: ''
      });

    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMsg: action.payload,
        weather: ''
      });

    case RESET_WEATHER:
      return Object.assign({}, state, {
        weather: '',
        errorMsg: ''
      })
    
    default:
      return state;
  }
}