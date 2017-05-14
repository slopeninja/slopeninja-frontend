import React from 'react';
import '../ResortInfoCard.css';

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

const Row1 = ({ resort }) => (
  <div className="row">
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Temprature temprature={resort.weather.temprature} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <BaseCondition base={resort.weather.base} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <NewSnow newSnow={resort.weather.newSnow} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <SnowDepth snowDepth={resort.weather.snowDepth} />
    </div>
  </div>
);

export default Row1;
