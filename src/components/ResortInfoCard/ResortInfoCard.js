import React from 'react';
// import { connect } from 'react-redux';
import ResortInfoCardTextInfo from '../ResortInfoCardContent/ResortInfoCardTextInfo';
import ResortInfoCardIconInfo from '../ResortInfoCardContent/ResortInfoCardIconInfo';

import './ResortInfoCard.css';

import clearDay from './images/clear-day.svg';
import clearNight from './images/clear-night.svg';
import rain from './images/rain.svg';
import snow from './images/snow.svg';
import sleet from './images/sleet.svg';
import wind from './images/wind.svg';
import fog from './images/fog.svg';
import cloudy from './images/cloudy.svg';
import partlyCloudyDay from './images/partly-cloudy-day.svg';
import partlyCloudyNight from './images/partly-cloudy-night.svg';
import hail from './images/hail.svg';
import thunderstorm from './images/thunderstorm.svg';
import tornado from './images/tornado.svg';

const WEATHER_ICONS = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  rain,
  snow,
  sleet,
  wind,
  fog,
  cloudy,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight,
  hail,
  thunderstorm,
  tornado,
};

const ResortInfoHeader = ({ resort }) => (
  <header className="ResortInfoHeader-header">
    <div className="row">
      <div className="col-sm-12 col-xl-10">
        <div className="ResortInfoHeader-branding">
          <a
            href={resort.resortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="ResortInfoHeader-logo">
              <img
                alt="logo"
                src={resort.logo}
              />
            </figure>
          </a>
          <div>
            <a
              href={resort.resortUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="ResortInfoHeader-header-title">{resort.name}</h2>
            </a>
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
                <h3>{resort.status === 'open' ? 'Open' : 'Closed'}</h3>
              </div>
            </div>
            <div className="col-6 col-xl-12">
              <div className="ResortInfoHeader-condition">
                <img
                  className="ResortInfoHeader-weatherIcon"
                  style={{ width: '40px' }}
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
