import React from 'react';
import twitterLogo from '../../../public/images/twitterLogo.svg';

import './TwitterCard.css';

const TwitterCard = () => (
  <div className="TwitterCard dashed-gradient">
    <a className="TwitterCard-link" href="https://twitter.com/SlopeNinja" target="_blank" rel="noopener noreferrer">
      <img src={twitterLogo} alt="download from Google Play" />
      <span className="TwitterCard-title">
        {`${'Follow '}`}
        <span className="TwitterCard-link-underline">@slopeninja</span>
        {`${' on Twitter for snow updates.'}`}
      </span>
    </a>
  </div>
);

export default TwitterCard;
