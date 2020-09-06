import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="app-footer">{props.name}</footer>
  );
}

export default Footer;
