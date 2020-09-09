import React from 'react';
import constants from '../resources' 
import './style.css';

const Alert = (props) => {
  return (
    <div>
        {(props.weather && Object.keys(props.weather) && Object.keys(props.weather).length > 0) ? 
          <div className="showWeather">
            <div className="weatherHeader">{constants.RESULT_HEADER}</div>
            {Object.keys(props.weather) && Object.keys(props.weather).map((weather, index) => {
              return (
                  <p key={index}><span>{weather}</span> : <span>{props.weather[weather]}</span></p>
              )
            })}
          </div> 
        : null }
        {props.errorMsg ? <div className="showError">{props.errorMsg}</div> : null }
    </div>
  );
}

export default Alert;
