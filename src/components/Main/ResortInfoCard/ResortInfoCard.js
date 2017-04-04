import React from 'react';
// import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import './ResortInfoCard.css';

import hw50 from './hw50.svg';
import hw80 from './hw80.svg';
import hw88 from './hw88.svg';

import sunny from './sunny.svg';
import cloudy from './cloudy.svg';
import thunderstorm from './thunderstorm.svg';
import rain from './rain.svg';
import snow from './snow.svg';

import Boreal from './Boreal.svg';
import Sierra from './Sierra.svg';
import Squaw from './Squaw.svg';
import Sugerbowl from './Sugarbowl.svg';
import Kirkwood from './Kirkwood.svg';
import Northstar from './Northstar.svg';
import Hevenly from './Hevenly.svg';
import MtRose from './MtRose.svg';
import Donner from './Donner.svg';
import Diamond from './Diamond.svg';
import Homewood from './Homewood.svg';

const HIGHWAY_ICONS = {
  hw80,
  hw88,
  hw50,
};

const WEATHER_ICONS = {
  sunny,
  cloudy,
  thunderstorm,
  rain,
  snow,
};

export const RESORT_LOGOS = {
  Boreal,
  'Sierra-at-Tahoe': Sierra,
  'Squaw Valley': Squaw,
  'Suger Bowl': Sugerbowl,
  'Hevenly Mountain': Hevenly,
  Northstar,
  'Diamond Peak': Diamond,
  'Donner Ski Ranch': Donner,
  'Mt.Rose': MtRose,
  'Homewood Mountain': Homewood,
  'Kirkwood Mountain': Kirkwood,
};


const ResortInfoHeader = ({ resort }) => (
  <header className="ResortInfoHeader-header">
    <div className="row">

      <div className="col-xs-12 col-lg-10">
        <div className="ResortInfoHeader-branding">
          <figure className="ResortInfoHeader-logo">
            <img
              alt="logo"
              src={RESORT_LOGOS[resort.name]}
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

const Box5 = ({ routes }) => {
  const resortKeys = Object.keys(routes);

  const highwayIcons = resortKeys.map((key) => {
    const iconStyle = {
      opacity: routes[key].status === 'Open' ? 1 : 0.1,
    };

    return (
      <img key={key} style={iconStyle} alt={key} src={HIGHWAY_ICONS[key]} />
    );
  });

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Open Routes</span>
      <div className="ResortInfoBody-content-openroutes">
        { highwayIcons }
      </div>
    </div>
  );
};

const Box6 = ({ routes }) => {
  const resortKeys = Object.keys(routes);
  const R1Highways = resortKeys.filter(key => routes[key].chains === 'R1');
  const R2Highways = resortKeys.filter(key => routes[key].chains === 'R2');

  const r1HighwayIcons = R1Highways.map(
    key => <img key={key} alt={key} src={HIGHWAY_ICONS[key]} />,
  );
  const r2HighwayIcons = R2Highways.map(
    key => <img key={key} alt={key} src={HIGHWAY_ICONS[key]} />,
  );

  let r1Row;
  if (r1HighwayIcons.length > 0) {
    r1Row = (
      <div className="ResortInfoBody-content-chains-row">
        <span
          className="ResortInfoBody-content-chains-text"
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          R1
        </span>
        { r1HighwayIcons }
      </div>
    );
  }

  let r2Row;
  if (r2HighwayIcons.length > 0) {
    r2Row = (
      <div className="ResortInfoBody-content-chains-row">
        <span
          className="ResortInfoBody-content-chains-text"
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          R2
        </span>
        { r2HighwayIcons }
      </div>
    );
  }

  let noChainRow;

  if (!r1Row && !r2Row) {
    noChainRow = (
      <div className="ResortInfoBody-content-chains-row">
        <span className="ResortInfoBody-content-chains-text">
          No chains required.
        </span>
      </div>
    );
  }


  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Chains</span>
      <div className="ResortInfoBody-content-chains">
        {r1Row}
        {r2Row}
        {noChainRow}
      </div>
    </div>
  );
};

const Box7 = ({ lifts }) => {
  const percent = Math.ceil((lifts.open / lifts.total) * 100);

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Open Lifts</span>
      <div className="ResortInfoBody-content">
        <span style={{ marginBottom: '1pc' }}>{lifts.open}</span>
        <ProgressBar progress={percent} />
      </div>
    </div>
  );
};

const Box8 = ({ trails }) => {
  const percent = Math.ceil((trails.open / trails.total) * 100);

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Open Trails</span>
      <div className="ResortInfoBody-content">
        <span style={{ marginBottom: '1pc' }}>{trails.open}</span>
        <ProgressBar progress={percent} />
      </div>
    </div>
  );
};

const Row1 = ({ resort }) => (
  <div className="row">
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box1 temprature={resort.weather.temprature} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box2 base={resort.weather.base} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box3 newSnow={resort.weather.newSnow} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box4 snowDepth={resort.weather.snowDepth} />
    </div>
  </div>
);

const Row2 = ({ resort }) => (
  <div className="row">
    <div
      className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box5 routes={resort.routes} />
    </div>
    <div
      className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box6 routes={resort.routes} />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box7 lifts={resort.lifts} />
    </div>

    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ResortInfoBox-no-gutter"
    >
      <Box8 trails={resort.trails} />
    </div>
  </div>
);

const ResortInfoBody = ({ resort }) => (
  <div className="ResortInfoBody">
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
