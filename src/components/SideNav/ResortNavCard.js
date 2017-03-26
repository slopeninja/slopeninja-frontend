import React from 'react';
import './ResortNavCard.css';

const ResortNavCard = () => (
  <div className="ResortNavCard">
    <figure className="ResortNavCard-logo">
      <img
        alt="logo"
        src="http://placehold.it/64x64"
      />
    </figure>
    <div className="ResortNavCard-info">
      <div className="ResortNavCard-title">
        <h3>Squaw Valley</h3>
        <h5>Olympic Valley, CA 96146</h5>
      </div>
      <div className="ResortNavCard-status">
        <div className="ResortNavCard-status-section">
          <h5>Open Lifts</h5>
          <img
            alt="logo"
            src="http://placehold.it/78x14"
          />
        </div>
        <div className="ResortNavCard-status-section">
          <h5>Open Trails</h5>
          <img
            alt="logo"
            src="http://placehold.it/78x14"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ResortNavCard;
