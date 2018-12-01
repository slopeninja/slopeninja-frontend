import React from 'react';
import { connect } from 'react-redux';
import sampleSize from 'lodash.samplesize';
import snowflake from '../ResortInfoCard/images/snow-white.svg';
import './WeatherBanner.css';

const generateBannerText = (resorts) => {
  if (!resorts) {
    return null;
  }

  const len = resorts.length;

  if (len === 1) {
    const [r1] = resorts;
    return (
      <span className="WeatherBanner-text">
        Snowing at <strong>{r1.name}</strong>! Keep up the snow dance until it
        spreads to the rest of the mountains around.
      </span>
    );
  }

  if (len === 2) {
    const [r1, r2] = resorts;
    return (
      <span className="WeatherBanner-text">
        That snow dance of yours! <strong>{r1.name}</strong> just joined{' '}
        <strong>{r2.name}</strong> with reports of pow and more to come.
      </span>
    );
  }

  if (len === 3) {
    const [r1, r2, r3] = resorts;
    return (
      <span className="WeatherBanner-text">
        Powder vibes! It’s getting white all over{' '}
        <strong>{r1.name}</strong>, <strong>{r2.name}</strong> and{' '}
        <strong>{r3.name}</strong>.
      </span>
    );
  }

  const [r1, r2] = sampleSize(resorts, 2);
  return (
    <span className="WeatherBanner-text">
      Wowza! Everyone’s abuzz with reports of snow. It’s now dumping at{' '}
      <strong>{r1.name}</strong>, <strong>{r2.name}</strong> and {len} other
      resorts.
    </span>
  );
};

const WeatherBanner = (props) => {
  const snowingResorts = props.resorts.filter(
    resort => resort.weather.condition === 'snow',
  );

  if (snowingResorts.length === 0) {
    return null;
  }

  const bannerText = generateBannerText(snowingResorts);

  return (
    <div className="WeatherBanner-wrapper">
      <img
        alt="snowflake"
        style={{
          width: '20px',
          marginLeft: '14px',
          marginRight: '8px',
        }}
        src={snowflake}
      />
      {bannerText}
    </div>
  );
};

const mapStateToProps = state => ({
  resorts: state.app.resorts.resorts,
});

const ConnectedWeatherBanner = connect(mapStateToProps)(WeatherBanner);

export default ConnectedWeatherBanner;
