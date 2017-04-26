import { connect } from 'react-redux';
import React from 'react';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import FourOhFour from '../FourOhFour/FourOhFour';
import BackButton from '../BackButton/BackButton';
import './Main.css';

const LAKE_TAHOE_COORDS = {
  lat: 39.0898559,
  lng: -120.014292,
};

const Main = (props) => {
  const resortId = props.match.params.resortId;

  const resort = props.resorts.find(
    r => r.id === resortId,
  );

  // debugger;


  if (!resortId) {
    return (
      <main className="Main-wrapper">
        <Map
          coords={LAKE_TAHOE_COORDS}
          zoom={10}
          resorts={props.resorts}
          style={{ marginTop: 0 }}
        />
      </main>
    );
  }

  if (!resort) {
    return (
      <main className="Main-wrapper">
        <FourOhFour />
      </main>
    );
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
    resortsStatus: state.app.resortsStatus,
  };
};

const ConnectedMain = connect(
  mapStateToProps,
)(Main);

export default ConnectedMain;
