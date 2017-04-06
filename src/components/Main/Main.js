import { connect } from 'react-redux';
import React from 'react';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import FourOhFour from '../FourOhFour/FourOhFour';
import BackButton from '../BackButton/BackButton';
import './Main.css';

const Main = (props) => {
  const resortId = props.match.params.resortId;

  const resort = props.resorts.find(
    r => r.id === resortId,
  );

  if (!resortId) {
    return null;
  }

  if (!resort) {
    return <FourOhFour />;
  }

  return (
    <main className="Main-wrapper">
      <BackButton />
      <ResortInfoCard resort={resort} />
      <Map />
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
