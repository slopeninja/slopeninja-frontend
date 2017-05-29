import React from 'react';
import HighwayIcon from '../HighwayIcon/HighwayIcon';
import './Chains.css';


const Chains = ({ routes, onChangeCard }) => {
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
        <button
          onClick={() => onChangeCard('R1')}
          className="ResortInfoBody-content-chains-link"
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          <span>R1</span>
        </button>
        { r1HighwayIcons }
      </div>
    );
  }

  let r2Row;
  if (r2HighwayIcons.length > 0) {
    r2Row = (
      <div className="ResortInfoBody-content-chains-row">
        <button
          onClick={() => onChangeCard('R2')}
          className="ResortInfoBody-content-chains-link"
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          <span>R2</span>
        </button>
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

export default Chains;
