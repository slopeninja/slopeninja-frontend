/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import snowboarders from './snowboarders.svg';
import './FourOhFour.css';

const FourOhFour = () => (
  <div className="FourOhFour">
    <figure className="FourOhFour-imgbox">
      <img
        alt="404"
        src={snowboarders}
        className="FourOhFour-img"
      />
    </figure>
    <span className="FourOhFour-text">Got lost, ski bum?</span>
    <span className="FourOhFour-text">We don't know of such a resort.</span>
  </div>
);

export default FourOhFour;
