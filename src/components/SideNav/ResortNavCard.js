import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ProgressBar from '../Main/ResortInfoCard/ProgressBar';
import { RESORT_LOGOS } from '../Main/ResortInfoCard/ResortInfoCard';

import './ResortNavCard.css';

const ResortNavCard = ({ resort, selected }) => {
  const liftsProgress = Math.ceil(
    (resort.lifts.open / resort.lifts.total) * 100,
  );

  const trailsProgress = Math.ceil(
    (resort.trails.open / resort.trails.total) * 100,
  );

  let selectedSytle;
  if (selected) {
    selectedSytle = {
      backgroundColor: '#EDEDED',
    };
  }

  return (
    <Link to={`/resorts/${resort.id}`}>
      <div className="ResortNavCard" style={selectedSytle}>
        <figure className="ResortNavCard-logo">
          <img
            alt="logo"
            src={RESORT_LOGOS[resort.name]}
          />
        </figure>
        <div className="ResortNavCard-info">
          <div className="ResortNavCard-title">
            <h3>{resort.name}</h3>
            <h5>{resort.location}</h5>
          </div>
          <div className="ResortNavCard-status">
            <div className="ResortNavCard-status-section">
              <h5 style={{ marginBottom: '1pc' }}>Open Lifts</h5>
              <ProgressBar
                small
                progress={liftsProgress}
              />
            </div>
            <div className="ResortNavCard-status-section">
              <h5 style={{ marginBottom: '1pc' }}>Open Trails</h5>
              <ProgressBar
                small
                progress={trailsProgress}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ResortNavCard;
