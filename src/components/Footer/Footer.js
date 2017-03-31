import React from 'react';
import './Footer.css';
import logo from './logo.svg';

const Footer = () => (
  <div className="Footer-wrapper">
    <span className="Footer-text">
      Made with <span style={{ color: '#FF4891' }}>♥</span> in San Francisco.
    </span>
    <br />
    <span className="Footer-text">© Slope Ninja. All rights reserved.</span>
    <br />
    <img style={{ height: '2pc' }} alt="Slope Ninja" src={logo} />
  </div>
);
export default Footer;
