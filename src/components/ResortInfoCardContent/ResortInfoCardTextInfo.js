import React from 'react';
import './ResortInfoCardTextInfo.css';

const Temprature = ({ temprature }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Temprature</span>
    <span className="ResortInfoBody-content">{`${temprature}°` }</span>
  </div>
);

const BaseCondition = ({ base }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Base Condition</span>
    <span className="ResortInfoBody-content">{ base }</span>
  </div>
);

const NewSnow = ({ newSnow }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">New Snow</span>
    <span className="ResortInfoBody-content">{`${newSnow}"` }</span>
  </div>
);

const SnowDepth = ({ snowDepth }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Snow Depth</span>
    <span className="ResortInfoBody-content">{`${snowDepth}"` }</span>
  </div>
);

const ResortInfoCardTextInfo = ({ resort }) => (
  <div className="row no-gutters">
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3"
    >
      <Temprature temprature={resort.weather.temprature} />
    </div>
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3"
    >
      <BaseCondition base={resort.weather.base} />
    </div>
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3"
    >
      <NewSnow newSnow={resort.weather.newSnow} />
    </div>
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3"
    >
      <SnowDepth snowDepth={resort.weather.snowDepth} />
    </div>
  </div>
);

export default ResortInfoCardTextInfo;
