import React from 'react';
import appleStore from '../../../public/images/appleStore.svg';
import googlePlay from '../../../public/images/googlePlay.svg';
// import alexaStore from '../../../public/images/alexaStore.svg';

import './AppDownloadCard.css';

const AppDownloadCard = () => (
  <div className="AppDownloadCard dashed-gradient">
    <span className="AppDownloadCard-title">
      Download the Slope Ninja app.
    </span>
    <div className="AppDownloadCard-links">
      <div>
        <a href="https://itunes.apple.com/us/app/slope-ninja/id1297809634?ls=1&mt=8" target="_blank" rel="noopener noreferrer">
          <img src={appleStore} alt="download from Apple Store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=ninja.slope.app" target="_blank" rel="noopener noreferrer">
          <img src={googlePlay} alt="download from Google Play" />
        </a>
      </div>
      <div>
        {/* <a href="" target="_blank" rel="noopener noreferrer">
          <img src={alexaStore} alt="download from Alexa Skills Store" />
        </a> */}
      </div>
    </div>
  </div>
);

export default AppDownloadCard;
