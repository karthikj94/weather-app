import React from 'react';
import constants from '../resources' 
import './style.css';

const Alert = (props) => {
  return (
    <div>
        {props.weather ? <div className="showWeather">{props.weather}</div> : null }
        {props.errorMsg ? <div className="showError">{props.errorMsg}</div> : null }
    </div>
  );
}

export default Alert;
