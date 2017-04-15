import React from 'react';
import { connect } from 'react-redux';
import './WeatherBanner.css';

const WeatherBanner = (props) => {
  const snowingResort = props.resorts.find(
    resort => resort.weather.condition === 'snow',
  );

  if (!snowingResort) {
    return null;
  }

  return (
    <div className="WeatherBanner-wrapper">
      <span className="WeatherBanner-text">
        ☃️{'Yay! It\'s snowing in Tahoe!'}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts,
  };
};

const ConnectedWeatherBanner = connect(
  mapStateToProps,
)(WeatherBanner);

export default ConnectedWeatherBanner;
