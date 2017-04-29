import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import FourOhFour from '../FourOhFour/FourOhFour';
import HomeButton from '../HomeButton/HomeButton';
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
  let hideMainOnMobileClassName;
  if (!resortId) {
    hideMainOnMobileClassName = 'Main-hideOnMobile';
  }

  const className = classNames(['Main-wrapper', hideMainOnMobileClassName]);


  if (!resortId) {
    return (
      <main className={className}>
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
      <main className={className}>
        <FourOhFour />
      </main>
    );
  }


  return (
    <main className={className}>
      <HomeButton />
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
