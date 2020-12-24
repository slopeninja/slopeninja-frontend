import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import ResortInfoCard from '../ResortInfoCard/ResortInfoCard';
import Map from './Map';
import FourOhFour from '../FourOhFour/FourOhFour';
import HomeButton from '../HomeButton/HomeButton';
import './Main.css';

const LAKE_TAHOE_COORDS = {
  lat: 39.0898559,
  lng: -120.014292,
};

const Main = (props) => {
  const shortName = props.match.params.shortName;

  const resort = props.resorts.find(
    r => r.shortName === shortName,
  );

  // debugger;
  let hideMainOnMobileClassName;
  if (!shortName) {
    hideMainOnMobileClassName = 'Main-hideOnMobile';
  }

  const className = classNames(['Main-wrapper', hideMainOnMobileClassName]);


  if (!shortName) {
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

const mapStateToProps = state => ({
  resorts: state.app.resorts.resorts,
  resortsStatus: state.app.resorts.resortsStatus,
});

const ConnectedMain = connect(
  mapStateToProps,
)(Main);

export default ConnectedMain;
