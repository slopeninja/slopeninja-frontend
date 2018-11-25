import React from 'react';
import './Footer.css';
import logo from './logo.svg';
import heart from './heart.svg';

const Footer = () => (
  <div className="Footer-wrapper">
    <div className="Footer-text-container">
      <span className="Footer-text">
        © Slope Ninja. All rights reserved. Made with
        <img
          alt="heart"
          style={{
            width: '16px',
            marginLeft: '5px',
            marginRight: '5px',
          }}
          src={heart}
        />
        in San Francisco.
      </span>
    </div>
    <a href='/' className="Footer-logo">
      <img
        style={{
          width: ' 2pc',
          alignSelf: 'flex-end',
        }}
        alt="Slope Ninja"
        src={logo}
      />
    </a>
  </div>
);
export default Footer;


// <br />
// <img style={{ height: '2pc' }} alt="Slope Ninja" src={logo} />
