import React from 'react';
import { connect } from 'react-redux';
import github from './githubLogo.svg';
import './OpenSourceBanner.css';

const OpenSourceBanner = (props) => {
  const snowingResort = props.resorts.find(
    resort => resort.weather.condition === 'snow',
  );

  if (snowingResort) {
    return null;
  }

  return (
    <a
      className="OpenSourceBanner-wrapper"
      href="https://github.com/juliaqiuxy/slopeninja-frontend"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt=""
        style={{
          width: '20px',
          marginLeft: '14px',
          marginRight: '8px',

        }}
        src={github}
      />
      <span className="OpenSourceBanner-text">
        {'Slope Ninja is open source. Send a pull request on GitHub.'}
      </span>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts.resorts,
  };
};

const ConnectedWeatherBanner = connect(
  mapStateToProps,
)(OpenSourceBanner);

export default ConnectedWeatherBanner;
