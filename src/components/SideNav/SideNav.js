import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import ResortNavCard from './ResortNavCard';
import './SideNav.css';

const LoadingIndicator = () => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner spinnerName="three-bounce" />
  </div>
);

const SideNav = ({ resorts, match }) => {
  const resortId = match.params.resortId;

  let hideSideNavOnMobileClassName;
  if (resortId) {
    hideSideNavOnMobileClassName = 'SideNav-hideOnMobile';
  }

  let sideNavContent = resorts.map(resort => (
    <ResortNavCard key={resort.id} selected={resortId === resort.id} resort={resort} />
  ));

  if (sideNavContent.length === 0) {
    sideNavContent = (
      <LoadingIndicator />
    );
  }

  const className = classNames(['SideNav-wrapper', hideSideNavOnMobileClassName]);

  return (
    <nav className={className}>
      {
        sideNavContent
      }
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts,
  };
};

const ConnectedSideNav = connect(
  mapStateToProps,
)(SideNav);

export default ConnectedSideNav;
