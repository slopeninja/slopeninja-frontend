import React from 'react';
import appleStore from '../../../public/images/appleStore.svg';
import googlePlay from '../../../public/images/googlePlay.svg';

import './AppDownloadCard.css';

const AppDownloadCard = () => (
  <div className="AppDownloadCard">
    <span className="AppDownloadCard-title">
      Download the Slope Ninja app.
    </span>
    <div className="AppDownloadCard-links">
      <a href="#">
        <img src={appleStore} alt="download from Apple Store" />
      </a>
      <a href="#">
        <img src={googlePlay} alt="download from Google Play" />
      </a>
    </div>
  </div>
);

export default AppDownloadCard;
