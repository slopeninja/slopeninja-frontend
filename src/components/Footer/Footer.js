import React from 'react';
import './Footer.css';
import logo from './logo.svg';
import heart from './heart.svg';

const Footer = () => (
  <div className="Footer-wrapper">
    <div className="Footer-logo" />
    <div className="Footer-textBox">
      <span className="Footer-text">
        Made with
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
      <br />
      <span className="Footer-text">© Slope Ninja. All rights reserved.</span>
    </div>
    <div className="Footer-logo">
      <img
        style={{
          height: '3pc',
          alignSelf: 'flex-end',
        }}
        alt="Slope Ninja"
        src={logo}
      />
    </div>
  </div>
);
export default Footer;


// <br />
// <img style={{ height: '2pc' }} alt="Slope Ninja" src={logo} />
