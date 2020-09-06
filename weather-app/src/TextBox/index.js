import React from 'react';
import constants from '../resources' 
import './style.css';

const TextBox = (props) => {
  return (
    <div className="text-field">
      <input type="text" name="city" id="city" value={props.city} placeholder="Type the city name..." autoFocus onChange={props.handleCity}/>
    </div>
  );
}

export default TextBox;
