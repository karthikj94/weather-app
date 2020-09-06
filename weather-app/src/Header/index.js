import React from 'react';
import constants from '../resources' 
import './style.css';

const Header = (props) => {
  return (
    <header className="app-header">{props.name}</header>
  );
}

export default Header;
