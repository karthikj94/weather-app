import React from 'react';
import constants from '../resources' 
import './style.css';

const Button = (props) => {
  return (
    <button type="submit" onClick={props.getWeather}>Find my weather!</button>
  );
}

export default Button;
