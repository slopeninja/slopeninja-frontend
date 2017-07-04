import React from 'react';
// import { connect } from 'react-redux';
import ResortInfoCardTextInfo from '../ResortInfoCardContent/ResortInfoCardTextInfo';
import ResortInfoCardIconInfo from '../ResortInfoCardContent/ResortInfoCardIconInfo';

import './ResortInfoCard.css';

import sunny from './images/sunny.svg';
import clear from './images/clear.svg';
import cloudy from './images/cloudy.svg';
import thunderstorm from './images/thunderstorm.svg';
import rain from './images/rain.svg';
import snow from './images/snow.svg';

const WEATHER_ICONS = {
  sunny,
  clear,
  cloudy,
  thunderstorm,
  rain,
  snow,
};

const ResortInfoHeader = ({ resort }) => (
  <header className="ResortInfoHeader-header">
    <div className="row">
      <div className="col-sm-12 col-xl-10">
        <div className="ResortInfoHeader-branding">
          <figure className="ResortInfoHeader-logo">
            <img
              alt="logo"
              src={resort.logo}
            />
          </figure>
          <div>
            <h1 className="ResortInfoHeader-header-title">{resort.name}</h1>
            <h3 className="ResortInfoHeader-header-subtitle">
              {'Today\'s Forcast'}
            </h3>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-xl-2">
        <div className="ResortInfoHeader-extras">
          <div className="row">
            <div className="col-6 col-xl-12">
              <div className="ResortInfoHeader-status">
                <h3>{resort.status ===  'open' ? 'Open' : 'Closed'}</h3>
              </div>
            </div>
            <div className="col-6 col-xl-12">
              <div className="ResortInfoHeader-condition">
                <img
                  style={{ width: '48px' }}
                  alt="logo"
                  src={WEATHER_ICONS[resort.weather.condition]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ResortInfoBody = ({ resort }) => (
  <div className="ResortInfoBody-container">
    <ResortInfoCardTextInfo resort={resort} />
    <ResortInfoCardIconInfo resort={resort} />
  </div>
);

const ResortInfoCard = ({ resort }) => (
  <section className="ResortInfoCard">
    <ResortInfoHeader resort={resort} />
    <ResortInfoBody resort={resort} />
  </section>
);

export default ResortInfoCard;
