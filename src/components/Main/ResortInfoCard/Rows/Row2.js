import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import HighwayIcon from '../../../HighwayIcon/HighwayIcon';

import FlippableCard from '../../../FlippableCard/FlippableCard';
import back from '../images/back.svg';
import Chains from './Chains';
import '../ResortInfoCard.css';

const OpenRoutes = ({ routes }) => {
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

const OpenLifts = ({ lifts }) => {
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

const OpenTrails = ({ trails }) => {
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

const RoadTooltip = ({ onChangeCard, id, labels }) => {
  const labelElements = labels.map(label => (
    <div className="RoadTooltip-label">
      <span className="RoadTooltip-text">{label}</span>
    </div>
  ));

  return (
    <div className="ResortInfoBox">
      <a
        href="#"
        onClick={() => onChangeCard(undefined)}
        className="ResortInfoBody-title"
      >
        <img alt="Go back" src={back} style={{ marginRight: '6px' }} />
        { id }
      </a>
      <span className="RoadTooltip-content">
        At least one of:
      </span>
      <div className="RoadTooltip-labels">
        { labelElements }
      </div>
    </div>
  );
};

class Row2 extends Component {
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
    const resort = this.props.resort;
    return (
      <Chains
        routes={resort.routes}
        onChangeCard={this.handleFlipCard}
      />
    );
  }

  render() {
    const resort = this.props.resort;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
          <OpenRoutes routes={resort.routes} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
          <div
            style={{
              width: '100%',
              height: '160px',
            }}
          >
            <FlippableCard
              duriation={1}
              cubicBezier="0.15, 0.90, 0.25, 1.25"
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
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
          <OpenLifts lifts={resort.lifts} />
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
          <OpenTrails trails={resort.trails} />
        </div>
      </div>
    );
  }

}
export default Row2;
