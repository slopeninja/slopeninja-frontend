import React from 'react';
import ProgressBar from '../ProgressBar';
import HighwayIcon from '../../../HighwayIcon/HighwayIcon';

import '../ResortInfoCard.css';

const Box5 = ({ routes }) => {
  const routesKeys = Object.keys(routes);

  const highwayIcons = routesKeys.map((key) => {
    const iconStyle = {
      opacity: routes[key].status === 'Open' ? 1 : 0.1,
    };

    return (
      <span key={key} className="ResortInfoBox-content-openroute-icon" style={iconStyle}>
        <HighwayIcon width={48} height={48} highwayNumber={routes[key].label} />
      </span>
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
  const routesKeys = Object.keys(routes);
  const R1Highways = routesKeys.filter(key => routes[key].chains === 'R1');
  const R2Highways = routesKeys.filter(key => routes[key].chains === 'R2');

  const r1HighwayIcons = R1Highways.map(
    key => (
      <span key={key} style={{ marginLeft: '1pc' }}>
        <HighwayIcon width={36} height={36} highwayNumber={routes[key].label} />
      </span>
    ),
  );
  const r2HighwayIcons = R2Highways.map(
    key => (
      <span key={key} style={{ marginLeft: '1pc' }}>
        <HighwayIcon width={36} height={36} highwayNumber={routes[key].label} />
      </span>
    ),
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

const Row2 = ({ resort }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
      <Box5 routes={resort.routes} />
    </div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
      <Box6 routes={resort.routes} />
    </div>
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
      <Box7 lifts={resort.lifts} />
    </div>

    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
      <Box8 trails={resort.trails} />
    </div>
  </div>
);

export default Row2;
