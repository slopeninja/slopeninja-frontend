import React from 'react';
import '../ResortInfoCard.css';

const Box1 = ({ temprature }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Temprature</span>
    <span className="ResortInfoBody-content">{`${temprature}°` }</span>
  </div>
);

const Box2 = ({ base }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Base Condition</span>
    <span className="ResortInfoBody-content">{ base }</span>
  </div>
);

const Box3 = ({ newSnow }) => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">New Snow</span>
    <span className="ResortInfoBody-content">{`${newSnow}"` }</span>
  </div>
);

const Box4 = ({ snowDepth }) => (
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
      <Box1 temprature={resort.weather.temprature} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box2 base={resort.weather.base} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box3 newSnow={resort.weather.newSnow} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box4 snowDepth={resort.weather.snowDepth} />
    </div>
  </div>
);

export default Row1;
