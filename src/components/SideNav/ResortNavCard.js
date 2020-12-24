import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ProgressBar from '../ResortInfoCard/ProgressBar';
import Snow from './Snow';

import './ResortNavCard.css';

const ResortNavCard = ({ resort, selected }) => {
  let liftsProgress;
  let trailsProgress;

  if (resort.liftCounts.open !== null && resort.liftCounts.total !== null) {
    liftsProgress = Math.ceil(
      (resort.liftCounts.open / resort.liftCounts.total) * 100,
    );
  }

  if (resort.trailCounts.open !== null && resort.trailCounts.total !== null) {
    trailsProgress = Math.ceil(
      (resort.trailCounts.open / resort.trailCounts.total) * 100,
    );
  }

  let selectedSytle;
  if (selected) {
    selectedSytle = {
      backgroundColor: '#EDEDED',
    };
  }
  let snow;
  if (resort.weather.condition === 'snow') {
    snow = (<Snow />);
  }

  return (
    <Link
      to={`/resorts/${resort.shortName}`}
      style={{
        marginBottom: '1pc',
      }}
    >
      <div className="ResortNavCard" style={selectedSytle}>
        {snow}
        <figure className="ResortNavCard-logo">
          <img
            alt="logo"
            src={resort.logo}
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
};

export default ResortNavCard;
