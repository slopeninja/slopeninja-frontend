import React, { Component } from 'react';
import ProgressBar from '../ResortInfoCard/ProgressBar';
import HighwayIcon from '../HighwayIcon/HighwayIcon';
import IncidentIcon from '../HighwayIcon/IncidentIcon';
import AmbiguousIcon from '../HighwayIcon/AmbiguousIcon';

import FlippableCard from '../FlippableCard/FlippableCard';
import back from '../ResortInfoCard/images/back.svg';
import Chains from './Chains';
import './ResortInfoCardIconInfo.css';

const OpenRoutes = ({ roads }) => {
  const highwayIcons = roads.map((road) => {
    const iconStyle = {
      opacity: (road.status === 'closed') ? 0.1 : 1,
    };

    let incidentIcon;
    if (road.status === 'incident') {
      incidentIcon = (
        <a
          className="OpenRoutes-exception-indicator"
          href={road.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IncidentIcon />
        </a>
      );
    }

    let ambiguousIcon;
    if (road.status === 'ambiguous') {
      ambiguousIcon = (
        <a
          className="OpenRoutes-exception-indicator"
          href={road.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AmbiguousIcon />
        </a>
      );
    }

    return (
      <a
        key={`${road.prefix}${road.number}`}
        href={road.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        className="ResortInfoBox-content-openroute-icon"
      >
        <HighwayIcon width={48} height={48} highwayNumber={road.number} />
        {incidentIcon}
        {ambiguousIcon}
      </a>
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

const OpenLifts = ({ liftCounts }) => {
  let percent;
  let liftData = '-';
  if (liftCounts.open !== null && liftCounts.total !== null) {
    liftData = `${liftCounts.open} / ${liftCounts.total}`;
    percent = Math.ceil(
      (liftCounts.open / liftCounts.total) * 100,
    );
  }

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Open Lifts</span>
      <div className="ResortInfoBody-content">
        <span style={{ marginBottom: '1pc' }}>{liftData}</span>
        <ProgressBar progress={percent} />
      </div>
    </div>
  );
};

const OpenTrails = ({ trailCounts }) => {
  let percent;
  let trailData = '-';
  if (trailCounts.open !== null && trailCounts.total !== null) {
    trailData = `${trailCounts.open} / ${trailCounts.total}`;
    percent = Math.ceil(
      (trailCounts.open / trailCounts.total) * 100,
    );
  }

  return (
    <div className="ResortInfoBox">
      <span className="ResortInfoBody-title">Open Trails</span>
      <div className="ResortInfoBody-content">
        <span style={{ marginBottom: '1pc' }}>{trailData}</span>
        <ProgressBar progress={percent} />
      </div>
    </div>
  );
};

const RoadTooltip = ({ onChangeCard, id, labels }) => {
  const labelElements = labels.map((label) => (
    <div className="RoadTooltip-label">
      <span className="RoadTooltip-text">{label}</span>
    </div>
  ));

  return (
    <div className="ResortInfoBox">
      <button
        type="button"
        onClick={() => onChangeCard(undefined)}
        className="RoadTooltip-title"
      >
        <img alt="Go back" src={back} style={{ marginRight: '6px' }} />
        { id }
      </button>
      <span className="RoadTooltip-content">
        At least one of:
      </span>
      <div className="RoadTooltip-labels">
        { labelElements }
      </div>
    </div>
  );
};

class ResortInfoCardIconInfo extends Component {
  constructor(props) {
    super(props);

    this.renderFrontCard = this.renderFrontCard.bind(this);
    this.handleFlipCard = this.handleFlipCard.bind(this);

    this.state = {
      currentCard: undefined,
    };
  }

  handleFlipCard(currentCard) {
    this.setState({
      currentCard,
    });
  }

  renderFrontCard() {
    const { resort } = this.props;
    return (
      <Chains
        roads={resort.roads}
        onChangeCard={this.handleFlipCard}
      />
    );
  }

  render() {
    const { resort } = this.props;

    return (
      <div className="row no-gutters">
        <div className="col-12 col-sm-12 col-md-12 col-xl-3">
          <OpenRoutes roads={resort.roads} />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-xl-3">
          <div
            style={{
              width: '100%',
              height: '160px',
            }}
          >
            <FlippableCard
              duriation={1}
              cubicBezier={[0.15, 0.90, 0.25, 1.25]}
              currentCard={this.state.currentCard}
              renderFrontCard={this.renderFrontCard}
            >
              <RoadTooltip
                id="R1"
                onChangeCard={this.handleFlipCard}
                labels={['Chains', 'AWD', 'Snow tires']}
              />
              <RoadTooltip
                id="R2"
                onChangeCard={this.handleFlipCard}
                labels={['Chains', 'AWD w/Snow tires']}
              />
            </FlippableCard>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-xl-3">
          <OpenLifts liftCounts={resort.liftCounts} />
        </div>

        <div className="col-6 col-sm-6 col-md-6 col-xl-3">
          <OpenTrails trailCounts={resort.trailCounts} />
        </div>
      </div>
    );
  }
}
export default ResortInfoCardIconInfo;
