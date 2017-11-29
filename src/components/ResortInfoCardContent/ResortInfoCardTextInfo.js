import React from 'react';
import './ResortInfoCardTextInfo.css';

const Temperature = ({ temperature }) => {
  const temp = temperature !== null ? `${temperature}°` : '-';

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Temperature</span>
      <span className="ResortInfoBody-content">{temp}</span>
    </div>
  );
};

const BaseCondition = ({ base }) => {
  const condition = base || '-';

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Base Condition</span>
      <span className="ResortInfoBody-content">{ condition }</span>
    </div>
  );
};

const NewSnow = ({ newSnow }) => {
  const snow = newSnow !== null ? `${newSnow}"` : '-';

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">New Snow</span>
      <span className="ResortInfoBody-content">{snow}</span>
    </div>
  );
};

const SnowDepth = ({ snowDepth }) => {
  const depth = snowDepth !== null ? `${snowDepth}"` : '-';

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Snow Depth</span>
      <span className="ResortInfoBody-content">{depth}</span>
    </div>
  );
};

const ResortInfoCardTextInfo = ({ resort }) => (
  <div className="row no-gutters">
    <div
      className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-3"
    >
      <Temperature temperature={resort.weather.temperature} />
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
