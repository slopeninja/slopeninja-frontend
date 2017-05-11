import React from 'react';
// import { connect } from 'react-redux';
import Row1 from './Rows/Row1';
import Row2 from './Rows/Row2';

import './ResortInfoCard.css';

import sunny from './images/sunny.svg';
import cloudy from './images/cloudy.svg';
import thunderstorm from './images/thunderstorm.svg';
import rain from './images/rain.svg';
import snow from './images/snow.svg';

const WEATHER_ICONS = {
  sunny,
  cloudy,
  thunderstorm,
  rain,
  snow,
};

const ResortInfoHeader = ({ resort }) => (
  <header className="ResortInfoHeader-header">
      <div className="row">
        <div className="col-xs-12 col-lg-10">
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

        <div className="col-xs-12 col-lg-2">

          <div className="row">
            <div className="col-xs-6 col-lg-12">
              <div className="ResortInfoHeader-status">
                <h3>{resort.status}</h3>
              </div>
            </div>
            <div className="col-xs-6 col-lg-12">
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
  </header>
);

const ResortInfoBody = ({ resort }) => (
  <div>
    <Row1 resort={resort} />
    <Row2 resort={resort} />
  </div>
);

const ResortInfoCard = ({ resort }) => (
  <section className="ResortInfoCard">
    <ResortInfoHeader resort={resort} />
    <ResortInfoBody resort={resort} />
  </section>
);

export default ResortInfoCard;
