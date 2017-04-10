import { connect } from 'react-redux';
import React from 'react';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import { LAKE_TAHOE_COORDS } from '../../reducer';
import FourOhFour from '../FourOhFour/FourOhFour';
import BackButton from '../BackButton/BackButton';
import './Main.css';

const Main = (props) => {
  const resortId = props.match.params.resortId;

  const resort = props.resorts.find(
    r => r.id === resortId,
  );

  if (!resortId) {
    return <Map coords={LAKE_TAHOE_COORDS} zoom={11} />;
  }

  if (!resort) {
    return <FourOhFour />;
  }


  return (
    <main className="Main-wrapper">
      <BackButton />
      <ResortInfoCard resort={resort} />
      <Map coords={resort.coords} zoom={14} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts,
  };
};

const ConnectedMain = connect(
  mapStateToProps,
)(Main);

export default ConnectedMain;
